# usuario/forms.py
from django import forms
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from .models import User

class UsuarioCadastroForm(UserCreationForm):
    class Meta:
        model = User
        fields = ["full_name", "email", "username", "password1", "password2"]
        labels = {
            "full_name": "Nome completo",
            "email": "E-mail",
            "username": "Usuário",
        }

class UsuarioLoginForm(AuthenticationForm):
    username = forms.EmailField(label="E-mail", widget=forms.EmailInput(attrs={"autofocus": True}))