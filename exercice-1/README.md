## Exercice n°1 : C'était mieux avant

L'application utilisée pour ce permier exercice est une page web NodeJS qui mémorise le nombre d'affichages dans une base de données Redis.

Cette application se compose donc :
- d'une application NodeJS utilisant le framework [Express](http://expressjs.com/)
- d'un conteneur Docker embarquant la base NoSQL [Redis](http://redis.io/)

L'ojectif de cette étape est de lancer les deux conteneurs et de les connecter ensemble via docker-cli :

*  Récupération et démarrage du conteneur redis :
```
  docker run -d --name redis redis
```

* Construction de l'image :
```
  docker build -t dijon/nodeapp .
```

* Démarrage du conteneur de l'application
```
  docker run -d --name nodeapp ##LieCteConteneurARedis## -p 8080:8080 dijon/nodeapp
```

Pour tester si votre application web NodeJS est bien connecté à Redis, vous pouvez consulter la page à l'adresse suivante : http://localhost:8080
