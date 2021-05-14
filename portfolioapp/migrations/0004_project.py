# Generated by Django 3.1.7 on 2021-05-08 23:57

import django.contrib.postgres.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioapp', '0003_delete_project'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(default='', max_length=160)),
                ('time', models.CharField(default='', max_length=160)),
                ('duration', models.CharField(blank=True, default='', max_length=160)),
                ('role', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(choices=[('Front-end Dev.', 'Front-end Dev.'), ('Back-end Dev.', 'Back-end Dev.'), ('Full-stack Dev.', 'Full-stack Dev.'), ('Designer', 'Designer')], default='', max_length=160), default=list, size=None)),
                ('collaboration', models.CharField(choices=[('Solo', 'Solo'), ('Solo w/ Supervision', 'Solo w/ Supervision'), ('Small Team', 'Small Team'), ('Small Team w/ Supervision', 'Small Team w/ Supervision'), ('Large Team w/ Supervision', 'Small Team w/ Supervision')], default='', max_length=160)),
                ('skills', django.contrib.postgres.fields.ArrayField(base_field=models.CharField(choices=[], default='', max_length=40), default=list, size=None)),
                ('summary', models.TextField(default='')),
                ('takeaways', django.contrib.postgres.fields.ArrayField(base_field=models.TextField(default=''), default=list, size=None)),
                ('github', models.CharField(blank=True, default='', max_length=160)),
                ('link', models.CharField(blank=True, default='', max_length=160)),
                ('icon', models.ImageField(blank=True, upload_to='static/project_icons/')),
                ('banner', models.ImageField(blank=True, upload_to='static/project_banners/')),
            ],
        ),
    ]