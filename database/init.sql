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
   user_name VARCHAR(50) UNIQUE,
   name VARCHAR(100),
   email VARCHAR(255) UNIQUE,
   password CHAR(60)
);

-- Add project table
CREATE TABLE project (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    start_id INT NOT NULL
);

-- Add interface table
CREATE TABLE interface (
    id INT PRIMARY KEY AUTO_INCREMENT,
    project_id INT NOT NULL,
    dark_theme BOOLEAN DEFAULT FALSE,
    font VARCHAR(255),
    font_size INT,
    primary_color VARCHAR(255),
    secondary_color VARCHAR(255),
    FOREIGN KEY (project_id) REFERENCES project(id) ON DELETE CASCADE
);

-- Add slide table
CREATE TABLE slide (
    id INT PRIMARY KEY AUTO_INCREMENT,
    project_id INT NOT NULL,
    heading VARCHAR(255),
    reverting BOOLEAN DEFAULT FALSE,
    description TEXT,
    FOREIGN KEY (project_id) REFERENCES project(id) ON DELETE CASCADE
);

-- Add image table
CREATE TABLE image (
    id INT PRIMARY KEY AUTO_INCREMENT,
    slide_id INT NOT NULL,
    loc VARCHAR(255),
    horiz_pos INT,
    vert_pos INT,
    size INT,
    angle INT,
    FOREIGN KEY (slide_id) REFERENCES slide(id) ON DELETE CASCADE
);

-- Add choice table
CREATE TABLE choice (
    id INT PRIMARY KEY AUTO_INCREMENT,
    slide_id INT NOT NULL,
    title VARCHAR(255),
    endpoint_id INT,
    FOREIGN KEY (slide_id) REFERENCES slide(id) ON DELETE CASCADE
);

-- ------------------------ --
-- ------ TEST DATA ------- --
-- ------------------------ --

-- Table: user
-- (Password: test)
INSERT INTO user (user_name, name, email, password) VALUES ('test', 'Test User', 'user@test.com', '$2a$04$X/Wco1QSm74GpaQFfEff8.kACjPRaZPTKznLT5j3GXxltBQTE667S');
INSERT INTO user (user_name, name, email, password) VALUES ('test2', 'Test2 User', 'user2@test.com', '$2a$04$X/Wco1QSm74GpaQFfEff8.kACjPRaZPTKznLT5j3GXxltBQTE667S');
INSERT INTO user (user_name, name, email, password) VALUES ('test3', 'Test3 User', 'user3@test.com', '$2a$04$X/Wco1QSm74GpaQFfEff8.kACjPRaZPTKznLT5j3GXxltBQTE667S');
