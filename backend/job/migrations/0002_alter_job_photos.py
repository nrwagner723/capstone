# Generated by Django 4.0.4 on 2022-09-06 20:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('photos', '0001_initial'),
        ('job', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='job',
            name='photos',
            field=models.ForeignKey(default=None, on_delete=django.db.models.deletion.PROTECT, to='photos.photo'),
        ),
    ]