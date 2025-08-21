from .models import (
    Nivelamento, Pergunta, Formulario, FeedbackPergunta,
    FeedbackFaceta, Faceta, Vantagem, Estrategia, Dificuldade, Caracteristica
)


def GetResult(resultados, respostas_perguntas):

    print("Resultado estruturado:", resultados)
    print("Respostas perguntas:", respostas_perguntas)

    saida = {}

    for area_nome, facetas in resultados.items():
        area_dict = {}
        for faceta_nome, media in facetas.items():

            # descobrir nivelamento da média
            nivel = Nivelamento.objects.filter(
                nota_min__lte=media, nota_max__gte=media
            ).first()

            # pegar faceta correspondente no banco
            faceta = Faceta.objects.filter(nome=faceta_nome).first()

            if not faceta or not nivel:
                continue

            print("Faceta", faceta)
            print("Nivel ", nivel , "Num", nivel.num_nivel)

            # buscar feedback da faceta
            feedback_faceta = faceta.feedbacks.get(
                nivel=nivel.num_nivel,
            )

            # montar resposta
            area_dict[faceta_nome] = {
                "nota": round(media, 2),
                "nivel": nivel.nome if nivel else None,
                "feedback": feedback_faceta.feedback if feedback_faceta else None,
                "vantagens": list(feedback_faceta.vantagens.all().values_list("nome", flat=True)),
                "dificuldades": list(feedback_faceta.dificuldades.all().values_list("nome", flat=True)),
                "estrategias": list(feedback_faceta.estrategias.all().values_list("nome", flat=True)),
                "caracteristicas": list(feedback_faceta.caracteristicas.all().values_list("nome", flat=True)),
                "conclusao": feedback_faceta.conclusao,
            }

            print("Area", area_dict)

        if area_dict:
            saida[area_nome] = area_dict

    # também pode trazer feedback por pergunta
    perguntas_feedback = {}
    for pergunta_id, nota in respostas_perguntas.items():

        print("Pergunta", pergunta_id)
        print("Nota", nota)
        nivel_nomeado = ''
        if nota < 3:
            avaliacao = 1
            nivel_nomeado = 'Baixo'
        elif nota == 3:
            avaliacao = 2
            nivel_nomeado = 'Médio'
        else:
            avaliacao = 3
            nivel_nomeado = 'Alto'

        feedback = Pergunta.objects.get(id=pergunta_id).feedbacks.get(
            nivel=avaliacao,
        )

        if feedback:
            perguntas_feedback[pergunta_id] = f'Nível: {nivel_nomeado} - {feedback.feedback}'

    return {
        "areas": saida,
        "perguntas": perguntas_feedback
    }
