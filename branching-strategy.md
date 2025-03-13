## Branches
- `main` – Always production-ready.
- `develop` – Where active development happens.
- `feature/branch-name` – Individual features branched from develop.
- `release/branch-name` – Prepares a new version for deployment.
- `hotfix/branch-name` – Fixes critical issues in main without disrupting develop.

## Branching Workflow
- Create a `feature/branch-name` from `develop`.
- Merge feature branches into `develop` when done.
- Once enough features are ready, create a `release/branch-name` from `develop`.
- Finalize, test, and merge the release branch into `main` (and back into `develop`).
- If a critical bug appears in `main`, create a `hotfix/branch-name`, fix it, and merge back into both `main` and `develop`.

## Concept
Organized into different categories of prayer, with multiple prayers ("cards") under each category. A user can use it for a daily prayer time. It gives one card from each category to the user, which can then be prayed through. Those cards are then "shuffled" to the back of their category, and will eventually make their way to the front again.

## Versioning

### MAJOR Version (X.0.0)
- Incremented for backward-incompatible changes or major updates.
- Indicates significant changes that may require users to update their workflows or integrations.
- Example: Moving from version 1.x.x to 2.0.0.

### MINOR Version (0.X.0)
- Incremented for backward-compatible new features or enhancements.
- Indicates new functionality has been added, but existing functionality remains unchanged.
- Example: Adding a new dashboard feature in version 1.2.0.

### PATCH Version (0.0.X)
- Incremented for backward-compatible bug fixes or minor improvements.
- Indicates small changes that do not introduce new features or break existing functionality.
- Example: Fixing a security vulnerability in version 1.2.1.
