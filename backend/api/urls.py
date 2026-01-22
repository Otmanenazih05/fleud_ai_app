from django.urls import path
from .views import SummaryCreateAPIView, SummaryRetrieveAPIView, SummaryListAPIView, SummaryDestroyAPIView

urlpatterns = [
    path('create/', SummaryCreateAPIView.as_view(), name='summary-create'),
    path('retrieve/<int:pk>/', SummaryRetrieveAPIView.as_view(), name='summary-retrieve'),
    path('list/', SummaryListAPIView.as_view(), name='summary-list'),
    path('destroy/<int:pk>/', SummaryDestroyAPIView.as_view(), name='summary-destroy'),
]