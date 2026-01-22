from django.db import models
from django.conf import settings

# Create your models here.

class Summary(models.Model):
    owner = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='summaries', null=True, blank=True)
    TYPE = (
        ('article', 'Article'),
        ('video', 'Video'),
        ('document', 'Document'),
    )

    title = models.CharField(max_length=200)
    summary = models.TextField()
    source = models.URLField()
    type = models.CharField(max_length=20, choices=TYPE)
    keyPoints = models.JSONField(default=list)
    preLength = models.IntegerField()
    postLength = models.IntegerField()
    preWords = models.IntegerField()
    postWords = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title