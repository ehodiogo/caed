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
                resposta_key = f"resposta_{area}_{i}"
                reversa_key = f"reversa_{area}_{i}"
                fator_key = f"fator_{area}_{i}"

                resposta_valor = request.POST.get(resposta_key)
                reversa_valor = request.POST.get(reversa_key) == "True"
                fator_valor = request.POST.get(fator_key)

                respostas[resposta_key] = {
                    "resposta": int(resposta_valor) if resposta_valor else None,
                    "reversa": reversa_valor,
                    "fator": fator_valor
                }

        return render(request, "Resultado.html", {"respostas": respostas})

    return render(request, "QuestionarioView.html", {"areas": areas})
