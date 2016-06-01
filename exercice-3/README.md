## Exercice n°3 : Monte le volume !

L'application utilisée pour ce troisième exercice est une application chat developpé avec Socket.io et NodeJS.

L'ojectif de cette étape est de lancer le conteneur relatif à notre chat avec le montage d'un volume pour pouvoir accéder directement en local au code source de la page HTMP (répertoire `client`) pour pouvoir y appliquer quelques modifications.

Pour cela, nous mettons à votre disposition un fichier `docker-compose.yml` à remplir avec les bonnes instructions.

Une fois votre `docker-compose.yml` finalisé, vous pouvez lancer la commande suivante pour démarrer tous les services :
```
docker-compose up
```

Pour tester si votre application web NodeJS est bien connectée à Redis, vous pouvez consulter la page à l'adresse suivante : [http://localhost:8000](http://localhost:8000).

Pour stopper tous les conteneurs liés aux services décrits dans docker-compose, vous pouvez lancer la commande suivante :
```
docker-compose stop
```
Et pour les supprimer
```
docker-compose rm
```
