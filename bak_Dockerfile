# Build container
FROM node:current-alpine3.10 as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install 
COPY . .
RUN yarn build

# Run container
FROM nginx:mainline-alpine

# Nginx config
RUN rm -rf /etc/nginx/conf.d
COPY conf /etc/nginx 

# Static build
COPY --from=builder /app/build /usr/share/nginx/html/

# Default port exposure
EXPOSE 80

# Initialise environnement variable into filesystem 
WORKDIR /usr/share/nginx/html 
COPY ./env.sh .
COPY .env . 

# Add bash
RUN apk add --no-cache bash

# Run script which initializes env vars to fs
RUN chmod +x env.sh
# RUN ./env.sh

# Start Nginx server
CMD ["/bin/bash", "-c", "/usr/share/nginx/html/env.sh && nginx -g \"daemon off;\""]




