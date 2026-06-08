# E-Commerce Domain Boundary

This project covers the **e-commerce domain**: the business processes around selling and delivering goods to customers.

## In scope — use German domain terms

Core domain concepts that belong in the glossary and appear as German class or method names:

- Orders and their lifecycle: `Auftrag`, `Bestellung`
- Customers and their data: `Kunde`
- Products and catalogue: `Artikel`, `Produkt`
- Delivery and fulfilment: `Lieferung`
- Billing: `Rechnung`, `Rechnungsposition`

## Out of scope — use English

Concepts from adjacent systems do not belong in the domain model. Use English for these:

- Tax and accounting: `TaxDeclaration`, `AccountingEntry`
- External logistics systems
- Payment infrastructure: `PaymentGateway`, `Transaction`

## Naming rules

Only **domain nouns** that represent core concepts become German. Everything else stays English:

| Type | Rule | Example |
|------|------|---------|
| Domain noun | German | `Rechnung`, `Kunde` |
| Preposition | English | `For`, not `Fuer` |
| Generic word | English | `Amount`, `Date`, `Status` |
| Technical verb | English | `Get`, `Send`, `Sort` |

**Bad:** `GetRechnungenFuerSteuererklarung` — "Fuer" is a preposition, "Steuererklarung" is out of scope
**Good:** `GetRechnungen` — focused on the domain concept only, context provided by the calling layer
