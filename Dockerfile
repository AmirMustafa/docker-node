FROM node

WORKDIR /app

COPY . /app

RUN npm install

COPY . /app

EXPOSE 80

CMD ["node", "server"]