from django.contrib import admin
from .models import Photo

class PhotoAdmin(admin.ModelAdmin):
    readonly_fields = ('id',)

# Register your models here.
admin.site.register(Photo, PhotoAdmin)
