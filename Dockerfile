FROM node:10

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g nodemon


CMD nodemon bin/wwww