-- StartForge Waitlist — Supabase SQL Editor
-- Dashboard → SQL Editor → New query → Coller → Run

create table if not exists public.waitlist (
  id         uuid primary key default gen_random_uuid(),
  email      text not null unique,
  source     text default 'landing',
  created_at timestamptz not null default now()
);

-- Row Level Security : le public peut INSERT mais jamais SELECT/UPDATE/DELETE
alter table public.waitlist enable row level security;

drop policy if exists "Allow public insert"  on public.waitlist;
drop policy if exists "Allow public read"    on public.waitlist;
drop policy if exists "Allow public delete"  on public.waitlist;
drop policy if exists "Public can join the waitlist" on public.waitlist;

create policy "Public can join the waitlist"
  on public.waitlist
  for insert
  to anon, authenticated
  with check (true);

-- Index pour la deduplication (la contrainte UNIQUE fait deja le travail)
create index if not exists waitlist_email_idx on public.waitlist (email);
