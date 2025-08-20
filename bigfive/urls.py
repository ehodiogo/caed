from django.urls import path
from .views import HomeView, ContatoView, SobreView

urlpatterns = [
    path('', HomeView, name='home'),
    path('contato', ContatoView, name='contato'),
    path('sobre', SobreView, name='sobre'),
]
