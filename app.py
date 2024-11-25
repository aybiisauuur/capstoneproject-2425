from flask import Flask, render_template, request, jsonify
import spacy
import os
from PIL import Image

# Initialize Flask app
app = Flask(__name__)

# Load spaCy model
nlp = spacy.load("en_core_web_sm")

# Path to FSL images
FSL_IMAGE_FOLDER = "fsl_alphabet"

def get_image_path(letter):
    """Get the image path for a letter."""
    return os.path.join(FSL_IMAGE_FOLDER, f"{letter.upper()}.png")

def translate_to_fsl(input_text):
    """Translate English text to FSL in OSV structure."""
    doc = nlp(input_text)
    subject, verb, obj, wh_word = None, None, None, None

    # Extract key elements
    for token in doc:
        if token.dep_ == "nsubj":  # Subject
            subject = token.text
        elif token.dep_ == "dobj":  # Object
            obj = token.text
        elif token.pos_ == "VERB":  # Verb
            verb = token.text
        elif token.tag_ in ("WDT", "WP", "WRB"):  # WH-words
            wh_word = token.text

    # Reorder based on OSV structure
    if wh_word and subject and verb:
        osv_sentence = f"{subject} {verb} {wh_word}"
    elif obj and subject and verb:
        osv_sentence = f"{obj} {subject} {verb}"
    else:
        osv_sentence = input_text  # Fallback

    # Create a list of image paths for translation
    images = []
    for word in osv_sentence.split():
        for letter in word:
            if letter.isalpha():
                image_path = get_image_path(letter)
                if os.path.exists(image_path):
                    images.append(image_path)

    return images

@app.route('/')
def index():
    """Render the main HTML page."""
    return render_template('index-home.html')

@app.route('/translate', methods=['POST'])
def translate():
    """Handle translation requests."""
    input_text = request.get_json()
    if not input_text:
        return jsonify({"error": "Input cannot be empty!"}), 400

    try:
        images = translate_to_fsl(input_text)
        return jsonify({"images": image_paths})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

    images = translate_to_fsl(input_text)
    if not images:
        return jsonify({"error": "Translation failed. Ensure input is simple."}), 400

    return jsonify({"images": images})

if __name__ == '__main__':
    app.run(debug=True)
