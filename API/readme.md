crear entorno virtual

    virtualenv venv

activa entorno virtual
    source venv/bin/activate


install django

    pip3 install django
    pip install djangorestframework

    django-admin --version

crear proyecto

    django-admin startproject api .

inicializar proyecto

    python manage.py runserver.py    


Crear app

    python manage.py startapp app
    agregar a settings

mIgraciones de models

    python manage.py makemigrations


crear tabla

    python manage.py migrate




