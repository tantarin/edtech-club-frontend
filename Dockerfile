FROM node:14-alpine as build
WORKDIR /usr/src/app
# Cache and Install dependencies
COPY package.json .
COPY yarn.lock .
RUN NODE_ENV=development yarn install
# Copy app files
COPY . .
RUN yarn build
# Expose port
EXPOSE 3001
# Start the app
CMD [ "yarn", "start" ]