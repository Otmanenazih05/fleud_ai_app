from django.urls import path

from .views import GoogleLogin
from .views import UserProfileAPIView


urlpatterns = [
    path('google/', GoogleLogin.as_view(), name='google_login'),
    path('profile/', UserProfileAPIView.as_view(), name='user_profile'),
]