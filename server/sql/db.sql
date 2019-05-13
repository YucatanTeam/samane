-- Adminer 4.7.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `access`;
CREATE TABLE `access` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `access_name` text COLLATE utf8_persian_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;


DROP TABLE IF EXISTS `doc`;
CREATE TABLE `doc` (
  `id` int(8) NOT NULL AUTO_INCREMENT,
  `shsh` text COLLATE utf8_persian_ci NOT NULL,
  `shi` text COLLATE utf8_persian_ci NOT NULL,
  `name` text COLLATE utf8_persian_ci NOT NULL,
  `more` text COLLATE utf8_persian_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;


DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `username` text COLLATE utf8_persian_ci NOT NULL,
  `password` text COLLATE utf8_persian_ci NOT NULL,
  `name` text COLLATE utf8_persian_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;


DROP TABLE IF EXISTS `user_access`;
CREATE TABLE `user_access` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) unsigned NOT NULL,
  `access_id` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `access_id` (`access_id`),
  CONSTRAINT `user_access_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  CONSTRAINT `user_access_ibfk_2` FOREIGN KEY (`access_id`) REFERENCES `access` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;


-- 2019-05-14 10:48:12