from rest_framework import serializers
from .models import Vote


class VoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vote
        fields = ['id','restaurant', 'user_ip']
        fields_read_only = ['restaurant', 'user_ip','created_at',]