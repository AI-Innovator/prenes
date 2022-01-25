from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('facedetection', index),
    path('faceliveness', index),
    path('facerecognition', index),
]