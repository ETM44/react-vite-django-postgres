## Docker

Accéder à la ligne de commande de l'image db:

- docker exec -it postgres-db /bin/bash

Accéder à la ligne de commande de l'image backend:

- docker exec -it django-backend /bin/bash

Accéder à la ligne de commande de l'image frontend:

- docker exec -it react-vite-frontend sh

Relancer un conteneur :

- docker restart <-nom_du_conteneur->

## postgres

Accéder à une base de donnée :

- psql -U myuser -d mydatabase -h localhost -p 5432

## django-postgres

Migration en bdd :

- python manage.py makemigrations <-myapp->
- python manage.py migrate
