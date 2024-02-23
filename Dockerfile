FROM node:16-alpine
WORKDIR /app
# Cache and Install dependencies
COPY package.json ./
RUN npm install
# Copy app files
COPY ./ ./
# Expose port
EXPOSE 3000
# Start the app
CMD [ "npm", "start"]