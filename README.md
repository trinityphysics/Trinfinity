# v0-image-to-text

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_Kh6Z9RhM7599ZuEYfGPoT78p5dM2)

## Getting Started

Create a `.env.local` file with Supabase keys if you want cloud auth:

```bash
NEXT_PUBLIC_SUPABASE_URL=https://rzmsaggimcrtthatmzce.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6bXNhZ2dpbWNydHRoYXRtemNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzg1MDYzMjksImV4cCI6MjA5NDA4MjMyOX0.3rejo3genh9coetUifD7J6EG41DTyLwuvXktVCEJTjM
# Optional backward-compatible fallback:
# NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

If these are not set, the app falls back to local account storage.

### Supabase auth setup checklist

1. In Supabase Authentication, enable Email provider and Email/Password signups.
2. Configure URL settings:
   - Site URL: `http://localhost:5000` (and your production domain)
   - Redirect URLs: `http://localhost:5000/auth/callback` (and your production callback URL)
3. Run the SQL in `supabase/migrations/20260513082300_create_profiles.sql`.
4. Create a `profiles` row for each signed-up user after account creation (in app code or via a DB trigger).

App routes:

- `/signup` for account creation
- `/login` for email/password login
- `/auth/callback` for email confirmation/session exchange
- `/todos` protected with server-side auth checks

## Supabase persistence expectations

When Supabase is configured, the app uses Supabase Auth plus user-owned table data for persisted user progress/settings/custom content.

Expected user-owned tables:

- `profiles`
- `user_settings`
- `custom_questions`
- `user_progress`
- `quiz_attempts`
- `saved_items`

Keep shared/static question banks in the repository (`/data`) and do not move them into Supabase.

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.

<a href="https://v0.app/chat/api/kiro/clone/lewismcsheehy-trinity/v0-image-to-text" alt="Open in Kiro"><img src="https://pdgvvgmkdvyeydso.public.blob.vercel-storage.com/open%20in%20kiro.svg?sanitize=true" /></a>
