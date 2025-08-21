from usuario.models import User
from django.db import models

class Nivelamento(models.Model):
    nome = models.CharField(max_length=15)
    num_nivel = models.IntegerField()
    nota_min = models.FloatField()
    nota_max = models.FloatField()

    def __str__(self):
        return self.nome

class Vantagem(models.Model):
    nome = models.CharField(max_length=100)
    explicacao = models.TextField()

    def __str__(self):
        return self.nome

class Caracteristica(models.Model):
    nome = models.CharField(max_length=100)
    explicacao = models.TextField()

    def __str__(self):
        return self.nome

class Dificuldade(models.Model):
    nome = models.CharField(max_length=100)
    explicacao = models.TextField()

    def __str__(self):
        return self.nome

class Estrategia(models.Model):
    nome = models.CharField(max_length=100)
    explicacao = models.TextField()

    def __str__(self):
        return self.nome

class Area(models.Model):
    nome = models.CharField(max_length=100)
    caracteristicas = models.TextField()

    def __str__(self):
        return self.nome

class FeedbackFaceta(models.Model):
    feedback = models.TextField()
    nivel = models.IntegerField() # 1 = baixo # 2 = medio # 3 = alto
    conclusao = models.TextField()

    # dados chave e valor
    caracteristicas = models.ManyToManyField(Caracteristica)
    vantagens = models.ManyToManyField(Vantagem)
    dificuldades = models.ManyToManyField(Dificuldade)
    estrategias = models.ManyToManyField(Estrategia)

    def __str__(self):
        return self.feedback

class Faceta(models.Model):
    area = models.ForeignKey(Area, on_delete=models.CASCADE)
    nome = models.CharField(max_length=100)
    feedbacks = models.ManyToManyField(FeedbackFaceta)

    def __str__(self):
        return self.nome

class FeedbackPergunta(models.Model):
    feedback = models.TextField()
    nivel = models.IntegerField() # 1 = baixo # 2 = medio # 3 = alto

    def __str__(self):
        return self.feedback

class Pergunta(models.Model):
    pergunta = models.TextField()
    faceta = models.ForeignKey(Faceta, on_delete=models.CASCADE)
    isReversa = models.BooleanField(default=False)
    feedbacks = models.ManyToManyField(FeedbackPergunta)

    def __str__(self):
        return self.pergunta

class GrauChoices(models.TextChoices):
    docente = ('docente', 'Docente')
    discente =('discente', 'Discente')

class Centro(models.Model):
    nome = models.CharField(max_length=100)
    sigla = models.CharField(max_length=8)

class Formulario(models.Model):

    centro = models.ForeignKey(Centro, on_delete=models.CASCADE)
    grau = models.CharField(max_length=10, choices=GrauChoices.choices)
    areas = models.ManyToManyField(Area)
    perguntas = models.ManyToManyField(Pergunta)

    def __str__(self):
        return self.centro
