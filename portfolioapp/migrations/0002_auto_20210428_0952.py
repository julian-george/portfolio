# Generated by Django 3.1.7 on 2021-04-28 13:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=120)),
                ('time', models.CharField(max_length=160)),
                ('role', models.TextField()),
                ('skills', models.TextField()),
                ('description', models.TextField()),
                ('icon', models.ImageField(upload_to='project_icons/')),
                ('banner', models.ImageField(upload_to='project_banners/')),
            ],
        ),
        migrations.DeleteModel(
            name='Skill',
        ),
    ]
