from django.db import models

class WebUser(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    email = models.CharField(max_length=100)
    phone = models.IntegerField()
    city_code = models.IntegerField(default=0)
    city_dev_index = models.IntegerField(default=0)
    gender = models.CharField(max_length=100)
    hasexperience = models.CharField(max_length=100)
    university = models.CharField(max_length=100)
    education = models.CharField(max_length=100)
    discipline = models.CharField(max_length=100)
    experience = models.IntegerField(default=0)
    company = models.IntegerField(default=0)
    
    
        


