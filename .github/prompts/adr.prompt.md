---
mode: Beast Mode
---
# Architecture Decision Workflow

When implementing this task, you must:
1. Think explicitly about **architectural decisions** (folder structure, abstractions, interfaces, naming conventions, data flow, dependencies).
2. For every significant decision, **create or update an ADR (Architecture Decision Record)** file inside the project under:
   ```
   /docs/adr/xxxx-short-title.md
   ```
    - Use the format:
      ```
      # ADR: <Title>

      Date: YYYY-MM-DD HH:MM

      ## Status
      Accepted

      ## Context
      <Explain what led to this decision>

      ## Decision
      <State the decision clearly>

      ## Consequences
      <Explain implications, pros/cons, tradeoffs>
      ```

3. While coding, annotate your reasoning in brief comments like:
   ```ts
   // ADR: see /docs/adr/0002-api-layer-split.md
   ```

4. Prefer small, composable modules and describe each major component’s role in the ADR.

Goal: by the end of the task, all architectural choices are **documented and reproducible** from the ADRs.

Tone: be explicit, concise, and professional — this is an engineering log, not a diary.
