FROM node
# RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app
RUN mkdir /home/node/app
WORKDIR /home/node/app
# COPY package*.json ./
# USER node
COPY . .

EXPOSE 3000

RUN npm install

CMD ["nodemon", "server.js"]