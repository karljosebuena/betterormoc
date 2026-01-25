-- Create offices table
create table "public"."offices" (
    "id" uuid not null default gen_random_uuid(),
    "slug" text not null,
    "name" text not null,
    "description" text,
    "logo_url" text,
    "contact_info" jsonb default '{}'::jsonb,
    "location" text,
    "created_at" timestamp with time zone not null default now(),
    "updated_at" timestamp with time zone not null default now()
);

-- Add constraints
alter table "public"."offices" add constraint "offices_pkey" primary key ("id");
alter table "public"."offices" add constraint "offices_slug_key" unique ("slug");
alter table "public"."offices" add constraint "offices_name_key" unique ("name");

-- Enable RLS
alter table "public"."offices" enable row level security;

create policy "Enable read access for all users"
on "public"."offices"
as permissive
for select
to public
using (true);

-- Add office_id to services
alter table "public"."services" add column "office_id" uuid;
alter table "public"."services" add constraint "services_office_id_fkey" foreign key ("office_id") references "public"."offices"("id");

-- Seed Offices
insert into "public"."offices" ("name", "slug", "description", "location") values
('Municipal Civil Registrar''s Office', 'civil-registrar', 'Responsible for the civil registration of vital events like births, marriages, and deaths.', 'Municipal Hall, 2nd Floor'),
('Municipal Treasurer''s Office', 'municipal-treasurer', 'Responsible for the collection of taxes, fees, and charges.', 'Municipal Hall, Ground Floor'),
('Mayor''s Office - Business Permits & Licensing', 'bpls', 'Handles business permits, mayor''s clearances, and tricycle franchises.', 'Municipal Hall'),
('Municipal Assessor''s Office', 'municipal-assessor', 'Responsible for the appraisal and assessment of real properties.', 'Municipal Hall, Ground Floor'),
('Municipal Social Welfare and Development Office', 'mswdo', 'Provides social protection and promoting the rights and welfare of the poor and vulnerable.', 'Municipal Hall'),
('Municipal Engineering Office', 'municipal-engineering', 'Responsible for infrastructure planning, construction, and maintenance.', 'Municipal Hall'),
('Municipal Health Office', 'health-office', 'Responsible for the delivery of basic health services.', 'Rural Health Unit'),
('Municipal Planning and Development Office', 'mpdo', 'Responsible for formulating development plans and policies.', 'Municipal Hall'),
('Municipal Budget Office', 'municipal-budget', 'Responsible for the budget administration of the LGU.', 'Municipal Hall'),
('Municipal Accounting Office', 'municipal-accounting', 'Responsible for the accounting and internal audit services.', 'Municipal Hall'),
('Municipal Agriculture Office', 'municipal-agriculture', 'Responsible for agricultural promotion and development.', 'Municipal Hall'),
('Municipal General Services Office', 'general-services', 'Responsible for supply and property management.', 'Municipal Hall'),
('Human Resource Management Office', 'hrmo', 'Responsible for personnel and human resource management.', 'Municipal Hall'),
('Sangguniang Bayan Office', 'sangguniang-bayan', 'The legislative body of the municipality.', 'Municipal Hall, 2nd Floor'),
('SEEDO - Public Market', 'seedo-public-market', 'Management of the Public Market operations.', 'Public Market'),
('SEEDO - Slaughterhouse', 'seedo-slaughterhouse', 'Management of the Slaughterhouse operations.', 'Slaughterhouse');

-- Attempt to link existing services to offices based on text matching (best effort)
-- Note: 'office' column in services is currently text. We will NOT drop it yet to preserve data, but we can sync it.

update "public"."services" set "office_id" = (select id from offices where slug = 'civil-registrar') where office ilike '%Civil Registrar%';
update "public"."services" set "office_id" = (select id from offices where slug = 'municipal-treasurer') where office ilike '%Treasurer%';
update "public"."services" set "office_id" = (select id from offices where slug = 'bpls') where office ilike '%Business%' or office ilike '%Mayor%';
update "public"."services" set "office_id" = (select id from offices where slug = 'municipal-assessor') where office ilike '%Assessor%';
update "public"."services" set "office_id" = (select id from offices where slug = 'mswdo') where office ilike '%Social%' or office ilike '%MSWDO%';
update "public"."services" set "office_id" = (select id from offices where slug = 'health-office') where office ilike '%Health%';

-- Add comment explaining the duality
comment on column "public"."services"."office" is 'Legacy text column. Use office_id for relational data.';
