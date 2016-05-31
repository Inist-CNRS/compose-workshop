FROM node:4.4
MAINTAINER Rémy Méja <remy.meja@inist.fr>
MAINTAINER Claude Niederlender <claude.niederlender@inist.fr>
ADD app.js /
ADD package.json /
WORKDIR /
RUN npm install
EXPOSE 8080
CMD ["node", "app.js"]
