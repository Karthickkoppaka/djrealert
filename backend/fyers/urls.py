#To Define routes
from django.urls import path
from django.urls.conf import include
from .apicontroller import fyersSessionManagement


urlpatterns = [
    #Login Fyers Session
    path('Login', fyersSessionManagement.FyersLogin),
    path('PostLogin', fyersSessionManagement.FyersPostLogin),
    path('Status', fyersSessionManagement.FyersStatus),
]