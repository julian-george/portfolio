from django.db import models
from django_better_admin_arrayfield.models.fields import ArrayField
from django.core.validators import MaxValueValidator, MinValueValidator
import django.utils.timezone as timezone


ROLE_CHOICES = (
    ("Front-End","Front-End"),
    ("Back-End","Back-End"),
    ("Full-Stack","Full-Stack"),
    ("Designer","Designer")
)
COLLAB_CHOICES = (
    ("Solo","Solo"),
    ("Solo w/ Supervision", "Solo w/ Supervision"),
    ("Small Team","Small Team"),
    ("Small Team w/ Supervision","Small Team w/ Supervision"),
    ("Large Team w/ Supervision", "Large Team w/ Supervision")
)

def help_text_maker(choices):
    str = ""
    for tup in choices:
        str+=tup[0]+", "
    return str

class Skill(models.Model):
    name = models.CharField(max_length=40, default="")
    description = models.TextField(default="")
    experience = models.IntegerField(default=1,validators=[MaxValueValidator(5), MinValueValidator(1)])
    icon = models.ImageField(upload_to='static/skill_icons/', blank=True)
    displayed = models.BooleanField(default=True)

SKILL_CHOICES = []

for skill in Skill.objects.all():
    SKILL_CHOICES.append(tuple((skill.name,skill.name)))

class Project(models.Model):
    title       = models.CharField(max_length=160, default="")
    time        = models.CharField(max_length=160, default="")
    duration    = models.CharField(max_length=160, default="", blank=True)
    role        = ArrayField(models.CharField(max_length=160, default="", choices=ROLE_CHOICES), default=list, help_text=help_text_maker(ROLE_CHOICES))
    collaboration = models.CharField(max_length=160, default="", choices=COLLAB_CHOICES)
    # the SKILL_CHOICES hint doesn't update dynamically, so restarting the app is needed
    skills      = ArrayField(models.CharField(max_length=40, choices=SKILL_CHOICES,default=""), default=list, help_text=help_text_maker(SKILL_CHOICES))
    summary     = models.TextField(default="")
    takeaways   = ArrayField(models.TextField(default=""),default=list)
    github      = models.CharField(max_length=160, default="", blank=True)
    link        = models.CharField(max_length=160, default="", blank=True)
    icon        = models.ImageField(upload_to='static/project_icons/',blank=True)
    banner      = models.ImageField(upload_to='static/project_banners/', blank=True)
    # this attribute is a somewhat arbitrary date in this project's time range used for ordering projects
    order_date = models.DateField(default=timezone.now)