from django.db import models
from authentication.models import User

# Create your models here.

class Job(models.Model):
    title = models.CharField(max_length=255)
    start = models.DateField()
    end = models.DateField()
    user = models.ForeignKey(User, on_delete=models.PROTECT)