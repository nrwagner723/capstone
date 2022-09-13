from rest_framework import serializers
from .models import Job

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = Job
        fields = ['id', 'address', 'materials', 'estimate_price', 'completion_status', 'time_frame']
        