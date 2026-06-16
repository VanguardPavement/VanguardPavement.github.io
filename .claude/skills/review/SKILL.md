---
name: review
version: 2.0.0
description: >
  Review a pull request end-to-end: purpose, correctness, design, and test coverage.
  Fire when the user says "review PR #N", "review this PR", "look at this PR",
  "is this ready to merge", "LGTM?", or shares a GitHub PR URL with a review request.
  Do NOT fire for: user pastes a local diff for feedback (use /code-review),
  security-only audits (use /security-review), or explaining what changed without
  a review ask ("what does this PR do?").
---

## Trigger

Fire on:
- "review PR #N", "review this PR", "check this PR", "can you review this?"
- "is this ready to merge", "LGTM?", "give me your thoughts on this PR"
- User shares a GitHub PR URL and asks for a review

Do NOT fire on:
- User pastes a diff inline and asks what you think → use `/code-review`
- User asks "what changed in this PR?" with no review request → read and summarize, no verdict
- User asks for a security audit specifically → use `/security-review`

---

## Workflow

### 1. Identify the PR

If no PR number or URL is provided, ask: "Which PR should I review? Share the number or URL."

Fetch the PR with `mcp__github__pull_request_read`. Read:
- Title and description
- Diff (all changed files)
- Commit messages
- Any linked issues mentioned in the description

### 2. Assess across five dimensions

| Dimension | What to check |
|---|---|
| **Purpose** | Does the PR do what the title/description claims? Is scope appropriate — not too large, not missing stated goals? |
| **Correctness** | Logic errors, missed edge cases, broken error handling, off-by-one, race conditions |
| **Design** | Does the approach fit the codebase's existing patterns? Over-engineering? Leaky abstractions? |
| **Tests** | Are new or changed behaviors covered? Are existing tests broken or missing? |
| **Hygiene** | Debug statements left in, dead code, misleading names, missing docs on public APIs |

### 3. Output format

```
## PR Review: [title] (#N)

**Verdict:** ✅ Approve / ⚠️ Request Changes / 💬 Comment Only

**Summary**
1–2 sentences: what this PR does and whether it achieves its stated goal.

**Findings**
- [BLOCKER] Description — must fix before merge
- [SUGGESTION] Description — worth discussing, not a hard requirement
- [NIT] Description — minor, author's call

**Test coverage:** adequate | missing for [X] | not applicable because [Y]

**Merge when:** [specific condition to clear, or "ready now"]
```

**Label guide:**
- `BLOCKER` — correctness bugs, broken tests, security issues, data loss risk
- `SUGGESTION` — design concerns, approach alternatives, missing edge case worth discussing
- `NIT` — style, naming, minor cleanup; never block on these alone

If there are no findings in a category, omit it. Do not pad with "looks good" filler lines.

### 4. Posting the review

- Output the review in chat by default.
- Only post to GitHub if the user explicitly says "post it", "leave a comment", "submit the review", or similar.
- When posting, use `mcp__github__pull_request_review_write`.
- Never post automatically without explicit confirmation.
