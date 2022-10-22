from sre_constants import MAX_UNTIL
from django.db import models

# Create your models here.
class Event(models.Model):
    title = models.CharField(max_length=255)
    start = models.CharField(max_length=255)
    end = models.CharField(max_length=255)