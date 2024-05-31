from django.db import models

# Create your models here.=
from django.contrib.auth.models import User
class user(User):
    communities=models.TextField(blank=True, max_length=50)
    def __str__(self):
        return self.username