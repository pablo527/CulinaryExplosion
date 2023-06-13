from rest_framework import serializers
from .models import Restaurant

class RestaurantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = ('id', 'restauratName','description','productName','created_at','ubication','instagram','whatsapp','image','img01','img02','img03')
        read_only_fields = ('created_at',)