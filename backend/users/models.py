from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    """
    Custom user model that extends Django's AbstractUser.
    This model is now the primary user model for the project.
    You can add new fields here in the future.
    """
    profile_picture = models.URLField(blank=True, null=True)
    is_social_user = models.BooleanField(default=False)
    social_provider = models.CharField(max_length=20, blank=True, null=True)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    def __str__(self):
        return self.username

