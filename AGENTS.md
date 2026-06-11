# AGENTS.md

A VitePress site cataloguing real-world examples of product copy (UX, emails, microcopy) "captured in the wild."


## Stack

* Static site: [VitePress](https://vitepress.dev/)
* Package manager: `pnpm@10.33.0`


## Common commands

| Command        | What it does                                                       |
| -------------- | ------------------------------------------------------------------ |
| `pnpm dev`     | Start the VitePress dev server.                                    |
| `pnpm build`   | Build the static site.                                             |
| `pnpm preview` | Preview the built site.                                            |
| `pnpm lint`    | Prettier (`lint-code`) then markdownlint-cli2 `--fix` (`lint-md`). |
| `pnpm test`    | `lint` + `build` + `preview` (used as the local pre-merge check).  |

Run `pnpm lint` before finishing any markdown change so the diff is already formatted.


## Writing style

Content is markdown under the repo root. Match the existing examples' tone and structure; keep entries scannable (source, context, the copy itself, optional commentary).

* Never use en-dash or em-dash; always use a plain hyphen (`-`) instead.


## Git commits

* Never add a `Co-Authored-By` trailer.
* Use the `ai-commit` skill to draft messages.
