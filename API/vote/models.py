from django.db import models
from django.contrib.auth.models import User
from restaurants.models import Restaurant

class Vote(models.Model):
    restaurant = models.ForeignKey(Restaurant, on_delete=models.CASCADE)
    user_ip =  models.TextField(max_length='12', default='0.0.0.0')
    user_name = models.TextField()
    user_cel = models.TextField(max_length='10', default='00000')
    rating_value = models.CharField(max_length=50, default=0)
    created_at = models.DateTimeField(auto_now=True)