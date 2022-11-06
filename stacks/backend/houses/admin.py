from django.contrib import admin
from .models import House
# Register your models here.


# HouseModel를 위한 admin 패널을 만듬
# models.py에서 만든 app을 admin.py에서 등록함
@admin.register(House)
class HouseAdmin(admin.ModelAdmin):

    list_display = ('name', 'price_per_night', 'address', 'pet_allowed')
    list_filter = ('price_per_night', 'pet_allowed')