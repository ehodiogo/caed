from ...models import (Estrategia, FeedbackFaceta, Faceta, FeedbackPergunta,
                       Dificuldade, Vantagem, Pergunta, Area, Caracteristica, Formulario,
                       GrauChoices, Centro, Nivelamento)
from django.core.management.base import BaseCommand
from ...areas.neuroticismo.perguntas import perguntas_neuroticismo
from ...areas.extroversao.perguntas import perguntas_extroversao
from ...areas.conscienciosidade.perguntas import perguntas_conscienciosidade
from ...areas.amabilidade.perguntas import perguntas_amabilidade
from ...areas.abertura_a_experiencias.perguntas import perguntas_abertura_a_experiencias

from ...areas.amabilidade.feedback.Franqueza import franquezaBaixo, franquezaMedio, franquezaAlto
from ...areas.amabilidade.feedback.Complacencia import complacenciaAlto, complacenciaBaixo, complacenciaMedio
from ...areas.extroversao.feedback.Assertividade import assertividadeMedio,assertividadeAlto,assertividadeBaixo
from ...areas.extroversao.feedback.Gregarismo import gregarismoBaixo, gregarismoMedio, gregarismoAlto
from ...areas.extroversao.feedback.EmocoesPositivas import emocoesPositivasAlto, emocoesPositivasBaixo, emocoesPositivasMedio
from ...areas.extroversao.feedback.BuscaPorNovidades import buscaPorNovidadesMedio, buscaPorNovidadesBaixo, buscaPorNovidadesAlto
from ...areas.neuroticismo.feedback.Ansiedade import ansiedadeBaixo, ansiedadeMedio, ansiedadeAlto
from ...areas.neuroticismo.feedback.Hostilidade import raivaHostilidadeBaixo, raivaHostilidadeAlto, raivaHostilidadeMedio
from ...areas.neuroticismo.feedback.DepressaoDesanimo import depressaoBaixo, depressaoMedio, depressaoAlto
from ...areas.neuroticismo.feedback.Impulsividade import impulsividadeAlto, impulsividadeBaixo, impulsividadeMedio
from ...areas.neuroticismo.feedback.Autoconsciencia import autoconscienciaAlto, autoconscienciaBaixo, autoconscienciaMedio
from ...areas.conscienciosidade.feedback.Ordem import ordemAlto, ordemBaixo, ordemMedio
from ...areas.conscienciosidade.feedback.SensoDeDever import sensoDeDeverAlto, sensoDeDeverBaixo,sensoDeDeverMedio
from ...areas.conscienciosidade.feedback.CompetenciaAutoeficacia import  competenciaAlto, competenciaBaixo, competenciaMedio
from ...areas.abertura_a_experiencias.feedback.Estetica import esteticaAlto, esteticaBaixo, esteticaMedio
from ...areas.abertura_a_experiencias.feedback.Fantasia import fantasiaAlto, fantasiaBaixo, fantasiaMedio

class Command(BaseCommand):
    def handle(self, *args, **options):
        self.stdout.write('Preenchendo dados')

        baixo_nivel, _ = Nivelamento.objects.get_or_create(
            nome='Baixo',
            nota_min=0,
            nota_max=2.33,
            num_nivel=1
        )

        medio_nivel, _ = Nivelamento.objects.get_or_create(
            nome='Médio',
            nota_min=2.34,
            nota_max=3.66,
            num_nivel=2
        )

        alto_nivel, _ = Nivelamento.objects.get_or_create(
            nome='Alto',
            nota_min=3.67,
            nota_max=5,
            num_nivel=3
        )

        perguntas_areas = {
            "Neuroticismo": perguntas_neuroticismo,
            "Extroversão": perguntas_extroversao,
            "Conscienciosidade": perguntas_conscienciosidade,
            "Amabilidade": perguntas_amabilidade,
            "Abertura a Experiências": perguntas_abertura_a_experiencias,
        }

        areas_nomes = [
            'Abertura a Experiências',
            'Amabilidade',
            'Conscienciosidade',
            'Extroversão',
            'Neuroticismo',
        ]

        areas_caracteristicas = [
            'Imaginação, criatividade, receptividade ao novo.',
            'Organização, disciplina, confiabilidade e foco em objetivos.',
            'Sociabilidade, assertividade, energia e busca por interações sociais.',
            'Empatia, cooperação, confiança e preocupação com o bem-estar alheio.',
            'Predisposição a emoções negativas, como ansiedade e irritabilidade.'
        ]

        for nome, caracteristica in zip(areas_nomes, areas_caracteristicas):

            area, _ = Area.objects.get_or_create(
                nome=nome,
                caracteristicas=caracteristica
            )

        for perguntas_area in perguntas_areas:

            for pergunta_json in perguntas_areas[perguntas_area]:

                pergunta_texto = pergunta_json.get('pergunta')
                faceta_texto = pergunta_json.get('fator')
                is_reversa = pergunta_json.get('reversa')
                feedbacks = pergunta_json.get('feedbacks')

                feed_baixo = feedbacks.get('1-2')
                feed_medio = feedbacks.get('3')
                feed_alto = feedbacks.get('4-5')

                print("Faceta nome: ", faceta_texto)

                faceta, _ = Faceta.objects.get_or_create(
                    nome=faceta_texto,
                    area=Area.objects.get(
                        nome=perguntas_area,
                    )
                )

                pergunta, _ = Pergunta.objects.get_or_create(
                    pergunta=pergunta_texto,
                    faceta=faceta,
                    isReversa=is_reversa
                )

                baixo, _ = FeedbackPergunta.objects.get_or_create(
                    feedback=feed_baixo,
                    nivel=1,
                )

                medio, _ = FeedbackPergunta.objects.get_or_create(
                    feedback=feed_medio,
                    nivel=2,
                )

                alto, _ = FeedbackPergunta.objects.get_or_create(
                    feedback=feed_alto,
                    nivel=3,
                )

                pergunta.feedbacks.add(baixo)
                pergunta.feedbacks.add(medio)
                pergunta.feedbacks.add(alto)
                pergunta.save()

        centro, _ = Centro.objects.get_or_create(
            nome="Centro de Tecnologia",
            sigla="CT"
        )

        formulario, _ = Formulario.objects.get_or_create(
            centro=centro,
            grau=GrauChoices.discente,
        )

        for area in areas_nomes:
            area = Area.objects.get(nome=area)

            formulario.areas.add(area)

        for pergunta in Pergunta.objects.all():
            formulario.perguntas.add(pergunta)

        formulario.save()

        feedbacks_area = {
            "Amabilidade": {
                "Franqueza": [franquezaBaixo, franquezaMedio, franquezaAlto],
                "Complacência": [complacenciaBaixo, complacenciaMedio, complacenciaAlto],
            },
            "Extroversão": {
                "Assertividade": [assertividadeBaixo, assertividadeMedio, assertividadeAlto],
                "Gregarismo": [gregarismoBaixo, gregarismoMedio, gregarismoAlto],
                "Emoções Positivas": [emocoesPositivasBaixo, emocoesPositivasMedio, emocoesPositivasAlto],
                "Busca de Novidades": [buscaPorNovidadesBaixo, buscaPorNovidadesMedio, buscaPorNovidadesAlto],
            },
            "Neuroticismo": {
                "Ansiedade": [ansiedadeBaixo, ansiedadeMedio, ansiedadeAlto],
                "Hostilidade": [raivaHostilidadeBaixo, raivaHostilidadeMedio, raivaHostilidadeAlto],
                "Desânimo": [depressaoBaixo, depressaoMedio, depressaoAlto],
                "Impulsividade": [impulsividadeBaixo, impulsividadeMedio, impulsividadeAlto],
                "Autoconsciência": [autoconscienciaBaixo, autoconscienciaMedio, autoconscienciaAlto],
            },
            "Conscienciosidade": {
                "Ordem": [ordemBaixo, ordemMedio, ordemAlto],
                "Senso de Dever": [sensoDeDeverBaixo, sensoDeDeverMedio, sensoDeDeverAlto],
                "Competência": [competenciaBaixo, competenciaMedio, competenciaAlto],
            },
            "Abertura a Experiências": {
                "Estética": [esteticaBaixo, esteticaMedio, esteticaAlto],
                "Fantasia": [fantasiaBaixo, fantasiaMedio, fantasiaAlto],
            }
        }

        i = 0
        for area_nome, facetas in feedbacks_area.items():

            if i == 0:
                print(f"Área: {area_nome}")

            area = Area.objects.get(nome=area_nome)

            for faceta_nome, niveis in facetas.items():

                print(f"  Faceta: {faceta_nome}")

                print("Facetas ", Faceta.objects.all())

                faceta = Faceta.objects.get(nome=faceta_nome)

                for i, feedback in enumerate(niveis, start=1):

                    print("\n\n\n")
                    # print(f"    Nível {i}: {feedback}")

                    definicao = feedback['definicao']
                    caracteristicas = feedback.get('caracteristicas', [])
                    vantagens_potenciais = feedback.get('vantagensPotenciais', [])
                    dificuldades_potenciais = feedback.get('dificuldadesPotenciais',[])
                    estrategias = feedback.get('estrategias',[])
                    conclusao = feedback['conclusao']

                    feedback_faceta, _ = FeedbackFaceta.objects.get_or_create(
                        nivel=i,
                        feedback=definicao,
                        conclusao=conclusao,
                    )
                    #
                    # print("Definicao: ", definicao)
                    # print("Caracteristicas: ", caracteristicas)
                    # print("VantagensPotencias: ", vantagens_potenciais)
                    # print("Dificuldades: ", dificuldades_potenciais)
                    # print("Estrategias: ", estrategias)
                    # print("Conclusao: ", conclusao)

                    print("CARACTERISTICAS: ")
                    for caracteristica_faceta in caracteristicas:
                        print(caracteristica_faceta)

                        carac_nome = caracteristica_faceta['nome']
                        descricao = caracteristica_faceta['descricao']

                        print("Descricao, ", descricao)

                        carac, _ = Caracteristica.objects.get_or_create(
                            nome=carac_nome,
                            explicacao=descricao
                        )

                        feedback_faceta.caracteristicas.add(carac)

                    print("VANTAGENS POTENCIAIS: ")
                    for vantagem_potencial in vantagens_potenciais:
                        print(vantagem_potencial)

                        vantagem_nome = vantagem_potencial['nome']
                        descricao = vantagem_potencial['descricao']

                        vantagem, _ = Vantagem.objects.get_or_create(
                            nome=vantagem_nome,
                            explicacao=descricao
                        )

                        feedback_faceta.vantagens.add(vantagem)

                    print("DIFICULDADES POTENCIAIS: ")
                    for dificuldade_potencial in dificuldades_potenciais:
                        print(dificuldade_potencial)

                        dificuldade_nome = dificuldade_potencial['nome']
                        descricao = dificuldade_potencial['descricao']

                        dificuldade, _ = Dificuldade.objects.get_or_create(
                            nome=dificuldade_nome,
                            explicacao=descricao
                        )

                        feedback_faceta.dificuldades.add(dificuldade)

                    print("ESTRATEGIAS: ")
                    for estrategia_potencial in estrategias:
                        print(estrategia_potencial)

                        estrategia_nome = estrategia_potencial['nome']
                        descricao = estrategia_potencial['descricao']

                        estrategia, _ = Estrategia.objects.get_or_create(
                            nome=estrategia_nome,
                            explicacao=descricao
                        )

                        feedback_faceta.estrategias.add(estrategia)

                    feedback_faceta.save()
                    faceta.feedbacks.add(feedback_faceta)
                    faceta.save()

            i += 1