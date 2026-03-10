# Project Overview

A Next.js 16 web application migrated from Vercel to Replit. Uses the App Router with React 19, Tailwind CSS v4, shadcn/ui components, and the AI SDK.

## Stack

- **Framework**: Next.js 16.1.6 (App Router, Turbopack)
- **Runtime**: Node.js 20
- **Package manager**: pnpm
- **Styling**: Tailwind CSS v4 with shadcn/ui (Radix UI primitives)
- **AI**: Vercel AI SDK (`ai` package) with `@ai-sdk/gateway`
- **Forms**: react-hook-form + zod
- **Charts**: recharts
- **Analytics**: @vercel/analytics

## Project Structure

- `app/` — Next.js App Router pages and API routes
  - `api/generate-questions/` — AI question generation endpoint
  - `layout.tsx` — Root layout
  - `page.tsx` — Home page
- `components/` — Shared UI components (shadcn/ui)
- `hooks/` — Custom React hooks
- `lib/` — Utility functions
- `styles/` — Global styles
- `public/` — Static assets

## Running the App

```bash
pnpm run dev    # Development server on port 5000
pnpm run build  # Production build
pnpm run start  # Production server on port 5000
```

## Replit Configuration

- Dev and start scripts bind to `0.0.0.0:5000` for Replit preview pane compatibility
- Workflow: "Start application" runs `pnpm run dev`, output type: webview, port: 5000
