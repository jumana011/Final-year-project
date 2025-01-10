
CREATE USER 'appuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'app2027';
GRANT ALL PRIVILEGES ON healthified.* TO 'appuser'@'localhost';
CREATE TABLE `healthified`.`registration` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(45) NOT NULL,
  `password` CHAR(60) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`));
  
CREATE TABLE `healthified`.`meals` (
  `meals_id` INT NOT NULL AUTO_INCREMENT,
  `Diet_type` ENUM('keto', 'vegetarian', 'balanced') NOT NULL,
  `name` VARCHAR(255) NOT NULL,
  `description` TEXT NULL,
  `meal_type` ENUM('breakfast', 'lunch', 'dinner', 'snack') NOT NULL,
  PRIMARY KEY (`meals_id`));
