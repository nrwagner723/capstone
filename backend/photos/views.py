from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import PhotoSerializer
from .models import Photo

@api_view(['GET', 'POST'])
def photo_album(request):
    if request.method == 'GET':
        photos = Photo.objects.all()
        serializer = PhotoSerializer(photos, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = PhotoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
def photo_detail(request, pk):
    photo = get_object_or_404(Photo, pk=pk)
    if request.method == 'GET':
        serializer = PhotoSerializer(photo)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = PhotoSerializer(photo, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        photo.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)