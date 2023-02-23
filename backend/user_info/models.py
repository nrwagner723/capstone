from django.db import models
from authentication.models import User

# Create your models here.
class UserInfo(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    price = models.DecimalField(max_digits=9, decimal_places=2)
    brand = models.CharField(max_length=255)
    rating = models.DecimalField(max_digits=9, decimal_places=4)
    link = models.CharField(max_length=255)

    def __str__(self):
        return self.title