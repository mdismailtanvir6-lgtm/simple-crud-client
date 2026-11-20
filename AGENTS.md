<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## API configuration

- All server calls go through `src/lib/api.js` (`apiUrl(path)`); don't reintroduce hardcoded `localhost:5000` URLs.
- `NEXT_PUBLIC_API_URL` sets the Express API base URL. It is inlined at build time, so changing it on Vercel requires a redeploy. Without a usable value, local development falls back to `http://localhost:5000` and production falls back to the deployed API.
- The users list uses `use cache` with `cacheLife("max")`; a build made before the env var is set can cache an empty list until the next deploy or revalidation.
