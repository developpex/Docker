FROM node:14-alpine

WORKDIR /usr/app

# Copy first package.json so no package.json change will not run npm install
COPY ./package.json ./
RUN npm install

# Copy the rest
COPY ./ ./

CMD [ "npm", "start" ]