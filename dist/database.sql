CREATE TABLE IF NOT EXISTS `BuuhV_Schedule` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `startAt` datetime DEFAULT NULL,
  `endAt` datetime DEFAULT NULL,
  `title` varchar(180) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `startAt` (`startAt`),
  UNIQUE KEY `endAt` (`endAt`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;