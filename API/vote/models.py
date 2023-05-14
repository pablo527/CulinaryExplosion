from django.db import models
from django.contrib.auth.models import User
from restaurants.models import Restaurant

# Create your models here.

class Vote(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    user_ip =  models.TextField(max_length='12', default='0.0.0.0')
    created_at = models.DateTimeField(auto_now=True)