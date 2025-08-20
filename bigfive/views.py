from django.shortcuts import render

def HomeView(request):
    return render(request, "Home.html")

def ContatoView(request):
    return render(request, "Contato.html")

def SobreView(request):
    return render(request, "Sobre.html")