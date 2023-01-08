from rest_framework import serializers
from django.db import models
from .models import *

class WebUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = WebUser
        app_label = 'quickstart'
        fields = ('first_name','last_name','email','phone','city_code','city_dev_index','gender','hasexperience','university','education', 'discipline','experience','company',)