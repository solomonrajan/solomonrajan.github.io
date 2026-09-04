---
name: Changelog Auto-Update
description: Automatically update the changelog after any file modifications.
---

# Changelog Auto-Update Rule

Whenever you (the AI) make any structural, stylistic, or content modifications to this website, you **MUST** automatically add a new entry to the changelog. 

**Instructions:**
1. At the end of your task, open `d:\Website\assets\js\changelog.js`.
2. Determine the next logical version number (e.g., if the latest is `v2.64.0`, use `v2.65.0`).
3. Insert a properly formatted Material 3 changelog HTML block at the top of the `.changelog-timeline` container.
4. Use a descriptive Material Symbols icon, the correct tag (e.g., `changelog-tag--feat`, `changelog-tag--style`), and write a highly professional, detailed description of your changes.
5. Do this proactively without waiting for the user to ask.
