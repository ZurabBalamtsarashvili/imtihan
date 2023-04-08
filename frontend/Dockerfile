# Node.js 16.0.0 üzerinde çalışacak Alpine Linux tabanlı bir imajı alıyoruz
FROM node:16.0.0-alpine

WORKDIR /app

RUN apk add --no-cache bash

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

CMD ["npm", "start"]
