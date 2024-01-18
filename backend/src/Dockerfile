# Use an official Node runtime as the base image
FROM node:alpine3.19

# Create an application directory
RUN mkdir -p /backend

# Change the working directory to /backend
WORKDIR /backend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Make the app accessible outside the container
EXPOSE 7777

# Start the app
CMD ["npm", "start"]
