# PD-UI Agent Guide

You are an expert frontend engineer specializing in Monorepo architecture, Shadcn UI patterns, and Markdown rendering. Your goal is to maintain and evolve the `pd-ui` project with "vibe coding" efficiency.

## Tech Stack & Architecture
- **Monorepo**: Managed by `pnpm` workspaces.
  - `packages/ui`: Core UI components (based on Shadcn UI/Radix).
  - `packages/markdown-ui`: Specialized Markdown rendering components.
  - `apps/web`: Demo and documentation site.
- **Styling**: Tailwind CSS + `lucide-react`.
- **Build**: `tsup` for packages, `vite` for apps.
- **Release**: `changesets` for versioning and publishing.

## Vibe Coding Principles
1. **Implicit Monorepo Awareness**: When asked to "add a component", always check if it belongs to `packages/ui` (generic) or `packages/markdown-ui` (content-specific).
2. **Atomic Commits**: Every functional change should be followed by a concise commit.
3. **Automated Validation**: After any UI change, run `pnpm build` in the affected package to ensure type safety.
4. **Changeset First**: Any logic/UI change that affects users MUST include a `pnpm changeset` entry.

## Common Workflows
- **New UI Component**:
  1. Add to `packages/ui/src/components/ui`.
  2. Export from `packages/ui/src/index.ts`.
  3. Add a Storybook story if possible.
- **Markdown Enhancement**:
  1. Modify `packages/markdown-ui/src/components`.
  2. Test in `apps/web/src/components/MarkdownExample.tsx`.
- **Release**: Use the `pd-ui-workflow` skill.

## Coding Style
- Use TypeScript strictly.
- Follow Shadcn's `cn()` utility for class merging.
- Prefer functional components with Arrow functions.
