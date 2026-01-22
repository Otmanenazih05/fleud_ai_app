from django.urls import path
from . import views

urlpatterns = [
    path('scrape/', views.scrape_article, name='scrape_article'),
    path('get-video-summary/', views.get_video_summary, name='get_video_summary'),
]
