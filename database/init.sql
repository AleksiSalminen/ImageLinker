
-- Drop the database if it exists
DROP DATABASE IF EXISTS slidelinker;

-- Create the database
CREATE DATABASE slidelinker;

-- Select the database to use
USE slidelinker;

-- Add user table
CREATE TABLE user(
   id INT PRIMARY KEY,
   name VARCHAR(100),
   email VARCHAR(255),
   user_name VARCHAR(50),
   password CHAR(64)
);
