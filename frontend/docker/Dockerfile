FROM node:16.17.0-bullseye-slim

WORKDIR /app

COPY . .

RUN yarn install

RUN yarn export

FROM nginx:stable-alpine

COPY ./docker/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=0 /app/out /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
