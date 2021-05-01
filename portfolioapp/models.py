from django.db import models

class Skill(models.Model):
    name = models.CharField(max_length=20)
    description = models.TextField(default="")
    experience = models.TextField(default="")
    icon = models.ImageField(upload_to='static/skill_icons/')

class Project(models.Model):
    orderid = models.IntegerField(default=0)
    title = models.CharField(max_length=160)
    time = models.CharField(max_length=160, default="")
    duration = models.CharField(max_length=160, default="", blank=True)
    role = models.CharField(max_length=160, default="")
    collaboration = models.CharField(max_length=160, default="")
    skills = models.TextField(default="")
    summary = models.TextField(default="")
    description = models.TextField(default="",blank=True)
    github = models.CharField(max_length=160, default="", blank=True)
    link = models.CharField(max_length=160, default="", blank=True)
    icon = models.ImageField(upload_to='static/project_icons/')
    banner = models.ImageField(upload_to='static/project_banners/', blank=True)