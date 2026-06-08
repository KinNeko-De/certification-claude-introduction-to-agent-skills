# Project Guidelines

## Domain Language

This project uses Domain-Driven Design with a German Ubiquitous Language.

**Rule:** Only use a German name if the term appears in [DDD_GLOSSARY.md](DDD_GLOSSARY.md). Use English for everything else.

- `Rechnung` is in the glossary → use `Rechnung`
- "invoice line", "tax year", "amount" are not in the glossary → use English

**Bad:** `HinzufuegenRechnung` — "Hinzufuegen" is not in the glossary → `AddRechnung`
**Bad:** `HoleRechnungenFuerSteuerjahr` — "Hole", "Fuer", "Steuerjahr" are not in the glossary → `GetRechnungen`

To add a new domain term to the glossary, use the `/ddd-glossary` skill.
