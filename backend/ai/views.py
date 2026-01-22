from rest_framework.decorators import api_view
from rest_framework.response import Response
from newspaper import Article
from rest_framework.permissions import AllowAny
from rest_framework.decorators import permission_classes
from youtube_transcript_api import YouTubeTranscriptApi
from youtube_transcript_api.formatters import TextFormatter
import re

@api_view(['GET'])
@permission_classes([AllowAny])
def scrape_article(request):
    url = request.GET.get('url')
    if not url:
        return Response({"error": "No URL provided"}, status=400)

    try:
        article = Article(url)
        article.download()
        article.parse()
        
        return Response({
            "title": article.title,
            "text": article.text,
            "source_url": url,
            "image": article.top_image
        })
    except Exception as e:
        return Response({"error": str(e)}, status=500)


@api_view(['GET'])
@permission_classes([AllowAny])
def get_video_summary(request):
    video_url = request.GET.get('url')
    if not video_url:
        return Response({"error": "No URL provided"}, status=400)
    
    video_id_match = re.search(r"(?:v=|\/)([0-9A-Za-z_-]{11}).*", video_url)
    if not video_id_match:
        return Response({"error": "Invalid YouTube URL"}, status=400)
    
    video_id = video_id_match.group(1)

    try:
        transcript = YouTubeTranscriptApi().fetch(video_id)
        
        formatter = TextFormatter()
        text_content = formatter.format_transcript(transcript)
        
        return Response({"content": text_content, "video_id": video_id})
        
    except Exception as e:
        return Response({"error": f"Could not retrieve transcript: {str(e)}"}, status=500)