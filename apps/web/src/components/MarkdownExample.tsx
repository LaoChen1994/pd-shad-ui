import ReactMarkdown from 'react-markdown'
import { components, defaultMarkdownPlugins } from 'pd-markdown-ui'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, ScrollArea } from 'pd-shad-ui'
import 'katex/dist/katex.min.css'

const SAMPLE_MARKDOWN = `
# Markdown UI Showcase

This is a demonstration of the \`pd-markdown-ui\` components with **Shiki** syntax highlighting.

## Typography

You can use standard markdown syntax for:
- **Bold text** and *italicized text*.
- [Links to other sites](https://google.com)
- Inline \`code snippets\`

### Blockquotes
> "The best way to predict the future is to invent it."
> — Alan Kay

## Math Support

Here is an inline equation: $E=mc^2$.

And a block equation:

$$
\\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}
$$

## Lists

### Unordered
- Item 1
- Item 2
  - Nested item A
  - Nested item B

### Ordered
1. First step
2. Second step
3. Third step

## Code Blocks

\`\`\`typescript
interface User {
  id: string;
  name: string;
  email: string;
}

/**
 * Greets the user with their name.
 * @param user The user object
 */
function greet(user: User) {
  console.log(\`Hello, \${user.name}!\`);
}

const me: User = { id: '1', name: 'Gemini', email: 'ai@google.com' };
greet(me);
\`\`\`

\`\`\`bash
# Install dependencies
pnpm install
# Start development server
pnpm dev
\`\`\`

## Tables

| Feature | Status | Description |
| :--- | :---: | :--- |
| SEO Support | ✅ | Built with semantic HTML |
| Visual Consistency | ✅ | Uses pd-shad-ui theme |
| Customization | ✅ | Supports custom classNames |
| GFM Support | ✅ | Tables, task lists, etc. |
| Syntax Highlighting | ✅ | Powered by Shiki |

## Task Lists
- [x] Integrate components
- [x] Add showcase page
- [x] Add Shiki syntax highlighting
- [x] Add Math support
`

export function MarkdownExample() {
  return (
    <Card className="pd-w-full pd-max-w-4xl pd-mx-auto">
      <CardHeader>
        <CardTitle>Markdown Rendering Example</CardTitle>
        <CardDescription>
          Using <code>pd-markdown-ui</code> with <code>react-markdown</code>, <code>shiki</code>, and <code>remark-math</code>.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="pd-h-[600px] pd-w-full pd-rounded-md pd-border pd-p-6">
          <ReactMarkdown 
            remarkPlugins={defaultMarkdownPlugins.remark}
            rehypePlugins={defaultMarkdownPlugins.rehype}
            components={components}
          >
            {SAMPLE_MARKDOWN}
          </ReactMarkdown>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
