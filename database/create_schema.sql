use oowlish;

create table customers(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  first_name varchar(100),
  last_name varchar(100),
  email varchar(100),
  gender varchar(100),
  company varchar(100),
  city varchar(100),
  title varchar(100),
  latitude varchar(100),
  longitude varchar(100)
);

