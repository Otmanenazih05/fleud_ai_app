from rest_framework import serializers
from .models import CustomUser


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'email', 'first_name', 'last_name', 'profile_picture', 'is_social_user', 'social_provider')
        read_only_fields = ('id', 'email', 'is_social_user', 'social_provider') 