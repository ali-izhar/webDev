from django.urls import path

from . import views

urlpatterns = [
    path("", views.homepage, name="homepage"),
    path("education", views.education, name="education"),
    path("skills", views.skills, name="skills"),
    path("projects", views.projects, name="projects"),
    path("certifications", views.certifications, name="certifications"),
]
