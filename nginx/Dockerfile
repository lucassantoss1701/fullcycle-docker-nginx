FROM nginx:1.15.0-alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d

ENV DOCKERIZE_VERSION v0.6.1

RUN wget https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && tar -C /usr/local/bin -xzvf dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz \
  && rm dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz


RUN mkdir /usr/src/app -p && touch /usr/src/app/index.js

ENTRYPOINT [ "/docker-entrypoint.sh" ]
CMD [ "nginx", "-g", "daemon off" ]