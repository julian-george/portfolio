# Generated by Django 3.1.7 on 2021-05-01 00:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioapp', '0007_project_duration'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='github',
            field=models.CharField(default='', max_length=160),
        ),
        migrations.AddField(
            model_name='project',
            name='link',
            field=models.CharField(default='', max_length=160),
        ),
        migrations.AlterField(
            model_name='project',
            name='description',
            field=models.TextField(blank=True, default=''),
        ),
    ]
