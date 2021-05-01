# Generated by Django 3.1.7 on 2021-04-28 13:53

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioapp', '0002_auto_20210428_0952'),
    ]

    operations = [
        migrations.CreateModel(
            name='Skill',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
                ('description', models.TextField()),
                ('icon', models.ImageField(upload_to='skill_icons/')),
            ],
        ),
    ]