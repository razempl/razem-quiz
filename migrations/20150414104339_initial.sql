---!> MARINER:MIGRATE:UP:
BEGIN;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp" WITH SCHEMA public;

CREATE TABLE answers (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  answer jsonb NOT NULL,
  created_at timestamp DEFAULT now() NOT NULL
);

-- Place your up migrations here

COMMIT;

---!> MARINER:MIGRATE:DOWN:
BEGIN;

DROP TABLE answers;

-- Place your down migrations here
-- If you remove this section or leave it empty, Mariner will not allow you
-- to perform down migrations past this point

COMMIT;
