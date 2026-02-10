-- Enable RLS on general_content
alter table general_content enable row level security;

-- Policy for public read access
create policy "Public Read Access"
on general_content for select
to anon, authenticated
using (true);

-- Policy for service role full access (implicit, but good to be explicit if needed, though service_role bypasses anyway)
