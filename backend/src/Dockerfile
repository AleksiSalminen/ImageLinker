# Official Node runtime as the base image (Alpine version)
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

# Generate the Prisma models, generate Prisma client, start the app
CMD ["/bin/sh", "-c", "npx prisma db pull;npx prisma generate;npm run dev"]
