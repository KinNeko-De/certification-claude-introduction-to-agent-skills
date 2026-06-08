# Intention Behind the DDD Glossary

This project applies Domain-Driven Design (DDD). A central DDD concept is the **Ubiquitous Language**: a shared vocabulary used consistently by both domain experts and developers, in conversations, documentation, and code. Using a single language eliminates translation errors between what the business means and what the code does.

In this project, the business speaks german. The terms from business domain, defined as Ubiquitous Language, are in german. Class names, method names, and module names can be written in German, because that is the language the domain experts and the development team use together. Technical methods can be written only in english

Example: the class `Auftrag` represents an order, `Kunde` represents a customer.
Example: the class `Language` is the language of the customer. It has  no realation to the business domain. This is why it is written in english.
Example: the method `SortByAutragsID` sorts a orders by their identification, 
Example: the method `SendRequest` send a http request and has no realation to the business domain.  This is why it is written in english.

However, AI tools are trained predominantly on English text and struggle to predict or understand German class names without context.

The `DDD_GLOSSARY.md` was created to bridge this gap. By providing a mapping from German domain terms to their English equivalents and a short description, AI tools can:

- Predict German class and method names correctly when generating code
- Understand the domain meaning behind a class when explaining or reviewing code
- Suggest names consistent with the existing domain language

The glossary is a communication contract between the development team and the AI tools they use.
