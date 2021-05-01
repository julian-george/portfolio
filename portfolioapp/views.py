from django.shortcuts import render
from .models import Skill, Project
import json

def main_view(request,*args,**kwargs):
    skills = list(Skill.objects.all())
    projects = list(Project.objects.all())
    print(projects[3].banner)
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
        'orderid':project.orderid,
        'title':project.title,
        'time':project.time,
        'duration':project.duration,
        'role':project.role,
        'collaboration':project.collaboration,
        'skills':project.skills,
        'description':project.description,
        'summary':project.summary,
        'github':project.github,
        'link':project.link,
        'icon':project.icon.url,
        }
        if (project.banner):
            obj["banner"]=project.banner.url
        else:
            obj["banner"]=""
        serializedProjects.append(obj)
    data = {'skills':serializedSkills, 'projects':serializedProjects}
    return render(request,'index.html',{'data':json.dumps(data)})
    