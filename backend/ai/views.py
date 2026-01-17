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
        transcript = YouTubeTranscriptApi.get_transcript(video_id)
        
        formatter = TextFormatter()
        text_content = formatter.format_transcript(transcript)
        
        return Response({"content": text_content, "video_id": video_id})
        
    except Exception as e:
        return Response({"error": f"Could not retrieve transcript: {str(e)}"}, status=500)

from huggingface_hub import InferenceClient
import base64
from io import BytesIO
import os
import json
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse

@csrf_exempt
def generate_image(request):
    if request.method != "POST":
        return JsonResponse({"error": "POST method required"}, status=405)

    try:
        # 1. Parse JSON from the request body
        data = json.loads(request.body)
        prompt = data.get('inputs') # matches { inputs: promptText } from React

        if not prompt:
            return JsonResponse({"error": "No prompt provided"}, status=400)

        client = InferenceClient(api_key=os.getenv("HF_TOKEN"))
        
        # 2. Call the model
        image = client.text_to_image(
            prompt, 
            model="black-forest-labs/FLUX.1-schnell"
        )
        
        # 3. Process Image
        buffered = BytesIO()
        image.save(buffered, format="PNG")
        img_str = base64.b64encode(buffered.getvalue()).decode()
        
        return JsonResponse({
            "image_b64": img_str, 
            "mime_type": "image/png"
        })

    except json.JSONDecodeError:
        return JsonResponse({"error": "Invalid JSON"}, status=400)
    except Exception as e:
        return JsonResponse({"error": str(e)}, status=500)
