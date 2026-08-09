# go-auth-docs

Documentation site for **[go-auth](https://github.com/nazimdjebloun/go-auth)** — a self-hosted authentication library for Go. It gives you registration, login, sessions, password recovery, email verification, invite-only signup, OAuth, multi-tenant organizations, an admin surface, CSRF protection, rate limiting, and audit logging, as a package you import into your own Go program rather than a service you depend on.

All content under `content/docs/` is derived from the [`docs/`](https://github.com/nazimdjebloun/go-auth/tree/main/docs) folder in the go-auth repository — that's the source of truth. Documentation changes should be made there first.

## Development

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 to see it running.

```bash
pnpm build   # production build
pnpm start   # serve the production build
```
