from django.db import models
from authentication.models import User
from photos.models import Photo

# Create your models here.
class UserInfo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    product = models.CharField(max_length=255)

    def __str__(self):
        return self.title