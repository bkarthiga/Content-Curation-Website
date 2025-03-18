-- Table: public.Crow  Report

-- DROP TABLE IF EXISTS public."Crow  Report";

CREATE TABLE users
(
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL UNIQUE
);

INSERT INTO users(id,name,email) VALUES (1, 'Anne Bob', 'annebob@hotmail.com');

