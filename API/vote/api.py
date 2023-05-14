from .models import Vote
from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from .serializers import VoteSerializer
from restaurants.models import Restaurant
from .models import Vote
from django.http import HttpResponseBadRequest
from rest_framework.response import Response
from rest_framework import status


class VoteViewSet(viewsets.ModelViewSet):
    queryset = Vote.objects.all()
    permissions_class = [permissions.AllowAny]
    serializer_class = VoteSerializer

    @action(detail=True, methods=['POST'])
    def vote(self, request, restaurant_id=None):

        restaurant = Restaurant.objects.get(id=restaurant_id)
        ip_address = request.META.get('REMOTE_ADDR')
        votes = request.session.get('votes', [])

        if ip_address in votes or Vote.objects.filter(restaurant=restaurant, user_ip = ip_address).exists():
            return Response('Ya ha votado por ese restaurante', status=status.HTTP_400_BAD_REQUEST)
        vote = Vote(restaurant = restaurant, user_ip = ip_address)
        vote.save()
        return Response('Vote successfull', status=status.HTTP_204_NO_CONTENT)