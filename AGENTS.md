# AI Agent Instructions

This project follows the repo-local operating procedure in `docs/operating-procedure.md`, copied from the shared SOP at `https://github.com/charishynds/website-standards/blob/main/website-operating-procedure.md`.

## Project

Neil's Magic Carpets is a Vite, React, TypeScript, Tailwind CSS, Framer Motion, and Supabase client website deployed through Vercel. This is the primary site (neils-magic-carpets), rebuilt from scratch with an editorial, whitespace-heavy aesthetic.

## Required Workflow

- Preserve existing user or previous-agent changes. Do not reset, revert, or delete unrelated work.
- Use GitHub Flow: branch from `main`, open a pull request, review the Vercel Preview Deployment, then merge to `main` for production.
- Keep `docs/repo-admin-checklist.md` current as the living project task list.
- When the owner asks to add something to the checklist, tasks, to-dos, remaining items, or follow-ups, update `docs/repo-admin-checklist.md` unless another file is named.
- Ask before running networked, external, account-side, deployment, push, merge, destructive, dependency install/update, or audit actions.
- Announce local checks before running them. A request for a review or PR-readiness pass counts as approval for local lint/build/preview checks only.

## Common Commands

```bash
npm install
npm run dev -- --host 0.0.0.0 --port 5173
npm run lint
npm run build
npm run typecheck
```

Use `http://localhost:5173/` for local preview unless another port is chosen.

## External Services

- Vercel hosts previews and production.
- Supabase stores contact form leads (project to be confirmed — see checklist).
- WhatsApp Cloud API will be used by a `send-whatsapp` Supabase edge function (not yet deployed).
- Google Places API will be used by a `get-google-rating` Supabase edge function (not yet deployed).

Do not call, deploy, configure, or inspect these external services without explicit owner approval.
