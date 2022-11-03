from django.db import models
from authentication.models import User

# Create your models here.

class Job(models.Model):
    title = models.CharField(max_length=255)
    start = models.CharField(max_length=255)
    end = models.CharField(max_length=255)
    user = models.ForeignKey(User, on_delete=models.PROTECT)