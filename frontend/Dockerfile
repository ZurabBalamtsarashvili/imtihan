FROM node:16.17.0-bullseye-slim

WORKDIR /app

COPY . .

RUN yarn

RUN yarn build

CMD [ "yarn", "start" ]
