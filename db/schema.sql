CREATE DATABASE IF NOT EXISTS Event_db;
USE Event_db;

CREATE TABLE Event(
	id INT AUTO_INCREMENT NOT NULL,
	eventName VARCHAR(255),
    category VARCHAR(80),
    description VARCHAR(255),
    priority VARCHAR(3),
    lastDate DATE,
    nextDue DATE,
    completed BOOLEAN,
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id)
);