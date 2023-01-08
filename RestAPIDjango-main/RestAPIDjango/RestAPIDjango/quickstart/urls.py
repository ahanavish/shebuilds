# from django.urls import path
# from . import views

# urlpatterns = [
#     path('', views.index),  #the path for our index view
# ]

from django.contrib import admin
from django.urls import path, include
from RestAPIDjango import views
from rest_framework import routers
# # from .views import UserViewSet

# router = routers.DefaultRouter()
# router.register(r'users', views.UserViewSet)

urlpatterns = [
#     path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]