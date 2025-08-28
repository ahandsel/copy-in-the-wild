# Project overview

This project is a VitePress-based documentation site that provides reference material and guides for writers. It is built using VitePress, a static site generator powered by Vite and Vue (https://vitepress.dev/).

## Folder structure
* `.github/`: GitHub-specific files, including issue templates and workflows.
* `public/`: Image assets used in the documentation.

## Purpose

This repository is a VitePress-based documentation site. Copilot should help contributors maintain and improve the documentation by suggesting content, structure, and code examples that are accurate, concise, and consistent.


## Scope

Copilot operates only within the documentation. Do not modify build scripts, CI, VitePress config, or package manifests unless explicitly requested.


## General writing style

* Use clear, concise, and professional language.
* Match the existing tone and style of the documentation.
* Avoid unnecessary jargon. Explain terms when needed.
* Use sentence case for headings.
* Prefer short sentences, active voice, and simple words.
* Use the Oxford comma.
* Do not use slang, idioms, or emojis.


## Frontmatter requirements

Every Markdown file must include frontmatter that matches the site settings.

```yaml
---
title: "Page title"
description: "1-2 sentence summary for search and previews"
layout: doc
outline: deep
footer: true
---
```

* Keep `title` short, specific, and unique.
* Write `description` for humans and search engines.
* Add additional keys only if the site config supports them.

Reference: VitePress frontmatter configuration: <https://vitepress.dev/reference/frontmatter-config>


## Markdown rules

* Use proper heading levels to keep a valid outline. Start with one H1 per page.
* Use lists for steps and enumerations.
* Use fenced code blocks with a language tag, for example, ```ts or```bash.
* Use inline code for short identifiers, file names, and commands.
* Use relative links like `[text](../guide/page.md)` when linking within the repo.
* Ensure links resolve after build, and avoid hard-coded domains unless required.
* Use tables only when they improve scannability.
* Keep lines reasonably short to aid reviews.


### VitePress extensions

Use built-in containers and code groups when they improve clarity.

````md
::: info
Short helpful note.
:::

::: tip
Actionable guidance.
:::

::: warning
Call out risky operations.
:::

::: danger
Use only for critical risks.
:::

::: code-group
```ts [example.ts]
// TypeScript sample
```

```js [example.js]
// JavaScript sample
```

:::

````


## Content suggestions

* Propose specific edits that improve accuracy, clarity, and completeness.
* Identify missing sections, examples, or cross-links, and suggest where to place them.
* Replace vague statements with precise, testable claims.
* Flag duplicated, outdated, or contradictory content.


## Code examples

* Provide examples in JavaScript or TypeScript unless the page requires another language.
* Keep examples minimal, runnable, and directly related to the topic.
* Include imports and context needed to run the snippet.
* For shell commands, omit the leading `$` to make copy-paste clean.
* Prefer safe defaults. Avoid destructive commands.
* Validate snippets for syntax and basic correctness.


## Images and media

* Suggest images or diagrams only when they add understanding.
* Use existing assets in `public/` or `img/` when possible.
* Provide descriptive alt text.
* Use SVG for diagrams when available.
* Keep file sizes small.


## File and path conventions

* Preserve the existing directory structure unless reorganization is requested.
* Use lowercase file names with hyphens, for example, `getting-started.md`.
* Place new pages in the most relevant section directory.
* Update any local `index.md` files and navigation where required.


## Navigation and linking

* When adding a new page, update sidebars or indexes as needed.
* Maintain clear next and previous flows within a section.
* Add cross-links to related pages to reduce duplication.


## Linting and formatting

* Follow repository scripts and rules, for example, `.markdownlint.json` and `md-lint.sh`.
* Ensure all Markdown files pass linting before committing.
* Apply consistent spacing, punctuation, and capitalization.


## Commit messages

* Use clear and descriptive messages.
* Follow `type(scope): description`, for example, `docs(api): add example for user authentication`.
* Keep the description imperative and concise.


## Pull requests

* Include a clear summary of changes, motivations, and scope.
* List any new pages, moved files, or navigation updates.
* Note any follow-ups, risks, or breaking changes.
* Request review from appropriate owners.


## Review checklist

Use this quick checklist before submit and during review.

* Frontmatter includes `title`, `description`, `layout: doc`, `outline: deep`, and `footer: true`.
* Headings form a valid outline. One H1 per page.
* Links resolve locally after build, and there are no broken anchors.
* Code blocks have language tags, and examples run or compile.
* Images exist, have alt text, and reasonable size.
* Content matches the repository style and is technically correct.
* Linting passes with no errors.
* Navigation updated where needed.


## Additional notes

* See `README.md` for repository-specific guidance.
* See `writing-style-guides.md` for detailed style rules.
* Coordinate with maintainers for large restructures, new sections, or cross-repo moves.
