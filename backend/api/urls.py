from django.urls import path
from .views import home
from .views.login import LoginView
from .views import user_cred
urlpatterns = [
    path('',home.index,name='home'),
    path('login/',LoginView.as_view(),name='login'),
]
