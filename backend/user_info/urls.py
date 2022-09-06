from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_info),
    path('<int:pk>/', views.user_detail),
]