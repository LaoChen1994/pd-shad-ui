---
name: pd-ui-workflow
description: Specialized workflows for pd-ui monorepo, including creating UI components, updating markdown-ui, and executing the full release process using changesets.
---

# PD-UI Workflow Skill

This skill provides expert guidance for managing the `pd-ui` monorepo.

## UI Component Workflow
When adding a new UI component to `packages/ui`:
1.  **Creation**: Create the component in `packages/ui/src/components/ui/<component-name>.tsx`.
2.  **Export**: Export it from `packages/ui/src/index.ts`.
3.  **Styles**: Use `cn()` from `@/lib/utils` for class merging.
4.  **Validation**: Run `pnpm --filter pd-shad-ui build` to ensure no build errors.

## Markdown Component Workflow
When modifying `packages/markdown-ui`:
1.  **Component**: Add or modify components in `packages/markdown-ui/src/components`.
2.  **Styling**: Use Tailwind CSS consistently with the core UI package.
3.  **Testing**: Verify changes by running `apps/web` or checking `MarkdownExample.tsx`.

## Release Workflow
Trigger this workflow when the user says "publish", "release", or "bump version":
1.  **Version Update**: Run `pnpm changeset version` followed by `pnpm install`.
2.  **Build**: Run `pnpm --filter "./packages/*" run build` to verify all packages build correctly.
3.  **Check Status**: Verify current Git changes (should show package.json updates and changeset deletion).
4.  **Publish**: Run `pnpm changeset publish`.
5.  **Git Sync**:
    *   Commit changes: `git add . && git commit -m "chore: version bump <version>"`
    *   Push: `git push origin main && git push origin --tags`

## General Rules
- Always use `pnpm` for package management.
- Ensure all packages in the monorepo remain consistent in styling.
- Never skip the `changeset` step for production-ready code.
