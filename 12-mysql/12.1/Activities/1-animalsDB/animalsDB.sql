-- Creates the "newDB" database --
CREATE DATABASE newDB;

-- Makes it so all of the following code will affect newDB --
USE newDB;

-- Creates the table "people" within newDB --
CREATE TABLE people (
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL,
  -- Makes a boolean column called "has_pet" which cannot contain null --
  has_pet BOOLEAN NOT NULL,
  -- Makes a sting column called "pet_name" --
  pet_name VARCHAR(30),
  -- Makes an numeric column called "pet_age" --
  pet_age INTEGER(10),
  PRIMARY KEY (id)
);

-- Creates new rows containing data in all named columns --
INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Ahmed", TRUE, "Rockington", 100);

INSERT INTO people (name, has_pet, pet_name, pet_age)
VALUES ("Jacob", TRUE, "Misty", 10);

INSERT INTO people (name, has_pet)
VALUES ("Peter", FALSE);

-- Updates the row where the column name is peter --
UPDATE people
SET has_pet = TRUE, pet_name = "Franklin", pet_age = 2
WHERE name = "Peter";
