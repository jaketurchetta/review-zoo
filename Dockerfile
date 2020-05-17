FROM node:latest

RUN mkdir -p /src/app

WORKDIR /src/app

COPY package*.json ./

RUN npm install

COPY . /src/app

EXPOSE 3001

CMD [ "npm", "run", "server-dev" ]