---!> MARINER:MIGRATE:UP:
BEGIN;

CREATE TABLE questions (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  question varchar NOT NULL
);

CREATE TABLE questions_answers (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  answer varchar NOT NULL,
  owner uuid REFERENCES questions(id)
);

CREATE TABLE vote (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  name varchar NOT NULL
);

CREATE TABLE vote_questions (
  vote_id uuid REFERENCES vote(id),
  question_id uuid REFERENCES questions(id),
  PRIMARY KEY(vote_id, question_id)
);

ALTER TABLE answers DROP answer;
ALTER TABLE answers ADD answer uuid REFERENCES questions_answers(id);
ALTER TABLE answers DROP question;
ALTER TABLE answers ADD question uuid REFERENCES questions(id);

COMMIT;

---!> MARINER:MIGRATE:DOWN:
BEGIN;

ALTER TABLE answers DROP answer;
ALTER TABLE answers ADD answer varchar NOT NULL DEFAULT '';
ALTER TABLE answers DROP question;
ALTER TABLE answers ADD question varchar NOT NULL DEFAULT '';

DROP TABLE vote_questions;
DROP TABLE vote;
DROP TABLE questions_answers;
DROP TABLE questions;

COMMIT;
