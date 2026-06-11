---
name: ai-commit
description: Auto-gather git changes, confirm scope with the user, and draft a commit title and message following the project commit style guide.
---

# AI commit message drafter

Review git changes, confirm scope with the user, and draft a commit message following the selected commit style guide. This skill supports normal commits, `--head` message-only amend mode, and `--auto` no-question drafting.

* If a file named `repo-commit-style-guide.md` exists anywhere in the repository, use it.
* Otherwise, use `skills/ai-commit/default-commit-style-guide.md`.


## Workflow flags


### Default workflow (No flags)

1. **Resolve style guide source.** Detect the repository root (for example, with `git rev-parse --show-toplevel`). Search the repository for a file named `repo-commit-style-guide.md` (for example, with `git ls-files ':(glob)**/repo-commit-style-guide.md'` from the repo root, or `find <repo-root> -name repo-commit-style-guide.md -not -path '*/node_modules/*'`). If exactly one match is found, use it as the source of truth. If multiple matches are found, prefer one at the repo root, then one under `docs/`, then ask the user which to use. If no match is found, use `skills/ai-commit/default-commit-style-guide.md`.
2. **Auto-gather git inputs.** Run `git status`, `git diff`, and `git diff --staged` automatically. Do not ask the user to paste anything.
3. **Present findings, confirm scope, and accept notes.** Show the user a list of changed files and a brief summary of the changes. In the same prompt, ask which files are in-scope for this commit and whether the user has additional context or notes (for example, a related ticket ID or a short explanation of intent). Default if no notes provided: draft from the diff alone. Wait for the user's response before proceeding.
4. **Run linter.** Run `pnpm lint` before drafting the commit message. If the linter reports errors, show the output to the user and fix the issues before proceeding. Do not draft a commit message until the linter passes cleanly.
5. **Draft the commit message.** Based only on the in-scope diffs and any user-provided notes, draft a commit title and message body following the rules below and in the selected style guide source.
6. **Determine single or split commit.** Prefer a single commit unless the evidence clearly supports a logical split into multiple commits with distinct purposes.
7. **Handle ambiguity.** If the in-scope diffs or notes are too ambiguous to write a reliable commit message, ask clarifying questions with 2-3 suggested answers instead of guessing.
8. **Confirm and commit.** Show the drafted commit message to the user. If the user approves, stage the in-scope files and run `git commit` with the approved message. If the user requests changes, revise the message and confirm again before committing.


### `--head` workflow flag

When `--head` is used, the workflow focuses on amending the current `HEAD` commit message without staging any changes or including any unstaged/staged diffs. The steps are:

1. **Resolve style guide source.** Detect the repository root and resolve the style guide source the same way as in the default workflow.
2. **Gather HEAD-only inputs.** Run `git log -1` and `git show --name-status --patch HEAD` to inspect only the current `HEAD` commit.
3. **Present HEAD findings and accept notes.** Show the files and summary from `HEAD` only. Ask for optional context/notes for improving the existing commit message. Do not ask for file scope in this mode.
4. **Skip linter in this mode.** Do not run `pnpm lint` for `--head` because no file content is being committed.
5. **Draft amended commit message.** Base the title/body only on `HEAD` diff content plus user notes.
6. **Single commit only.** `--head` mode always amends exactly one commit (`HEAD`); do not recommend split commits.
7. **Handle ambiguity.** If `HEAD` diff or notes are too ambiguous, ask clarifying questions with 2-3 suggested answers.
8. **Confirm and amend only message.** After approval, run `git commit --amend --only` with the approved message. Never stage files and never include working-tree or staged changes in `HEAD`.


### `--auto` workflow flag

When `--auto` is used, the workflow drafts a commit message without asking any intermediate questions. The user can optionally use `--head` with `--auto` to focus on amending the `HEAD` commit message. The steps are:

1. **No intermediate questions.** Do not ask scope questions, note questions, or clarifying questions before drafting.
2. **Auto scope in default mode.** If `--auto` is used without `--head`, treat all current working-tree changes as in-scope.
3. **HEAD scope in amend mode.** If `--auto` is used with `--head`, use only `HEAD` commit data as in-scope.
4. **Single confirmation step.** After showing the draft, ask exactly one yes/no confirmation question.
5. **On `yes` (default mode).** Run `git add -A`, then create the commit with the approved message.
6. **On `yes` (`--head` mode).** Run `git commit --amend --only` with the approved message.
7. **On non-`yes`.** Do not run git write commands; stop and wait for new instructions.


## Output format

Wrap the entire output in a single fenced code block with the `markdown` language tag so the user can copy it easily.


### Single commit

```markdown
Title: <emoji> <commit title>

Message:

- <main change>
- <supporting change or rationale, if supported>
- <testing details, if supported>
- <risk, migration, or compatibility note, if supported>
```


### Split recommendation

```markdown
Split recommendation:

1. Title: <emoji> <commit title>
   Message:
   - <main change>
   - <supporting change or rationale, if supported>

2. Title: <emoji> <commit title>
   Message:
   - <main change>
   - <supporting change or rationale, if supported>
```


### Clarifying questions

```markdown
Clarifying questions:

1. <question>
   - Option A: <answer>
   - Option B: <answer>
   - Option C: <answer>
```


## Constraints

* Base commit messages only on information from the diff and user-provided notes. Do not invent intent, implementation details, side effects, testing, or risk.
* Do not include speculative claims.
* Do not copy large chunks of the diff verbatim.
* Do not mention that you are an AI.
* Do not include commentary before or after the output.
* If the diff or notes are too ambiguous, ask clarifying questions instead of guessing.
* In `--head` mode, ignore `git status`, `git diff`, and `git diff --staged`; use only `HEAD` commit data.
* In `--head` mode, do not run `git add`, do not stage/unstage files, and do not include any additional files in the amend.
* In `--auto` mode, ask no intermediate questions; ask only one final yes/no confirmation after drafting.
* In `--auto` mode without `--head`, confirmation uses `git add -A` before committing.
* In `--auto --head` mode, do not include additional files and do not stage files.
