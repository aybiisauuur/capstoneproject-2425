# sample backend !! to be integrated in the frontend
# grammar/structure is okay
# limitation: basic sentences and questions only 

import spacy
from tkinter import Tk, Label, Entry, Button, messagebox
from PIL import Image, ImageTk
import os
import time

# Load the spaCy model for English
nlp = spacy.load("en_core_web_sm")

# Path to the folder containing FSL images
FSL_IMAGE_FOLDER = "fsl_dataset"

def get_image_path(word):
    """Get the image path for the corresponding word or letter."""
    filename = f"{word.upper()}.png"  # Example: A.png for 'A'
    return os.path.join(FSL_IMAGE_FOLDER, filename)

def display_fsl_translation(osv_sentence):
    """Display each letter in the OSV sentence using FSL images."""
    for word in osv_sentence.split():
        for letter in word:  # Loop through each letter in the word
            if letter.isalpha():  # Check if the character is a letter
                image_path = get_image_path(letter)  # Get the image for the letter
                if os.path.exists(image_path):
                    img = Image.open(image_path)
                    img = img.resize((300, 300), Image.Resampling.LANCZOS)  # Resize the image
                    img_tk = ImageTk.PhotoImage(img)
                    label.config(image=img_tk)
                    label.image = img_tk
                    window.update()
                    time.sleep(1)  # Display each image for 1 second

def validate_input(input_text):
    """Validate user input for simplicity and structure."""
    # Basic check: Ensure input is not empty
    if not input_text.strip():
        messagebox.showerror("Input Error", "Input cannot be empty!")
        return False

    # Check for word count
    word_count = len(input_text.split())
    if word_count > 7:  # Limit input to 7 words
        messagebox.showwarning(
            "Input Warning", 
            "Please enter a simple sentence with no more than 7 words."
        )
        return False

    return True

def translate_to_fsl(input_text):
    """Translate English text to FSL in OSV structure or handle WH-questions."""
    # Parse the sentence
    doc = nlp(input_text)
    subject = None
    verb = None
    obj = None
    wh_word = None
    copula = None  # For "is", "are", etc.

    # Extract WH-word, subject, verb, and object
    for token in doc:
        if token.dep_ == "nsubj":  # Subject
            subject = token.text
        elif token.dep_ == "dobj":  # Direct object
            obj = token.text
        elif token.pos_ == "VERB":  # Verb
            verb = token.text
        elif token.tag_ in ("WDT", "WP", "WRB"):  # WH-words like What, Who, Where
            wh_word = token.text
        elif token.dep_ == "ROOT" and token.pos_ == "AUX":  # Handle copulas like "is", "are"
            copula = token.text

    # Handle WH-questions specifically
    if wh_word and copula and subject:
        osv_sentence = f"{subject} {wh_word}"
    elif wh_word and subject and verb:  # For patterns like "What did you eat?"
        osv_sentence = f"{subject} {verb} {wh_word}"
    elif obj and subject and verb:  # Handle declarative sentences
        osv_sentence = f"{obj} {subject} {verb}"
    else:
        messagebox.showwarning(
            "Translation Warning",
            "The sentence is too complex or unsupported. Falling back to fingerspelling."
        )
        osv_sentence = input_text  # Fallback to input text if parsing fails

    # Display FSL translation
    display_fsl_translation(osv_sentence)

def on_translate():
    """Handle translation button click."""
    input_text = text_entry.get()
    if validate_input(input_text):  # Validate the input first
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
