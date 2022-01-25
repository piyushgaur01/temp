# Coding Guidelines & Conventions

## Foreword

Our goal should always be to make code *less intimidating* for fellow developers. A well indented and well documented code makes it easier to address a **bug** or implement a **new feature**, which in turn means higher productivity.

There are several techniques and guidelines to prevent **technical debt** and improve **code quality**.

### When architecting
think of ...
- **sustainability**
- **maintainability**
- **scalability**

### When designing
- create **reusable** code
- try to apply [SOLID](https://dev.to/galwaycoder/the-solid-principles-in-software-design-explained-53n) & [DRY](https://dev.to/fluffynuts/keeping-dry-44p8) principles
- think **object oriented**

### When coding
- **smaller is more manageable** break down long files into small modules
- continuously **refactor** as you stumble upon code that can be improved or simplified
- improve **readability** by following *coding guidelines*, *indent* and *break up* long lines of code
- follow **taxonomy** and **terminology**
- avoid long variable names by **agglutination** of words, often they can be simplified
- remove **noisy code** *e.g. unnecessary/irrelevant comments*
- remove **dead code** *i.e. unreachable code*
- factorise **duplicated code**
- resolve library **deprecations**


### When documenting 
- draw **entity relationships** diagram with [nomnoml](http://www.nomnoml.com/)
- draw **sequence diagrams** diagram with [mermaid](https://mermaidjs.github.io/#/) [mermaid live editor](https://mermaidjs.github.io/mermaid-live-editor)
- add inline comments


### Naming / Renaming

Avoid terms that are too abstract e.g. `data`, `object`, `response`, `item`, `xmlData`, `xmlObject`
Instead be specific of what they are.

### Functions

doSomething(object)

### Booleans

- **is**Adjective e.g. `isValid`
- **can**Verb e.g. `canView`
- **has**Object e.g. `hasFirstname`

also works for functions that return a boolean. e.g. `user.canView(calendar)` `user.hasFirstname()`

## Readability

- Split
- Indent
- Factorize