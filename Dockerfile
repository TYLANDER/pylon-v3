FROM node:alpine

RUN npm install -g serve

EXPOSE 3000

COPY . /pylonserver

WORKDIR /pylonserver

CMD ['serve', '-s', 'build']
