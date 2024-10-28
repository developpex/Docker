# Stage 1: Build the application
FROM node:lts-alpine AS builder
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build  # Run the build script

# Temporary step to inspect the /app directory contents
RUN ls -la /app

# Stage 2: Serve the application with nginx
FROM nginx
COPY --from=builder /app/build /usr/share/nginx/html
