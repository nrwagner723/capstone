from rest_framework import serializers
from .models import Job

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ['id', 'title', 'start', 'end']
    
    # user = serializers.IntegerField(write_only=True)