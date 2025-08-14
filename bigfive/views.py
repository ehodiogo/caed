from django.shortcuts import render
from .areas.amabilidade.perguntas import perguntas_amabilidade
from .areas.abertura_a_experiencias.perguntas import perguntas_abertura_a_experiencias
from .areas.conscienciosidade.perguntas import perguntas_conscienciosidade
from .areas.extroversao.perguntas import perguntas_extroversao
from .areas.neuroticismo.perguntas import perguntas_neuroticismo

def QuestionarioView(request):

    if request.method == "POST":
        respostas = {}

        print("Request ", request.POST)

        for i, _  in enumerate(perguntas_amabilidade):
            respostas[f"amabilidade_{i}"] = request.POST.get(f"amabilidade_{i}")

        print("respostas", respostas)

        return render(request, "Resultado.html", {"respostas": respostas})

    return render(request, "QuestionarioView.html", {
        "Amabilidade": perguntas_amabilidade,
        "Abertura a Experiências": perguntas_abertura_a_experiencias,
        "Conscienciosidade": perguntas_conscienciosidade,
        "Extroversão": perguntas_extroversao,
        "Neuroticismo": perguntas_neuroticismo,
         "valores": [1,2,3,4,5]}
    )

def HomeView(request):
    return render(request, "Home.html")