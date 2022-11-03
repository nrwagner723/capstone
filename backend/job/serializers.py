from rest_framework import serializers
from .models import Job

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ['id', 'title', 'start', 'end', 'user', 'user_id']
        depth = 1
    
    user_id = serializers.IntegerField(write_only=True)