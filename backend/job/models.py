from django.db import models

# Create your models here.

class Job(models.Model):
    address = models.CharField(max_length=255)
    materials = models.CharField(max_length=255)
    estimate_price = models.CharField(max_length=255)
    completion_status = models.BooleanField()
    time_frame = models.CharField(max_length=255)