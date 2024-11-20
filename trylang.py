import spacy
from tkinter import Tk, Label, Entry, Button
from PIL import Image, ImageTk
import os

# Load the spaCy model for English
nlp = spacy.load("en_core_web_sm")

# Path to the folder containing FSL images
FSL_IMAGE_FOLDER = "fsl_alphabet"

def get_image_path(word):
    """Get the image path for the corresponding word or letter."""
    filename = f"{word.upper()}.png"  # Example: A.png for 'A'
    return os.path.join(FSL_IMAGE_FOLDER, filename)

def display_fsl_translation(osv_sentence):
    """Display each word in the OSV sentence using FSL images."""
    for word in osv_sentence.split():
        if word.isalpha():
            image_path = get_image_path(word[0])  # Use first letter for fingerspelling
            if os.path.exists(image_path):
                img = Image.open(image_path)
                img = img.resize((300, 300), Image.ANTIALIAS)
                img_tk = ImageTk.PhotoImage(img)
                label.config(image=img_tk)
                label.image = img_tk
                window.update()
                time.sleep(1)  # Display each image for 1 second

def translate_to_fsl(input_text):
    """Translate English text to FSL in OSV structure."""
    # Parse the sentence
    doc = nlp(input_text)
    subject = None
    verb = None
    obj = None

    # Extract subject, verb, and object
    for token in doc:
        if token.dep_ == "nsubj":
            subject = token.text
        elif token.dep_ == "dobj":
            obj = token.text
        elif token.pos_ == "VERB":
            verb = token.text

    # Reorder to OSV structure
    if obj and subject and verb:
        osv_sentence = f"{obj} {subject} {verb}"
    else:
        osv_sentence = input_text  # Fallback to input text if parsing fails

    # Display FSL translation
    display_fsl_translation(osv_sentence)

def on_translate():
    """Handle translation button click."""
    input_text = text_entry.get()
    if input_text.strip():
        translate_to_fsl(input_text)

# Create the GUI
window = Tk()
window.title("English to FSL Translator")
window.geometry("400x400")

# Input label and text entry
Label(window, text="Enter text to translate:").pack(pady=10)
text_entry = Entry(window, width=30)
text_entry.pack(pady=10)

# Translate button
translate_button = Button(window, text="Translate", command=on_translate)
translate_button.pack(pady=20)

# Label to display FSL images
label = Label(window)
label.pack(pady=20)

# Run the application
window.mainloop()
