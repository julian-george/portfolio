from django.contrib import admin
from .models import Skill, Project
from django_better_admin_arrayfield.admin.mixins import DynamicArrayMixin


class ProjectModelAdmin(admin.ModelAdmin, DynamicArrayMixin):
    list_display=('title','time')

class SkillModelAdmin(admin.ModelAdmin):
    list_display=('name','displayed')

admin.site.register(Skill,SkillModelAdmin)
admin.site.register(Project,ProjectModelAdmin)