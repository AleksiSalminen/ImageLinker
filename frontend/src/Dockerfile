# Official Node runtime as the base image (Alpine version)
FROM node:alpine3.19

# Create an application directory
RUN mkdir -p /frontend

# Change the working directory to /frontend
WORKDIR /frontend

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Make the app accessible outside the container
EXPOSE 5173

# Start the app
CMD ["npm", "run", "dev"]
