from django.shortcuts import render, get_object_or_404

from .get_result import GetResult
from .models import Centro, Formulario, Nivelamento, Pergunta

def RegistroView(request):
    return render(request, 'Registro.html')

def LoginView(request):
    return render(request, 'Login.html')

def AccountView(request):
    return render(request, 'Account.html')
def HomeView(request):
    return render(request, "Home.html")

def ContatoView(request):
    return render(request, "Contato.html")

def SobreView(request):
    return render(request, "Sobre.html")

def CentrosView(request):

    centros = Centro.objects.all()

    return render(request, "Centros.html", {'centros': centros})

def FormulariosView(request, centro_id):

    centro = Centro.objects.get(id=centro_id)

    formularios = Formulario.objects.filter(centro=centro)

    return render(request, "Formularios.html", {'formularios': formularios, 'centro': centro})

def FormularioView(request, formulario_id):
    formulario = get_object_or_404(Formulario, id=formulario_id)

    if request.method == "POST":
        respostas = {}
        resultados = {}
        for pergunta in formulario.perguntas.all():

            # TODO: organizar as notas para cada área e para cada faceta
            key = f"pergunta_{pergunta.id}"
            resposta = request.POST.get(key)
            if resposta:

                if pergunta.isReversa:
                    print("Pergunta reversa, nota original: ", resposta, "Invertida: ", 6 - int(resposta))
                    respostas[pergunta.id] = 6 - int(resposta)
                else:
                    respostas[pergunta.id] = int(resposta)

            for area in formulario.areas.all():
                area_dict = {}
                for faceta in area.faceta_set.all():
                    notas_faceta = []
                    for pergunta in faceta.pergunta_set.all():
                        if pergunta.id in respostas:
                            notas_faceta.append(respostas[pergunta.id])
                    if notas_faceta:
                        area_dict[faceta.nome] = sum(notas_faceta) / len(notas_faceta)
                if area_dict:
                    resultados[area.nome] = area_dict

            print("Notas organizadas por Área e Faceta:", resultados)
            print("Respostas ", respostas)

        resultado_estruturado = GetResult(resultados, respostas)

        print("Resultado estruturado:", resultado_estruturado)

        return render(request, "Resultado.html", {"formulario": formulario, "resultado": resultado_estruturado})

    return render(request, "Formulario.html", {'formulario': formulario})