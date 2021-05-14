from django.shortcuts import render
from .models import Skill, Project
from django.template import Context, loader
import json

def main_view(request,*args,**kwargs):
    skills = list(Skill.objects.all().filter(displayed=True))
    skills.sort(key= lambda skill: skill.experience, reverse=True)
    projects = list(Project.objects.all())
    projects.sort(key = lambda proj: proj.order_date, reverse=True)
    serializedSkills=[]
    serializedProjects=[]
    for skill in skills:
        serializedSkills.append({
            'name': skill.name, 
            'description': skill.description,
            'experience':skill.experience,
            'icon':skill.icon.url
        })
    for project in projects:
        obj = {
        'title':project.title,
        'time':project.time,
        'duration':project.duration if hasattr(project,"duration") else "",
        'role':project.role,
        'collaboration':project.collaboration,
        'skills':project.skills,
        'takeaways':project.takeaways,
        'summary':project.summary,
        'github':project.github if hasattr(project,"github") else "",
        'link':project.link if hasattr(project,"link") else "",
        'icon':project.icon.url,
        'banner':project.banner.url if project.banner else ""
        }
        serializedProjects.append(obj)
    data = {'skills':serializedSkills, 'projects':serializedProjects}
    return render(request,'main.html',{'data':json.dumps(data)})

def idsite_view(request,*args,**kwargs):
    return render(request,'idsite.html')
