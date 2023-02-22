from django.urls import path
from . import views

urlpatterns = [
    path('', views.user_info),
    path('add/', views.add_material),
    path('<int:pk>/', views.user_detail),
]