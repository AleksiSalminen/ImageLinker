#!/bin/sh

# Function to wait for the database to be ready and for Prisma to generate the models
wait_for_database() {
 echo "Waiting for database to become available..."
 sleep 15 # Wait for 15 seconds before trying
 echo "Trying to connect..."
 while ! npx prisma db pull; do
 	echo "Trying to connect..."
    sleep 15 # Wait for 15 seconds before trying again
 done
}

# Call the function to wait for the database
wait_for_database

# Run the remaining commands
npx prisma generate
npm run dev
