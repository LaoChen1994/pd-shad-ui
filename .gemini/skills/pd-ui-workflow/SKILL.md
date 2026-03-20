---
name: pd-ui-workflow
description: Specialized workflows for pd-ui monorepo, including creating UI components with pd- standards, updating markdown-ui with Shiki, and executing the full release process.
---

# PD-UI Workflow Skill

This skill provides expert procedures for the `pd-ui` monorepo.

## UI Component Workflow (The pd- Way)
When adding a new UI component to `pd-shad-ui`:
1.  **Creation**: Create the component in `packages/ui/src/components/ui/<name>.tsx`.
2.  **Alias Guard**: Ensure all internal utility imports use `pd-shad-ui/lib/utils` (NOT `../../`).
3.  **Prefix Guard**: Ensure all Tailwind classes start with `pd-`.
4.  **Export**: Export it from `packages/ui/src/index.ts`.
5.  **Build Validation**: Run `pnpm --filter pd-shad-ui build` to verify alias and types.

## Markdown Component Workflow
When modifying `pd-markdown-ui`:
1.  **Shiki Highlighting**: New code components should utilize the global Shiki highlighter in `code.tsx`.
2.  **Plugin Usage**: Test rendering using `defaultMarkdownPlugins` from the entry file.
3.  **Testing**: Verify rendering in `apps/web/src/components/MarkdownExample.tsx`.

## Release Workflow (Automated)
Trigger this when the user says "publish" or "release":
1.  **Version Update**: Run `pnpm changeset version` followed by `pnpm install`.
2.  **Full Build**: Run `pnpm build` to ensure cross-package alias resolution works.
3.  **Publish**: Run `pnpm release:ui` (which includes tests and npm publish).
4.  **Git Sync**:
    *   `git add . && git commit -m "chore: version bump <version>"`
    *   `git push origin main --tags`

## General Rules
- Always use `pnpm` for package management.
- Never use relative paths for internal package utilities.
- Maintain consistent prefixing for all CSS classes.
