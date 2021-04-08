# `@buuhv/schedule`

Create scheduling systems with BuuhV Schedule

A BuuhV lib to help you keep track of your schedule system.
With it you create, edit, get and remove a schedule.
@buuhv/schedule will also have return error returns with slugs for you to create customized responses


## Getting started

`npm install @buuhv/schedule --save`

## Usage

First time you need to create a table as below

``
CREATE TABLE IF NOT EXISTS `TABLENAME` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `startAt` datetime DEFAULT NULL,
  `endAt` datetime DEFAULT NULL,
  `title` varchar(180) DEFAULT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `startAt` (`startAt`),
  UNIQUE KEY `endAt` (`endAt`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;
``

To create your Schedule see our examples here: https://github.com/geeknection/buuhv-schedule/tree/main/dist/examples

---
## Contributors

Please reffer to https://github.com/geeknection/buuhv-schedule/contributors for the complete list of contributors.

## License
The library is released under the MIT licence. For more information see `LICENSE`.