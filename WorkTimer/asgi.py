"""ASGI config for WorkTimer project."""
import os
from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'WorkTimer.settings')
application = get_asgi_application()
