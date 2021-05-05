FROM node:14.12.0-stretch as builder

ARG PUBLIC_URL="http://127.0.0.1/"

ENV PUBLIC_URL=${PUBLIC_URL}

RUN mkdir vh-front && chown -R node:node vh-front

WORKDIR /vh-front

ADD . /vh-front

RUN npm install

RUN echo $REACT_APP_STAGING

RUN npm run-script build --output-path=build

FROM nginx:1.15

COPY nginx/nginx-custom.conf /etc/nginx/conf.d/default.conf
RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /vh-front/build /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

