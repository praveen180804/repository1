# urls.py
from django.urls import path
from .views import (
    aptitude_view,
    three_d_view,
    concept_view,
    questions_view,
    next_view,
    point_view,
    logout_view,
    rewards_view,
    chatbot_view,
)

urlpatterns = [
    path('', aptitude_view, name='aptitude'),
    path('3d/', three_d_view, name='three_d'),
    path('concept/', concept_view, name='concept'),
    path('questions/', questions_view, name='questions'),
    path('next/', next_view, name='next'),
    path('point/', point_view, name='point'),
    path('logout/', logout_view, name='logout'),
    path('rewards/', rewards_view, name='rewards'),
    path('chatbot/', chatbot_view, name='chatbot_view'),  # Chatbot URL
]
