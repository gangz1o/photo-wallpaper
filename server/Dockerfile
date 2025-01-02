# Build stage
FROM node:18-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY server/package*.json ./server/

# Install dependencies
RUN npm install

# Copy source code
COPY server/ ./server/

# Build the application
RUN npm run build:server

EXPOSE 3000

CMD ["node", "server/dist/main"]
