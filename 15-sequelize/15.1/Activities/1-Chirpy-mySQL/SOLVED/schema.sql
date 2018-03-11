CREATE DATABASE chirpy;
USE chirpy;

CREATE TABLE IF NOT EXISTS `chirps` (
  `id` Int( 11 ) AUTO_INCREMENT NOT NULL,
  `author` VARCHAR( 255) NOT NULL,
  `body` VARCHAR( 140 ) NOT NULL,
  `created_at` DATETIME NOT NULL,

  PRIMARY KEY ( `id` ) );