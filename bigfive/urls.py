from django.urls import path
from .views import QuestionarioView, HomeView
from usuario.views import Cadastro, LoginView, LogoutView

urlpatterns = [
    path('questionario', QuestionarioView, name='questionario'),
    path('cadastro', Cadastro, name="cadastro"),
    path('login', LoginView, name='login'),
    path('logout', LogoutView, name='logout'),
    path('', HomeView, name='home'),
]
