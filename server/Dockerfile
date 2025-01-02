# Build stage
FROM node:18-alpine

WORKDIR /app

# Install wget and openssl
RUN apk add --no-cache wget openssl

# Copy package.json
COPY server/package*.json ./

# Install dependencies with verbose logging
RUN npm install --verbose

# Copy source code
COPY server/ ./

# Generate Prisma client and build the application
ENV DATABASE_URL="mysql://user:password@mysql:3306/photo_wallpaper"
RUN npx prisma generate && \
    npx prisma migrate deploy && \
    npm run build

# Add wait-for-it script
COPY server/wait-for-it.sh ./wait-for-it.sh
RUN chmod +x ./wait-for-it.sh

# Create start script
RUN echo '#!/bin/sh\n\
echo "Starting wait-for-it script..."\n\
./wait-for-it.sh mysql:3306 -t 60 -- echo "MySQL is up"\n\
echo "Running Prisma migrations..."\n\
npx prisma migrate deploy\n\
echo "Starting application..."\n\
node dist/main' > start.sh && chmod +x start.sh

EXPOSE 3000

CMD ["/bin/sh", "start.sh"]
