# Multi-stage
# 1) Node image for building frontend assets
# 2) nginx stage to serve frontend assets

# Name the node stage "builder"
FROM node:18.10.0-alpine3.15 AS builder
RUN apk add --no-cache python3 g++ make
# Set working directory
WORKDIR /app
# Copy all files from current directory to working dir in image
COPY . .
# install node modules and build assets
RUN npm install --legacy-peer-deps
ARG API_SERVER
ENV REACT_APP_DOMAIN=${API_SERVER}
RUN REACT_APP_DOMAIN=${API_SERVER}

RUN npm run build

# nginx state for serving content
FROM nginx:alpine
RUN apk add --no-cache python3 g++ make
# Set working directory to nginx asset directory
WORKDIR /usr/share/nginx/html
# Remove default nginx static assets
RUN rm -rf ./*

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy static assets from builder stage
COPY --from=builder /app/build .
# Containers run nginx with global directives and daemon off
ENTRYPOINT ["nginx", "-g", "daemon off;"]