FROM node:latest

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . /src/app

EXPOSE 3001

# CMD [ "npm", "run", "server-dev" ]