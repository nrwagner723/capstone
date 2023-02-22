from django.db import models
# from authentication.models import User

# Create your models here.

class Photo(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='files/images')