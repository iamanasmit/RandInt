from django.urls import path
from .views import home
from .views.login import LoginView
urlpatterns = [
    path('',home.index,name='home'),
    path('login/',LoginView.as_view(),name='login')
]
