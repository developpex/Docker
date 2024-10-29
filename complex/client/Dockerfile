# Stage 1: Build the application
FROM node:16-alpine AS builder
WORKDIR /app
COPY ./package.json .
RUN npm install
COPY . .
RUN npm run build  # Run the build script

# Stage 2: Serve the application with nginx
FROM nginx
EXPOSE 3000
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/build /usr/share/nginx/html
