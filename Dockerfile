FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY . /src/app
COPY package*.json ./

RUN npm install

EXPOSE 3001

CMD [ "npm", "run", "server-dev" ]