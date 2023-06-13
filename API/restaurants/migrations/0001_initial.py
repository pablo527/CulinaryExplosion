# Generated by Django 4.2.2 on 2023-06-13 03:14

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Restaurant',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('restauratName', models.CharField(max_length=200)),
                ('description', models.TextField()),
                ('productName', models.TextField()),
                ('created_at', models.DateTimeField(auto_now=True)),
                ('ubication', models.TextField()),
                ('instagram', models.TextField()),
                ('whatsapp', models.TextField()),
                ('image', models.TextField()),
                ('img01', models.TextField()),
                ('img02', models.TextField()),
                ('img03', models.TextField()),
            ],
        ),
    ]
