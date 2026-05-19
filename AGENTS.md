# AI Agent Instructions

This project follows the repo-local operating procedure in `docs/operating-procedure.md`, copied from the shared SOP at `https://github.com/charishynds/website-standards/blob/main/website-operating-procedure.md`.

## Project

Neil's Magic Carpets is a Vite, React, TypeScript, Tailwind CSS, Framer Motion, and Supabase client website deployed through Vercel. This is the primary site (neils-magic-carpets), rebuilt from scratch with an editorial, whitespace-heavy aesthetic.

## Required Workflow

- Preserve existing user or previous-agent changes. Do not reset, revert, or delete unrelated work.
- Use GitHub Flow: branch from `main`, open a pull request, review the Vercel Preview Deployment, then merge to `main` for production.
- Keep `docs/repo-admin-checklist.md` current as the living project task list.
- When the owner asks to add something to the checklist, tasks, to-dos, remaining items, or follow-ups, update `docs/repo-admin-checklist.md` unless another file is named.
- Run `npm run lint` and `npm run build` without asking — announce before running. Ask before anything networked, external, account-side, deploy, push, merge, destructive, dependency install/update, or audit action.
- Before recommending or performing any branch deletion, always run `git branch -r --merged main` to verify which remote branches are actually merged. Never rely on the owner's recollection alone — verify first. Long-lived branches like `feature/client-feedback` may never be "merged" in the traditional sense and must not be deleted.
- Draft commit messages using conventional commits format: `type(scope): short description` (e.g. `fix(contact): correct phone validation regex`).
- When a pull request is ready to open, draft the PR title, summary, and checklist unprompted.
- After completing a significant piece of work, offer a brief self-review: flag edge cases, missed accessibility requirements, or follow-ups.
- After changes that affect project structure, stack, or workflow, proactively update `CLAUDE.md` and `AGENTS.md`.

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

- Vercel hosts previews and production (project: neils-magic-carpets).
- Supabase project `fxraygkweckkxkfxfrsh` stores contact form leads and hosts edge functions.
- `get-google-rating` Supabase edge function is deployed and live — fetches Google rating via Places API (New). Deployed with `--no-verify-jwt` because the `sb_publishable_` key format is not a JWT and would otherwise cause 401s.
- `send-whatsapp` Supabase edge function is not yet deployed — requires WhatsApp Cloud API credentials.

Do not call, deploy, configure, or inspect these external services without explicit owner approval.
