from django.urls import path
from . import views

urlpatterns = [
    path('', views.photo_album),
    path('<int:pk>/', views.photo_detail),
]
