# Generated by Django 4.1.1 on 2022-10-03 04:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('houses', '0002_rename_price_house_price_per_night'),
    ]

    operations = [
        migrations.AddField(
            model_name='house',
            name='pet_allowed',
            field=models.BooleanField(default=True),
        ),
    ]
