from django.db import models
from authentication.models import User;
from photos.models import Photo

# Create your models here.
class UserInfo(models.Model):
    # user = models.ForeignKey(User, on_delete=models.CASCADE)
    # schedule = models.CharField(max_length=25)
    # materials_watchlist = models.CharField(max_length=255)
    # phone_number = models.CharField(max_length=11, null=True)
    # image = models.ImageField(upload_to='post_images')

    title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=64, decimal_places=2)
    brand = models.CharField(max_length=255)
    rating = models.CharField(max_length=255)
    link = models.TextField()

    def __str__(self):
        return self.title