import speech_recognition as sr
import pyttsx3
import openai

# Initialize speech recognition and text-to-speech
recognizer = sr.Recognizer()
engine = pyttsx3.init()

def listen_for_voice_command():
    """Listens for user speech and returns the transcribed text."""
    with sr.Microphone() as source:
        print("Listening...")
        audio = recognizer.listen(source)

        try:
            text = recognizer.recognize_google(audio)
            print("You said:", text)
            return text
        except sr.UnknownValueError:
            print("Sorry, I didn't understand that. Please try again.")
            return None

def process_and_respond(user_input):
    """Handles user input, sends a query to Bard, and speaks the response."""
    with bard.Bard() as bard:
        response = bard.ask(user_input)
        engine.say(response["content"])
        engine.runAndWait()

# Main loop to listen and respond continuously
while True:
    user_input = listen_for_voice_command()
    if user_input:
        process_and_respond(user_input)
