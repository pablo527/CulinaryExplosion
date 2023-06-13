from django.shortcuts import render
from restaurants.models import Restaurant
from .models import Vote
from django.contrib import messages

# Create your views here.


def vote(request, restaurant_id):
    restaurant = Restaurant.objects.get(id=restaurant_id)
    user = request.user

    if Vote.objects.filter(restaurant, user=user).exists():
        messages.warning(request, 'ya ha votado por este restaurante moo')
        return 'failed'

    Vote.objects.create(user=user, restaurant=restaurant)
    request.session['votes'] = request.session.get('votes', []) + [restaurant_id]
    messages.success(request, ' Voto registrado exitosamente')
    return 'success'
        