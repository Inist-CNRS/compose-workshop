# compose-workshop
Atelier docker-compose pour la journée DevelopR6 / 2RCE du 2 juin 2006

Cet atelier a pour objectif d'illustrer l'utilisation de l'outil docker-compose, qui est très utilisé pour orchestrer plusieurs services préalablement dockerisés.




## Cas n°1 : Application Web NodeJS + Redis

L'application utilisée pour ce 1er cas est une page web NodeJS qui mémorise le nombre d'affichages dans une base de données Redis.

Cette application se compose donc :

- d'une application NodeJS utilisant le framework [Express](http://expressjs.com/)
- d'un conteneur Docker embarquant la base NoSQL [Redis](http://redis.io/) 

Le Contenu de ce TP est situé dans le répertoire `app-node`. Chaque étape est placée dans un sous-répertoire `step-X`, la solution final étant dans le sous-répertoire `final-step`

### 1ère étape :

L'ojectif de cette étape est de lancer les deux conteneurs via docker-engine :
  
  


 
## Cas n°2 : Wordpress

