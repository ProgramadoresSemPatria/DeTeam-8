FROM node:22-alpine

WORKDIR /usr/src/api

COPY . . 

RUN npm install --quiet --no-optional --no-fund --loglevel=error

RUN  npm run build

EXPOSE 9000

CMD [ "npm", "run", "start:prod" ]