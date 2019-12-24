FROM node:10.13-alpine

# Update alpine packages
RUN apk update add --no-cache yarn 

RUN npm config set unsafe-perm true

# Add adonis-cli
RUN yarn global add pm2 &&  \
  mkdir /api

COPY . /api

# Enter api dir
WORKDIR /api

# Create empty .env file
RUN touch .env && \
  yarn install
RUN npm install -g nodemon

#CMD [ "npm", "start" ]
#CMD pm2-runtime start ecosystem.config.js
CMD nodemon bin/wwww