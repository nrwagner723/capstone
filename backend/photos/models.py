from django.db import models

# Create your models here.

class Photo(models.Model):
    url = models.CharField(max_length=250)