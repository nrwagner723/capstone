# Generated by Django 4.0.4 on 2022-09-01 20:18

from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('job', '0001_initial'),
        ('authentication', '0002_remove_user_jobs_remove_user_materials_watchlist_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='jobs',
            field=models.ForeignKey(default=django.utils.timezone.now, on_delete=django.db.models.deletion.PROTECT, to='job.job'),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='materials_watchlist',
            field=models.CharField(default=django.utils.timezone.now, max_length=255),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='user',
            name='phone_number',
            field=models.IntegerField(default=1),
        ),
        migrations.AddField(
            model_name='user',
            name='schedule',
            field=models.CharField(default=django.utils.timezone.now, max_length=255),
            preserve_default=False,
        ),
    ]
