from django.contrib import admin
from django.urls import path, include
from knox import views as knox_views

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',include('users.urls')), 
    #path('api/auth/',include('knox.urls')), 

    path('logout/',knox_views.LogoutView.as_view(), name='knox_logout'), 
    path('logoutall/',knox_views.LogoutAllView.as_view(), name='knox_logoutall'), 
    path('api/password_reset/',include('django_rest_passwordreset.urls', namespace='password_reset')), 

]
