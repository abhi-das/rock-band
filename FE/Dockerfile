
### STAGE 1:BUILD ###
FROM node:16.3.0-alpine AS build

WORKDIR /dist/src/app

RUN npm cache clean --force

COPY . .
RUN npm install -g yarn
RUN npm install -g nx
# RUN nx cache-clear
RUN yarn install
RUN yarn rock:format
RUN yarn rock:lint
RUN yarn rock:test
RUN yarn rock:cart:test
RUN yarn rock:product:test
RUN yarn rock:prod

### STAGE 2:BUILD ###
FROM nginx:latest AS ngi

COPY --from=dist/apps/rock-band /dist/src/app/build /usr/share/nginx/html

COPY ../../infra/config/nginx.conf  /etc/nginx/conf.d/default.conf

ENTRYPOINT ["nginx", "-g", "daemon off;"]

EXPOSE 90