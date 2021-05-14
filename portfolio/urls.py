from django.contrib import admin
from django.urls import path

from portfolioapp.views import main_view, idsite_view

urlpatterns = [
    path('', main_view),
    path('idsite/',idsite_view),
    path('admin/', admin.site.urls),
]
