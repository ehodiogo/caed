from django.urls import path
from .views import HomeView, ContatoView, SobreView, CentrosView, FormulariosView, FormularioView

urlpatterns = [
    path('', HomeView, name='home'),
    path('contato', ContatoView, name='contato'),
    path('sobre', SobreView, name='sobre'),
    path('centros', CentrosView, name='centros'),
    path('formularios/<int:centro_id>', FormulariosView, name='formularios'),
    path('formulario/<int:formulario_id>', FormularioView, name='formulario'),
]
