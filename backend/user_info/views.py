from django.shortcuts import get_object_or_404
from django.shortcuts import get_list_or_404
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from .serializers import UserInfoSerializer
from .models import UserInfo

@api_view(['GET', 'POST'])
@permission_classes([AllowAny])
def user_info(request):
    if request.method == 'GET':
        info = UserInfo.objects.all()
        serializer = UserInfoSerializer(info, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = UserInfoSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data, status=status.HTTP_201_CREATED)

@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([AllowAny])
def user_detail(request, pk):
    info = get_list_or_404(UserInfo, user_id=pk)
    if request.method == 'GET':
        serializer = UserInfoSerializer(info, many=True)
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = UserInfoSerializer(info, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    elif request.method == 'DELETE':
        info.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    