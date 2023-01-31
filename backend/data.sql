DROP DATABASE IF EXISTS week_five;
CREATE DATABASE week_five;
USE week_five;

DROP USER IF EXISTS 'week_five_user'@'localhost';
CREATE USER 'week_five_user'@'localhost' IDENTIFIED WITH mysql_native_password BY 'MyPassword1!';
GRANT ALL PRIVILEGES ON week_five.* TO 'week_five_user'@'localhost';

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id INTEGER PRIMARY KEY AUTO_INCREMENT,
  email VARCHAR(255) NOT NULL UNIQUE,
  `password` VARCHAR(255) NOT NULL,
  displayName VARCHAR(255) NOT NULL,
   profileImage VARCHAR(255) NOT NULL default "https://soccerpointeclaire.com/wp-content/uploads/2021/06/default-profile-pic-e1513291410505.jpg"
);
