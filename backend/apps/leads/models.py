from django.db import models

class Lead(models.Model):
    product = models.ForeignKey('catalog.Product', on_delete=models.SET_NULL, related_name='leads', null=True, blank=True)
    name = models.CharField(max_length=160, blank=True)
    company = models.CharField(max_length=180, blank=True)
    phone = models.CharField(max_length=40, blank=True)
    email = models.EmailField(blank=True)
    source = models.CharField(max_length=120, blank=True)
    utm_source = models.CharField(max_length=120, blank=True)
    utm_medium = models.CharField(max_length=120, blank=True)
    utm_campaign = models.CharField(max_length=160, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-created_at']
