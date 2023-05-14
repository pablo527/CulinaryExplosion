from .models import Restaurant
from rest_framework import viewsets, permissions
from .serializers import RestaurantSerializer


class RestaurantViewSet(viewsets.ModelViewSet):
    queryset = Restaurant.objects.all()
    permissions_class = [permissions.AllowAny]
    serializer_class = RestaurantSerializer