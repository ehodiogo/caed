from django.contrib import admin
from .models import (Estrategia, FeedbackFaceta, Faceta, FeedbackPergunta,
                    Dificuldade, Vantagem, Pergunta, Area, Caracteristica, Formulario)

admin.site.register(Estrategia)
admin.site.register(FeedbackFaceta)
admin.site.register(Faceta)
admin.site.register(FeedbackPergunta)
admin.site.register(Dificuldade)
admin.site.register(Vantagem)
admin.site.register(Pergunta)
admin.site.register(Area)
admin.site.register(Caracteristica)
admin.site.register(Formulario)