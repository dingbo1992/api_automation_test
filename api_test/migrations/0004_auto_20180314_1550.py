# Generated by Django 2.0.2 on 2018-03-14 15:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_test', '0003_auto_20180314_1547'),
    ]

    operations = [
        migrations.AlterField(
            model_name='apiinfo',
            name='data',
            field=models.TextField(blank=True, null=True, verbose_name='mock内容'),
        ),
    ]
