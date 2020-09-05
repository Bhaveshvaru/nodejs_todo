    CREATE DATABASE perntodo;
        
    CREATE TABLE todo(
        todo_id SERIAL PRIMARY KEY,
        description VARCHAR(255)
    );

 CREATE TABLE "users" (
  "id" bigserial PRIMARY KEY,
  "username" varchar(255) UNIQUE,
  "password" varchar(100),
  "type" varchar(50)
);