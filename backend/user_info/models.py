from django.db import models
from authentication.models import User;
# from job.models import Job
from photos.models import Photo

# Create your models here.
class UserInfo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    schedule = models.CharField(max_length=25)
    materials_watchlist = models.CharField(max_length=255)
    phone_number = models.CharField(max_length=11, null=True)
    # jobs = models.ManyToManyField(Job, on_delete=models.PROTECT, null=True)
    image = models.ImageField(upload_to='post_images')

    def __str__(self):
        return self.title