create or replace function public.sync_auth_user_profile()
returns trigger
language plpgsql
security definer
set search_path = ''
as $$
begin
  if new.email is null then
    return new;
  end if;

  insert into public.profiles (id, email, display_name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data ->> 'display_name', new.raw_user_meta_data ->> 'full_name')
  )
  on conflict (id) do update
  set
    email = excluded.email,
    display_name = coalesce(excluded.display_name, public.profiles.display_name);

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
drop trigger if exists on_auth_user_updated on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.sync_auth_user_profile();

create trigger on_auth_user_updated
after update of email, raw_user_meta_data on auth.users
for each row
when (old.email is distinct from new.email or old.raw_user_meta_data is distinct from new.raw_user_meta_data)
execute function public.sync_auth_user_profile();

insert into public.profiles (id, email, display_name)
select
  users.id,
  users.email,
  coalesce(users.raw_user_meta_data ->> 'display_name', users.raw_user_meta_data ->> 'full_name')
from auth.users as users
where users.email is not null
on conflict (id) do update
set
  email = excluded.email,
  display_name = coalesce(excluded.display_name, public.profiles.display_name);
