from django.db import models

class Document(models.Model):
    class DocumentType(models.TextChoices):
        DATASHEET = 'datasheet', 'Datasheet'
        MANUAL = 'manual', 'Manual'
        CATALOG = 'catalog', 'Catálogo'
        CERTIFICATE = 'certificate', 'Certificado'
        DRAWING = 'drawing', 'Desenho técnico'

    product = models.ForeignKey('catalog.Product', on_delete=models.CASCADE, related_name='documents')
    title = models.CharField(max_length=180)
    document_type = models.CharField(max_length=32, choices=DocumentType.choices)
    file_url = models.URLField()
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['sort_order', 'title']
