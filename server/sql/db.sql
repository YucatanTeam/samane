-- Adminer 4.7.1 MySQL dump

SET NAMES utf8;
SET time_zone = '+00:00';
SET foreign_key_checks = 0;
SET sql_mode = 'NO_AUTO_VALUE_ON_ZERO';

DROP TABLE IF EXISTS `access`;
CREATE TABLE `access` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `access_name` text COLLATE utf8_persian_ci NOT NULL,
  `description` text COLLATE utf8_persian_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_persian_ci;

INSERT INTO `access` (`id`, `access_name`, `description`) VALUES
(1,	'doc_get',	'لیست پرونده های موجود'),
(2,	'doc_add',	'ساخت پرونده جدید');

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

INSERT INTO `user` (`id`, `username`, `password`, `name`) VALUES
(2,	'admin',	'027cfe4ec9e9a40f47efad427a0e6767{�/�\'ف��{̪��Lo����r�`p$�=�*�;R��U���*�3��&o�-Ԙڐ1T��',	NULL),
(3,	'wildonion',	'fcc76ac1b6ec089ae2577dc6a3987cebiʧ]\n��]�y+MX~�|��r��u$\n(.j���Nn~4[�\Zywa\\(��U���֍�\\�',	NULL);

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

INSERT INTO `user_access` (`id`, `user_id`, `access_id`) VALUES
(1,	2,	1),
(2,	3,	2);

-- 2019-05-14 10:43:56
