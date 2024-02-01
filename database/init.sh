#!/bin/bash
cat << EOF > /data/application/init.sql
-- Create the database
CREATE DATABASE ${MYSQL_DATABASE};

-- Select the database to use
USE ${MYSQL_DATABASE};

-- Add user table
CREATE TABLE user(
   id INT PRIMARY KEY,
   name VARCHAR(100),
   email VARCHAR(255),
   user_name VARCHAR(50),
   password CHAR(64)
);

-- Create user
CREATE USER ${MYSQL_USER}@% IDENTIFIED BY"${MYSQL_PASSWORD}";
GRANT ALL PRIVILEGES ON ${MYSQL_DATABASE}.* TO ${MYSQL_USER}@%;
FLUSH PRIVILEGES;
EOF
