from rest_framework import serializers
from .models import Summary



class SummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Summary
        fields = '__all__'
        read_only_fields = ['owner']

    def create(self, validated_data):
        summary = Summary.objects.create(**validated_data)
        return summary