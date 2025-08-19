from django.urls import path
from .views import HomeView, ContatoView
urlpatterns = [
    path('', HomeView, name='home'),
    path('contato', ContatoView, name='contato'),
]
