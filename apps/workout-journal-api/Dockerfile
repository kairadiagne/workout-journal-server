# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

# Copy the package.json and lock file
COPY package*.json ./
RUN npm install --only=production

# Copy the source code and build the app
COPY ./apps/workout-journal-api ./apps/workout-journal-api
RUN npm run build --prefix apps/workout-journal-api

# Stage 2: Run
FROM node:18-alpine

WORKDIR /usr/src/app

# Copy only the build files and production dependencies
COPY --from=builder /usr/src/app/apps/workout-journal-api/dist ./dist/apps/workout-journal-api
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Expose the API port
EXPOSE 3000

# Start the app
CMD ["node", "dist/apps/workout-journal-api/main.js"]