from django.db import models

class Product(models.Model):
    company = models.ForeignKey('companies.Company', on_delete=models.PROTECT, related_name='products')
    category = models.ForeignKey('categories.Category', on_delete=models.PROTECT, related_name='products')
    applications = models.ManyToManyField('applications.Application', related_name='products', blank=True)
    name = models.CharField(max_length=200)
    slug = models.SlugField(max_length=220, unique=True)
    model = models.CharField(max_length=120, blank=True)
    short_description = models.CharField(max_length=320, blank=True)
    description = models.TextField(blank=True)
    featured = models.BooleanField(default=False)
    active = models.BooleanField(default=True)
    seo_title = models.CharField(max_length=180, blank=True)
    seo_description = models.CharField(max_length=320, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['company__sort_order', 'name']

    def __str__(self):
        return f'{self.company} — {self.name}'

class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
    image_url = models.URLField()
    alt_text = models.CharField(max_length=220, blank=True)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['sort_order', 'id']

class Specification(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='specifications')
    name = models.CharField(max_length=160)
    value = models.CharField(max_length=220)
    unit = models.CharField(max_length=40, blank=True)
    sort_order = models.PositiveIntegerField(default=0)

    class Meta:
        ordering = ['sort_order', 'id']
