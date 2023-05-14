from django.db import models

# Create your models here.


class Restaurant(models.Model):
    name  = models.CharField(max_length=200)
    description = models.TextField()
    dishes = models.TextField()
    created_at = models.DateTimeField(auto_now=True)
