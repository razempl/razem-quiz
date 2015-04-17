---!> MARINER:MIGRATE:UP:
BEGIN;

ALTER TABLE answers DROP answer;
ALTER TABLE answers ADD answer varchar NOT NULL DEFAULT '';
ALTER TABLE answers ADD question varchar NOT NULL DEFAULT '';

COMMIT;

---!> MARINER:MIGRATE:DOWN:
BEGIN;

ALTER TABLE answers DROP answer;
ALTER TABLE answers DROP question;
ALTER TABLE answers ADD answer jsonb NOT NULL DEFAULT '';

-- Place your down migrations here
-- If you remove this section or leave it empty, Mariner will not allow you
-- to perform down migrations past this point

COMMIT;
