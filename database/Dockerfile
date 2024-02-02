FROM mysql:8.3.0

# Create the /data/application directory if it doesn't exist
RUN mkdir -p /data/application

# Copy the SQL init script
COPY init.sql /data/application/init.sql

# Initialize the database through the init.sql file
CMD ["mysqld", "--init-file=/data/application/init.sql"]
