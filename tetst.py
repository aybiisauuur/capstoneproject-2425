from tkinter import Tk, Label, Entry, Button, font
import os

FSL_FONT_PATH = r"fsl_alphabet\Mccidfslfont2-regular.ttf"

# Load the font if the file exists
if os.path.exists(FSL_FONT_PATH):
    try:
        custom_font = font.Font(file=FSL_FONT_PATH, size=100)
        print("FSL font loaded successfully!")
    except Exception as e:
        print(f"Error loading font: {e}")
        custom_font = ("Arial", 100)  # Fallback font
else:
    print("Font file not found.")
    custom_font = ("Arial", 100)
