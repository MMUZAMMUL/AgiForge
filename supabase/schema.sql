-- AgentForge — Supabase schema
-- Run this once in Supabase → SQL Editor → New query → Run.
-- Safe to re-run (uses IF NOT EXISTS / OR REPLACE).

-- 1) PROFILES: one row per user (powers live member count + admin list)
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  created_at timestamptz default now()
);

alter table public.profiles enable row level security;

drop policy if exists "profiles readable by all" on public.profiles;
create policy "profiles readable by all" on public.profiles
  for select using (true);

-- Auto-create a profile row whenever someone signs up
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, full_name)
  values (new.id, new.email, new.raw_user_meta_data ->> 'full_name')
  on conflict (id) do nothing;
  return new;
end; $$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- 2) REVIEWS: in-app ratings
create table if not exists public.reviews (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  name text,
  rating int check (rating between 1 and 5),
  body text,
  created_at timestamptz default now()
);

alter table public.reviews enable row level security;

drop policy if exists "reviews readable by all" on public.reviews;
create policy "reviews readable by all" on public.reviews
  for select using (true);

drop policy if exists "users insert own review" on public.reviews;
create policy "users insert own review" on public.reviews
  for insert with check (auth.uid() = user_id);

drop policy if exists "users update own review" on public.reviews;
create policy "users update own review" on public.reviews
  for update using (auth.uid() = user_id);

-- 3) APP_CONFIG: owner-controlled global settings (announcement banner, toggles)
create table if not exists public.app_config (
  key text primary key,
  value jsonb,
  updated_at timestamptz default now()
);

alter table public.app_config enable row level security;

drop policy if exists "config readable by all" on public.app_config;
create policy "config readable by all" on public.app_config
  for select using (true);

-- Only the owner email may write config.  >>> CHANGE THE EMAIL BELOW <<<
drop policy if exists "owner writes config" on public.app_config;
create policy "owner writes config" on public.app_config
  for all using ( (auth.jwt() ->> 'email') = 'munagreat123@gmail.com' )
  with check ( (auth.jwt() ->> 'email') = 'munagreat123@gmail.com' );
