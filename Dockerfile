FROM node:16-stretch

WORKDIR /app

COPY ./tsconfig.json ./tsconfig.json
COPY ./package.json ./package.json

RUN yarn install