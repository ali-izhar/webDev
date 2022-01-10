from django.shortcuts import render
from .models import Blog
# Create your views here.

def homepage(request):
    items = Blog.objects.all()
    return render(request, 'homeblog/index.html',
        {'items': items})

def education(request):
    items = Blog.objects.all()
    return render(request, 'homeblog/education.html')

def skills(request):
    return render(request, 'homeblog/skills.html')

def projects(request):
    return render(request, 'homeblog/projects.html')

def certifications(request):
    return render(request, 'homeblog/certifications.html')