from django.urls import path
from .views import QuestionarioView
urlpatterns = [
    path('questionario', QuestionarioView)
]
