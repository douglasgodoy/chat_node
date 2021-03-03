FROM node:15-alpine
WORKDIR /src/
COPY . /src/
ADD . /src/

RUN npm install -g typescript --force

RUN npm i

RUN npm run build

CMD npm start
