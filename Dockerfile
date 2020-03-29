FROM node:10

RUN npm install -g nodemon

WORKDIR /api

COPY package*.json ./
RUN rm -f ./package-lock.json
RUN npm install

COPY . .

CMD [ "nodemon", "bin/www" ]
