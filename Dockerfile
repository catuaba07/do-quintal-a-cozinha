# Development stage
FROM node:20-alpine

WORKDIR /app

# Install dependencies first (better layer caching)
COPY package*.json ./
RUN npm install


# Copy the rest of the application
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the development server with hot reloading
# CMD ["npm", "run", "dev"]
CMD ["sh", "-c", "npm run db:deploy && npm run dev"]
