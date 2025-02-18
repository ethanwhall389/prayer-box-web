# prayer-box-web

## Branches:
- `main` – Always production-ready.
- `develop` – Where active development happens.
- `feature/branch-name` – Individual features branched from develop.
- `release/branch-name` – Prepares a new version for deployment.
- `hotfix/branch-name` – Fixes critical issues in main without disrupting develop.

## Branching Workflow:
- Create a `feature/branch-name` from develop.
- Merge feature branches into `develop` when done.
- Once enough features are ready, create a `release/branch-name` from `develop`.
- Finalize, test, and merge the release branch into `main` (and back into `develop`).
- If a critical bug appears in `main`, create a `hotfix/branch-name`, fix it, and merge back into both `main` and `develop`.