# Use Node.js base image
FROM node:20.13.1

# Set working directory
WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the backend code
COPY . .

# Expose the port
EXPOSE 5000

# Start the server
CMD ["npm", "start"]