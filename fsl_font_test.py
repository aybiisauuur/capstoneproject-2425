import tkinter as tk
from tkinter import font
import time
import os

# Path to your FSL font (.ttf) file
FSL_FONT_PATH = r"fsl_alphabet\Mccidfslfont2-regular.ttf"

def display_fingerspelling(text):
    """Display each character (letters and numbers) using the FSL font."""
    for char in text:
        if char.isalnum():  # Only display letters and numbers
            label.config(text=char.upper())
            window.update()
            time.sleep(1)  # Display each character for 1 second

def on_translate():
    """Handle the translation button click event."""
    user_input = text_entry.get().strip()
    display_fingerspelling(user_input)

# Create the main window
window = tk.Tk()
window.title("Text to FSL Fingerspelling")
window.geometry("400x400")

# Load the FSL font if available
if os.path.exists(FSL_FONT_PATH):
    try:
        fsl_font = font.Font(file=FSL_FONT_PATH, size=100)
    except Exception as e:
        print(f"Error loading FSL font: {e}")
        fsl_font = ("Arial", 100)  # Fallback to default font
else:
    print(f"Font file not found: {FSL_FONT_PATH}")
    fsl_font = ("Arial", 100)

# Input label and text entry
tk.Label(window, text="Enter text to translate:").pack(pady=10)
text_entry = tk.Entry(window, width=30)
text_entry.pack(pady=10)

# Translate button
translate_button = tk.Button(window, text="Translate", command=on_translate)
translate_button.pack(pady=20)

# Label to display the fingerspelling characters
label = tk.Label(window, font=fsl_font)
label.pack(pady=20)

# Run the application
window.mainloop()
