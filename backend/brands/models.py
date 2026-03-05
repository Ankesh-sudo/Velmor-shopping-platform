from django.db import models
from django.conf import settings

User = settings.AUTH_USER_MODEL


class Brand(models.Model):

    owner = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='brands'
    )

    name = models.CharField(
        max_length=255
    )

    description = models.TextField()

    logo = models.ImageField(
        upload_to='brands/logos/',
        blank=True,
        null=True
    )

    banner = models.ImageField(
        upload_to='brands/banners/',
        blank=True,
        null=True
    )

    approved = models.BooleanField(
        default=False
    )

    created_at = models.DateTimeField(
        auto_now_add=True
    )

    def __str__(self):
        return self.name