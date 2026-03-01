from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    ROLE_CHOICES = (
        ('customer', 'Customer'),
        ('brand', 'Brand Owner'),
        ('admin', 'Admin'),
    )

    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='customer')

    def __str__(self):
        return self.username


class Brand(models.Model):
    owner = models.ForeignKey(User, on_delete=models.CASCADE, related_name='brands')
    brand_name = models.CharField(max_length=255)
    description = models.TextField()
    is_verified = models.BooleanField(default=False)

    def __str__(self):
        return self.brand_name


class Product(models.Model):
    brand = models.ForeignKey(Brand, on_delete=models.CASCADE, related_name='products')
    name = models.CharField(max_length=255)
    description = models.TextField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()
    image = models.URLField(blank=True, null=True)
    category = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class Order(models.Model):
    STATUS_CHOICES = (
        ('pending', 'Pending'),
        ('paid', 'Paid'),
        ('shipped', 'Shipped'),
        ('cancelled', 'Cancelled'),
    )

    customer = models.ForeignKey(User, on_delete=models.CASCADE, related_name='orders')
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    payment_status = models.BooleanField(default=False)
    order_status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Order {self.id} - {self.customer.username}"


class OrderItem(models.Model):
    order = models.ForeignKey(Order, on_delete=models.CASCADE, related_name='items')
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField()

    def __str__(self):
        return f"{self.product.name} x {self.quantity}"