from django.db import models

# Create your models here.


class Restaurant(models.Model):
    restauratName  = models.CharField(max_length=200)
    description = models.TextField()
    productName = models.TextField()
    created_at = models.DateTimeField(auto_now=True)
    ubication =  models.TextField()
    instagram =  models.TextField()
    whatsapp =  models.TextField()
    image =  models.TextField()
    img01 =  models.TextField()
    img02 =  models.TextField()
    img03 =  models.TextField()