# AGENTS.md

A VitePress site cataloguing real-world examples of product copy (UX, emails, microcopy) "captured in the wild," plus the tooling to lint the entries and publish them. Mostly Markdown.


## Stack

* Package manager: pnpm, version pinned in `package.json` under `packageManager`; CI reads it from there.
* Runtime: Node.js (see `.node-version`).
* Site: VitePress, sourced from `contents/`, deployed to GitHub Pages by `.github/workflows/deploy.yml` on push to `main`.
* Formatting and linting: Prettier (config `.prettierrc.json5`), markdownlint-cli2 (config `.markdownlint-cli2.jsonc`), and cSpell (`.cspell.json`).


## Layout

| Path        | What lives there                                                                 |
| ----------- | -------------------------------------------------------------------------------- |
| `contents/` | The copy examples themselves and the VitePress site config; the published root.  |
| `skills/`   | Local agent skills, one folder per skill with a SKILL.md. See skills/README.md.  |
| `scripts/`  | Repository helper scripts, most wired to pnpm commands. See scripts/README.md.   |
| `docs/`     | Generated docs, including contents-structure.md, a tree snapshot of contents/.   |


## Common commands

| Command          | What it does                                                              |
| ---------------- | ------------------------------------------------------------------------- |
| `pnpm lint`      | lint-code (Prettier) then lint-md (markdownlint-cli2), both fix in place. |
| `pnpm lint-code` | Prettier only.                                                            |
| `pnpm lint-md`   | markdownlint-cli2 fix only.                                               |
| `pnpm dev`       | Run the VitePress dev server against contents/.                           |
| `pnpm build`     | Build the VitePress site.                                                 |
| `pnpm preview`   | Preview the built site.                                                   |
| `pnpm tree`      | Regenerate docs/contents-structure.md from contents/.                     |
| `pnpm index`     | List the pnpm scripts defined in package.json.                            |
| `pnpm check`     | Lint, then start the VitePress dev server.                                |
| `pnpm test`      | Regenerate the tree, lint, then build and preview the site.               |

Run `pnpm lint` before finishing any change so the diff is already formatted. Run `pnpm tree` whenever you add, remove, or rename a file under `contents/`.


## Conventions

* One copy example per file. Group related examples in folders.
* Each file in `contents/` has a YAML front matter block with at least `title` and `description`. The `title` is used in the site navigation and must be unique across the repo. The `description` is used in the site search index.
* Keep entries scannable: source, context, the copy itself, and optional commentary.
* File and folder names are kebab-case, `.yaml` (never `.yml`); enforced by the `file-folder-name-linter` skill.

Writing rules (also enforced by markdownlint and the `general-en-polisher` skill):

* Straight quotes only - no curly quotes.
* Never use an en-dash or em-dash; always use a plain hyphen (`-`).
* Use the Oxford comma; avoid contractions; use sentence case for headings.
* Asterisk (`*`) bullets, two-space indent, two blank lines above a heading and one below.


## Scripts

Guidelines for helper scripts in `scripts/` and `skills/*/scripts/` (enforced by the `script-auditor` skill):

* **Language.** Default to Node.js ES modules (`.mjs`) or zsh. Python is banned. Non-module JavaScript (`.js` / `.cjs`) and non-zsh shells are allowed but not the default.
* **`--help`.** Every script must support `--help` and print clear usage.
* **Notes section.** Every script carries a comment block near the top with general notes (what it does), usage (how to invoke it), output (what it produces, including exit codes), and a reverse-chronological version history (`vX.Y - YYYY-MM-DD - summary`).
* **Status emojis.** Use ✅ for success, ⚠️ for warnings, and ❌ for errors in user-facing output.

When you add a script, wire it into `package.json` if it should be a `pnpm` command and add a row to the relevant `README.md` (`scripts/README.md` or the skill's README).


## Git commits

* Never add a `Co-Authored-By` trailer.
* Use the `ai-commit` skill to draft messages.
