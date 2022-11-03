from django.db import models
# from job.models import Job
from photos.models import Photo

# Create your models here.
class UserInfo(models.Model):
    schedule = models.CharField(max_length=25)
    materials_watchlist = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=11, null=True)
    # jobs = models.ManyToManyField(Job, on_delete=models.PROTECT, null=True)
    photos = models.ForeignKey(Photo, on_delete=models.PROTECT, null=True)