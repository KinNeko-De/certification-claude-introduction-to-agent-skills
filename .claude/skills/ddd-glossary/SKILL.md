---
name: ddd-glossary
description: Creates and maintains a DDD glossary that maps German domain terms to English translations. Use when the user wants to add, update, or sort terms in the DDD glossary.
---

This project uses Domain-Driven Design with a German **Ubiquitous Language**: domain terms are written in German, technical terms in English.

- `Auftrag`, `Kunde`, `SortByAuftragsID` → domain terms, belong in the glossary
- `Language`, `SendRequest` → technical terms, do not belong in the glossary

The glossary exists so AI tools can understand and predict German domain terms correctly. See `references/intention.md` for full background and `references/Ecommerce.md` for domain boundaries and naming rules.

## Glossary file

Manage the project's DDD glossary in `DDD_GLOSSARY.md` at the project root.

The glossary uses a three-column markdown table:

| Domain Term (German) | English Term | Description |
|----------------------|--------------|-------------|

Columns:
- **Domain Term (German)** — the German domain term as used in the code
- **English Term** — the direct English equivalent
- **Description** — one sentence explaining what this concept means in the domain context

## Adding or updating a term

1. If `DDD_GLOSSARY.md` does not exist, create it with the header and separator rows above.
2. Append the new row to the table (order does not matter yet).
3. Run the sort script to keep the table alphabetically sorted by German term:
   ```
   npx tsx .claude/skills/ddd-glossary/scripts/sort-glossary.ts
   ```
4. Confirm the glossary has exactly three columns and every column is filled.
5. Tell the user what changed.

## Sorting the Glossary

1. If `DDD_GLOSSARY.md` does not exist tell the user that he can create the glossary by added a term.
2. Run the sort script to keep the table alphabetically sorted by German term:
   ```
   npx tsx .claude/skills/ddd-glossary/scripts/sort-glossary.ts
   ```
3. Confirm the glossary has exactly three columns and every column is filled.
4. Tell the user that you sorted the glossary alphabetically by the German term

## Replacing English terms in the codebase

When the user asks to replace all English occurrences of a term with the German translation:

1. Look up the term in `DDD_GLOSSARY.md` to confirm both the English and German forms.
2. Run the replace script:
   ```
   npx tsx .claude/skills/ddd-glossary/scripts/replace-term.ts <EnglishTerm> <GermanTerm>
   ```
   Example: `npx tsx .claude/skills/ddd-glossary/scripts/replace-term.ts Invoice Rechnung`
3. Show the user the list of changed files and total replacement count from the script output.
4. Ask the user to review the changes before committing.

The script replaces whole-word matches only (word boundary `\b`) in code files (`.cs`, `.ts`, `.js`, `.py`, `.java`, `.kt`). It skips `node_modules`, `.git`, `.venv`, `bin`, and `obj` directories.

## Showing an example

If the user asks what the glossary looks like or wants to see an example, show them the content of:
`assets/example-glossary.md`

## Requirements

- Node.js with `npx` available in the shell
- No dependencies to install — `tsx` runs via `npx`
