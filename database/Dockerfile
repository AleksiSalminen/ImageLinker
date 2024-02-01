# Use MySQL 8 image
FROM mysql:8.0

# Create the /data/application directory if it doesn't exist
RUN mkdir -p /data/application

# Create the empty init.sql file
RUN touch /data/application/init.sql

# Give the MySQL server permissions to the folder
RUN chown -R mysql:mysql /data/application

# Copy the shell script into the Docker image
COPY init.sh /initdb/init.sh

# Make the script executable
RUN chmod +x /initdb/init.sh

# Run the script to add the content to the database init SQL file
RUN /initdb/init.sh

# Run the sql init file generation shell file, and then initialize the database through the init.sql file
CMD ["/bin/sh", "-c", "/initdb/init.sh;mysqld --init-file=/data/application/init.sql"]
