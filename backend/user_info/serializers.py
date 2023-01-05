from rest_framework import serializers
from .models import UserInfo

class UserInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserInfo
        fields = ['id', 'schedule', 'materials_watchlist', 'phone_number', 'image', 'user_id', 'user']
        depth = 1