from django.db import models

# Create your models here.
class Blog(models.Model):
    criteria = models.CharField(max_length=64)
    name = models.CharField(max_length=64)
    time = models.CharField(max_length=64)
    description = models.CharField(max_length=250)
    website = models.CharField(max_length=100)
    image = models.ImageField(upload_to='images/', blank=True)

    def __str__(self):
        return self.name