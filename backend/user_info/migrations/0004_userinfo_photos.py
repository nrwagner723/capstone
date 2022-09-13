# Generated by Django 4.0.4 on 2022-09-13 19:10

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('photos', '0001_initial'),
        ('user_info', '0003_alter_userinfo_jobs_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='userinfo',
            name='photos',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='photos.photo'),
        ),
    ]