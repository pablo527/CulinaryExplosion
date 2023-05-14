from rest_framework import routers
from django.urls import path
from .api import VoteViewSet
from .views import vote


router = routers.DefaultRouter()
router.register('api/vote',VoteViewSet, basename='vote')


urlpatterns = [
    path('api/vote/<int:restaurant_id>/', VoteViewSet.as_view({'post': 'vote'}), name='restaurante-vote')
]


urlpatterns += router.urls

