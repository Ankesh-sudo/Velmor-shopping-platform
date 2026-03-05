from django.db import models
from brands.models import Brand


class Product(models.Model):

    CATEGORY_CHOICES = (
        ('tshirt', 'Tshirt'),
        ('hoodie', 'Hoodie'),
        ('shirt', 'Shirt'),
        ('jeans', 'Jeans'),
        ('jacket', 'Jacket'),
    )

    brand = models.ForeignKey(
        Brand,
        on_delete=models.CASCADE,
        related_name='products'
    )

    name = models.CharField(
        max_length=255
    )

    description = models.TextField()

    price = models.DecimalField(
        max_digits=10,
        decimal_places=2
    )

    category = models.CharField(
        max_length=100,
        choices=CATEGORY_CHOICES
    )

    stock = models.IntegerField(
        default=0
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.name


class ProductImage(models.Model):

    product = models.ForeignKey(
        Product,
        on_delete=models.CASCADE,
        related_name='images'
    )

    image = models.ImageField(
        upload_to='products/images/'
    )

    def __str__(self):
        return f"Image for {self.product.name}"