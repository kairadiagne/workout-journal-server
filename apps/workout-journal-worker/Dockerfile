# Stage 1: Build
FROM node:18-alpine AS builder

WORKDIR /usr/src/app

# Copy the package.json and lock file
COPY package*.json ./
RUN npm install --only=production

# Copy the source code and build the app
COPY ./apps/workout-journal-worker ./apps/workout-journal-worker
RUN npm run build --prefix apps/workout-journal-worker

# Stage 2: Run
FROM node:18-alpine

WORKDIR /usr/src/app

# Copy only the built files and production dependencies
COPY --from=builder /usr/src/app/apps/workout-journal-worker/dist ./dist/apps/workout-journal-worker
COPY --from=builder /usr/src/app/node_modules ./node_modules

# Expose the worker port
EXPOSE 3000

# Start the app
CMD ["node", "dist/apps/workout-journal-worker/main.js"]