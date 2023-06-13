from rest_framework import serializers
from .models import Vote


class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vote
        fields = ['id','restaurant', 'user_ip', 'user_cel', 'rating_value','user_name','created_at']
        fields_read_only = ['id','restaurant', 'user_ip', 'user_cel', 'rating_value','user_name','created_at',]