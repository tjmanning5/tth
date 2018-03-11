CREATE DATABASE `allen`;

-- Make it so all of the following code will affect favorite_db --
USE `allen`;

-- Creates the table "favorite_foods" within favorite_db --
CREATE TABLE favorite_foods (
	 `id` INT AUTO_INCREMENT NOT NULL,
	`food`  VARCHAR(255) NOT NULL,
	`score` INT,
	PRIMARY KEY (id)
);

CREATE TABLE favorite_songs (
	-- Make a string column called "song" which cannot contain null --
	 `id` INT AUTO_INCREMENT NOT NULL,
	`song` VARCHAR(255) NOT NULL,

	-- Make a string column called "artist" --
	`artist` VARCHAR(255),
	-- Make an integer column called "score" --
	`score`  INTEGER(10),
	PRIMARY KEY (id)
);

CREATE TABLE favorite_movies (
	-- Create a numeric column called "id" which automatically increments and cannot be null --
	 `id` INT AUTO_INCREMENT NOT NULL,
	-- Create a string column called "movie" which cannot be null --
	`movie` VARCHAR(30) NOT NULL,
	-- Create a boolean column called "five_times" that sets the default value to FALSE if nothing is entered --
	`five_times` BOOLEAN DEFAULT FALSE,
	-- Make an integer column called "score" --
	`score`  INTEGER(10),
	-- Set the primary key of the table to id --
	PRIMARY KEY (id)
);
