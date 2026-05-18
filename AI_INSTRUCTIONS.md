# AI Instructions

This repo follows `docs/operating-procedure.md`.

Before making workflow, deployment, release, or external-service decisions:

1. Read `docs/operating-procedure.md`.
2. Inspect the current repo and git status.
3. Preserve existing local changes.
4. Record discovered owner actions and follow-ups in `docs/repo-admin-checklist.md`.
5. Run `npm run lint` and `npm run build` without asking — announce before running. Ask before networked checks, account-side actions, deployments, pushes, dependency installs, audits, or destructive commands.

Local project preview defaults to:

```bash
npm run dev -- --host 0.0.0.0 --port 5173
```

Local PR checks:

```bash
npm run lint
npm run build
npm run typecheck
```

Run `npm audit --omit=dev` only after approval.
