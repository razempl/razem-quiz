---!> MARINER:MIGRATE:UP:
BEGIN;

CREATE TABLE auth_codes (
  id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
  created_at timestamp DEFAULT now() NOT NULL
);

ALTER TABLE answers ADD auth_code uuid REFERENCES auth_codes(id);

COMMIT;

---!> MARINER:MIGRATE:DOWN:
BEGIN;

ALTER TABLE answers DROP auth_code;
DROP TABLE auth_codes;

COMMIT;
