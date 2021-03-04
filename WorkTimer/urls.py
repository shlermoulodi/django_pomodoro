"""WorkTimer URL Configuration."""
from django.conf.urls import url
from django.conf.urls.static import static
from django.conf import settings
from . import views

urlpatterns = [
    # Homepage.
    url('', views.home_site),
    # Pomodoro site.
    url('about', views.about_site)
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
