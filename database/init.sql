-- ----------------------- --
-- DATABASE INITIALIZATION --
-- ----------------------- --

-- Create the database
CREATE DATABASE slidelinker;

-- Select the database to use
USE slidelinker;

-- Add user table
CREATE TABLE user(
   id INT PRIMARY KEY AUTO_INCREMENT,
   user_name VARCHAR(50),
   name VARCHAR(100),
   email VARCHAR(255),
   password CHAR(60)
);

-- ------------------------ --
-- ------ TEST DATA ------- --
-- ------------------------ --

-- Table: user
-- (Password: test)
INSERT INTO user (user_name, name, email, password) VALUES ('test', 'Test User', 'user@test.com', '$2a$04$X/Wco1QSm74GpaQFfEff8.kACjPRaZPTKznLT5j3GXxltBQTE667S');
INSERT INTO user (user_name, name, email, password) VALUES ('test2', 'Test2 User', 'user2@test.com', '$2a$04$X/Wco1QSm74GpaQFfEff8.kACjPRaZPTKznLT5j3GXxltBQTE667S');
INSERT INTO user (user_name, name, email, password) VALUES ('test3', 'Test3 User', 'user3@test.com', '$2a$04$X/Wco1QSm74GpaQFfEff8.kACjPRaZPTKznLT5j3GXxltBQTE667S');
