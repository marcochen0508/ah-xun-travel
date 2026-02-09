-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- 1. FEATURES ROUTES (特色行程)
create table public.features_routes (
  id uuid primary key default uuid_generate_v4(),
  title_zh_tw text not null,
  title_zh_cn text,
  title_th text,
  description_zh_tw text,
  description_zh_cn text,
  description_th text,
  image_url text,
  pdf_link text, -- Google Drive Link
  is_active boolean default true,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 2. NEWS EVENTS (最新消息)
create table public.news_events (
  id uuid primary key default uuid_generate_v4(),
  title text not null,
  content text,
  image_url text,
  is_active boolean default true,
  start_date date,
  end_date date,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- 3. ABOUT INFO (關於我們)
create table public.about_info (
  id text primary key, -- e.g., 'about_us_main'
  content_zh_tw text,
  content_zh_cn text,
  content_th text,
  updated_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.features_routes enable row level security;
alter table public.news_events enable row level security;
alter table public.about_info enable row level security;

-- Create Policies (Allow Public Read, Admin Write)
-- Note: 'anon' key usually has read access if configured, but explicit policies are better.

-- Policy: Public Read Access
create policy "Public users can read active routes" 
on public.features_routes for select 
using (true);

create policy "Public users can read active news" 
on public.news_events for select 
using (true);

create policy "Public users can read about info" 
on public.about_info for select 
using (true);

-- Policy: Authenticated/Admin Write Access (Service Role or Authenticated User)
-- For simplicity in this demo, we allow full access to authenticated users.
-- In production, you'd check for specific roles (e.g., auth.uid() in admin_users table).
create policy "Admins can insert routes" 
on public.features_routes for insert 
to authenticated 
with check (true);

create policy "Admins can update routes" 
on public.features_routes for update 
to authenticated 
using (true);

create policy "Admins can delete routes" 
on public.features_routes for delete 
to authenticated 
using (true);

-- Repeat for other tables...
create policy "Admins can manage news" 
on public.news_events for all 
to authenticated 
using (true);

create policy "Admins can manage about info" 
on public.about_info for all 
to authenticated 
using (true);
