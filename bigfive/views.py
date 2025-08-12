from django.shortcuts import render
from .areas.amabilidade.perguntas import perguntas_amabilidade
from .areas.abertura_a_experiencias.perguntas import perguntas_abertura_a_experiencias
from .areas.conscienciosidade.perguntas import perguntas_conscienciosidade
from .areas.extroversao.perguntas import perguntas_extroversao
from .areas.neuroticismo.perguntas import perguntas_neuroticismo

def QuestionarioView(request):
    areas = {
        "Amabilidade": perguntas_amabilidade,
        "Abertura a Experiências": perguntas_abertura_a_experiencias,
        "Conscienciosidade": perguntas_conscienciosidade,
        "Extroversão": perguntas_extroversao,
        "Neuroticismo": perguntas_neuroticismo,
    }

    if request.method == "POST":
        respostas = {}
        for area, perguntas in areas.items():
            for i, pergunta in enumerate(perguntas):
                key = f"{area}_{i}"
                valor = request.POST.get(key)
                respostas[key] = valor

        return render(request, "Resultado.html", {"respostas": respostas})

    return render(request, "QuestionarioView.html", {"areas": areas})
