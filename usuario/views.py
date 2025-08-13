from django.shortcuts import render, redirect
from django.contrib import messages
from django.contrib.auth import login, logout, authenticate
from .forms import UsuarioCadastroForm, UsuarioLoginForm

def Cadastro(request):
    if request.method == "POST":
        form = UsuarioCadastroForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, "Cadastro realizado com sucesso! Você já pode fazer login.")
            return redirect("login")
    else:
        form = UsuarioCadastroForm()
    return render(request, "Cadastro.html", {"form": form})

def LoginView(request):
    if request.method == "POST":
        form = UsuarioLoginForm(request, data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            messages.success(request, f"Bem-vindo(a), {user.full_name}!")
            return redirect("/")
    else:
        form = UsuarioLoginForm()
    return render(request, "Login.html", {"form": form})

def LogoutView(request):
    logout(request)
    messages.info(request, "Você saiu da sua conta.")
    return redirect("login")