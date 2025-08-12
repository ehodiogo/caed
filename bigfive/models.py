from django.contrib.auth.models import User
from django.db import models

class Resposta(models.Model):
    area = models.CharField(max_length=100)
    data = models.DateTimeField(auto_now_add=True)
    respondido_por = models.ForeignKey(User, on_delete=models.CASCADE)
    pontuacao = models.FloatField()

    def __str__(self):
        return f"{self.respondido_por.username} - {self.data} - {self.area}"