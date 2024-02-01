FROM mysql:8.3.0

# Create the /data/application directory if it doesn't exist
RUN mkdir -p /data/application

# Create the empty init.sql file
RUN touch /data/application/init.sql

# Give the MySQL server permissions to the folder
RUN chown -R mysql:mysql /data/application

# Copy the shell script into the Docker image
COPY init.sh /db-init/init.sh

# Make the script executable
RUN chmod +x /db-init/init.sh

# Run the sql init file generation shell file, and then initialize the database through the init.sql file
CMD ["/bin/sh", "-c", "/db-init/init.sh;mysqld --init-file=/data/application/init.sql"]
