from ... import areas
from ...models import (Estrategia, FeedbackFaceta, Faceta, FeedbackPergunta,
                       Dificuldade, Vantagem, Pergunta, Area, Caracteristica, Formulario)
from django.core.management.base import BaseCommand
from ...areas.neuroticismo.perguntas import perguntas_neuroticismo
from ...areas.extroversao.perguntas import perguntas_extroversao
from ...areas.conscienciosidade.perguntas import perguntas_conscienciosidade
from ...areas.amabilidade.perguntas import perguntas_amabilidade
from ...areas.abertura_a_experiencias.perguntas import perguntas_abertura_a_experiencias

class Command(BaseCommand):
    def handle(self, *args, **options):
        self.stdout.write('Preenchendo dados')

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

                baixo = FeedbackPergunta.objects.create(
                    feedback=feed_baixo,
                    nivel=1,
                )

                medio = FeedbackPergunta.objects.create(
                    feedback=feed_medio,
                    nivel=2,
                )

                alto = FeedbackPergunta.objects.create(
                    feedback=feed_alto,
                    nivel=3,
                )

                pergunta.feedbacks.add(baixo)
                pergunta.feedbacks.add(medio)
                pergunta.feedbacks.add(alto)
                pergunta.save()

        formulario, _ = Formulario.objects.get_or_create(
            centro='Centro de Tecnologia',
        )

        for area in areas_nomes:
            area = Area.objects.get(nome=area)

            formulario.areas.add(area)

        for pergunta in Pergunta.objects.all():
            formulario.perguntas.add(pergunta)

        formulario.save()