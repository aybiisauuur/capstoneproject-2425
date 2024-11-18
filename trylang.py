import tkinter as tk
from tkinter import font
import time
import os

# Path to your FSL font (.ttf) file

## comment ni aybi: no this does not work. ayaw magload ng font :(

FSL_FONT_PATH = r"C:\Users\Admin\capstoneproject-2425-1\Mccidfslfont2-regular.ttf"

def display_fingerspelling(text):
    """Display each letter using the FSL font."""
    for letter in text:
        if letter.isalpha():  # Only display letters
            # Update the label with the letter
            label.config(text=letter.upper())
            
            # Pause to allow the user to see the sign
            window.update()
            time.sleep(1)  # Display each letter for 1 second

def on_translate():
    """Handle the translation button click event."""
    user_input = text_entry.get()
    display_fingerspelling(user_input)

# Create the main window
window = tk.Tk()
window.title("Text to FSL Fingerspelling")
window.geometry("400x400")

# Load the FSL font if available
if os.path.exists(FSL_FONT_PATH):
    # Load the custom font
    fsl_font = font.Font(family="FSL", size=100, weight="bold")
    font.nametofont("TkDefaultFont").configure(family="FSL")
else:
    print(f"Font file not found: {FSL_FONT_PATH}")
    fsl_font = font.nametofont("TkDefaultFont").configure(size=100)

# Input label and text entry
tk.Label(window, text="Enter text to translate:").pack(pady=10)
text_entry = tk.Entry(window, width=30)
text_entry.pack(pady=10)

# Translate button
translate_button = tk.Button(window, text="Translate", command=on_translate)
translate_button.pack(pady=20)

# Label to display the fingerspelling letters
label = tk.Label(window, font=fsl_font)
label.pack(pady=20)

# Run the application
window.mainloop()
