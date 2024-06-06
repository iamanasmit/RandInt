from django.db import models

# Create your models here.=
from django.contrib.auth.models import User
class user(User):
    def __str__(self):
        return self.username