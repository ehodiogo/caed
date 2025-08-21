from django.contrib.auth.views import LogoutView
from django.urls import path
from .views import HomeView, ContatoView, SobreView, CentrosView, FormulariosView, FormularioView, AccountView, RegistroView, LoginView

urlpatterns = [
    path('', HomeView, name='home'),
    path('contato', ContatoView, name='contato'),
    path('sobre', SobreView, name='sobre'),
    path('centros', CentrosView, name='centros'),
    path('formularios/<int:centro_id>', FormulariosView, name='formularios'),
    path('formulario/<int:formulario_id>', FormularioView, name='formulario'),
    path('minha-conta', AccountView, name='minha-conta'),
    path('login', LoginView, name='login'),
    path('logout', LogoutView, name='logout'),
]
