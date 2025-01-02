# Build stage
FROM node:18-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY ui/package*.json ./ui/

# Install dependencies
RUN npm install

# Copy source code
COPY ui/ ./ui/

# Build the application
RUN npm run build:ui

# Production stage
FROM nginx:alpine

# Copy built assets from build stage
COPY --from=build /app/ui/dist/ui /usr/share/nginx/html

# Copy nginx configuration
COPY ui/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
