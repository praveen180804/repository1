from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
import google.generativeai as genai
import os

# Configure your API key and generation config here
API_KEY = os.getenv("API_KEY")  # Make sure your API key is set in your environment variables
genai.configure(api_key=API_KEY)

# Chatbot configuration
generation_config = {
    "temperature": 1,
    "top_p": 0.95,
    "top_k": 64,
    "max_output_tokens": 8192,
}

model = genai.GenerativeModel(
    model_name="gemini-1.5-flash",
    generation_config=generation_config
)

# Views for rendering templates
def aptitude_view(request):
    return render(request, 'aptitude.html')

def three_d_view(request):
    return render(request, '3d.html')

def concept_view(request):
    return render(request, 'concept.html')

def questions_view(request):
    return render(request, 'questions.html')

def next_view(request):
    return render(request, 'next.html')

def point_view(request):
    return render(request, 'point.html')

def logout_view(request):
    return render(request, 'logout.html')

def rewards_view(request):
    return render(request, 'rewards.html')

# Chatbot API View
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import requests
import json

@csrf_exempt  # Use this for testing; consider proper CSRF protection for production
def chatbot_view(request):
    response_text = ""
    if request.method == "POST":
        user_input = json.loads(request.body).get("user_input")  # Get input from JSON body
        # Call the Flask API
        flask_url = "http://127.0.0.1:5000/"  # Adjust this URL if necessary
        flask_response = requests.post(flask_url, json={"user_input": user_input})
        if flask_response.status_code == 200:
            response_text = flask_response.json().get("response", "No response from Flask.")
        else:
            response_text = "Error communicating with the chatbot."

    return JsonResponse({"response": response_text})  # Return the response as JSON


