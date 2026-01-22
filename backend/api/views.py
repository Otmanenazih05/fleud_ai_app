from rest_framework.generics import CreateAPIView, RetrieveAPIView, ListAPIView, DestroyAPIView
from .serializers import SummarySerializer
from .models import Summary
from rest_framework.permissions import IsAuthenticated
from .permissions import IsOwner

# Create your views here.


class SummaryCreateAPIView(CreateAPIView):
    serializer_class = SummarySerializer
    permission_classes = [IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)


class SummaryRetrieveAPIView(RetrieveAPIView):
    serializer_class = SummarySerializer
    permission_classes = [IsOwner]

    def get_object(self):
        obj = super().get_object()
        if obj.owner != self.request.user:
            raise PermissionDenied
        return obj


class SummaryListAPIView(ListAPIView):
    serializer_class = SummarySerializer
    permission_classes = [IsOwner]

    def get_queryset(self):
        return Summary.objects.filter(owner=self.request.user)


class SummaryDestroyAPIView(DestroyAPIView):
    serializer_class = SummarySerializer
    permission_classes = [IsOwner]

    def get_object(self):
        obj = super().get_object()
        if obj.owner != self.request.user:
            raise PermissionDenied
        return obj
