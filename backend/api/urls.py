from django.urls import path
from .views import home
from .views.login import LoginView
from .views import user_cred
urlpatterns = [
    path('',home.index,name='home'),
    path('login/',LoginView.as_view(),name='login'),
    path('get_credentials/',user_cred.get_user_credentials, name='get_credentials')
]
