from django.shortcuts import render
from rest_framework import viewsets, permissions
from RestAPIDjango.quickstart.serializers import WebUserSerializer
from django.contrib.auth.models import User

class UserViewSet(viewsets.ModelViewSet):
    queryset=User.objects.all()
    serializer_class=WebUserSerializer
    permission_classes = [permissions.IsAuthenticated]

# class UserViewSet(viewsets.ModelViewSet):
#     """
#     API endpoint that allows users to be viewed or edited.
#     """
#     queryset = User.objects.all().order_by('-date_joined')
#     serializer_class = UserSerializer
#     permission_classes = [permissions.IsAuthenticated]