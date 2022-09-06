from django.db import models
from job.models import Job

# Create your models here.
class UserInfo(models.Model):
    schedule = models.CharField(max_length=255, blank=True)
    materials_watchlist = models.CharField(max_length=255, blank=True)
    phone_number = models.IntegerField(default=1)
    jobs = models.ForeignKey(Job, on_delete=models.PROTECT, blank=True)