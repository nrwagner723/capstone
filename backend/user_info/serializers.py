from rest_framework import serializers
from .models import UserInfo

class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInfo
        fields = ['id', 'title', 'price', 'brand', 'rating', 'link']
        # fields = ['id', 'title', 'price', 'brand', 'rating', 'link', 'user_id']
        # depth = 1