"""Views for WorkTimer."""
from django.http import HttpResponse
from django.shortcuts import render


def about_site(request) -> HttpResponse:
    """Mapping for /about_site URI."""
    site_author = 'Shler Moulodi'
    site_title = 'About this app'
    return render(request, 'about.html', {'site_title': site_title, 'site_author': site_author})


def home_site(request) -> HttpResponse:
    """Mapping for /home.html URI."""
    return render(request, 'home.html', {})
