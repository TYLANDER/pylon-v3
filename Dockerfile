FROM node:alpine

RUN npm install -g serve

EXPOSE 3000

COPY ./build /usr/src/pylonserver

WORKDIR /usr/src/pylonserver

CMD ["serve", "-s", ".", "-p", "3000"]
