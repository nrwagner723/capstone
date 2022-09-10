from django.db import models
from job.models import Job

# Create your models here.
class UserInfo(models.Model):
    schedule = models.CharField(max_length=255)
    materials_watchlist = models.CharField(max_length=255)
    phone_number = models.IntegerField()
    jobs = models.ForeignKey(Job, on_delete=models.PROTECT, null=True)