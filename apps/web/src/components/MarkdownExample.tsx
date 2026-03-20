import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { components } from 'pd-markdown-ui'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, ScrollArea } from 'pd-shad-ui'

const SAMPLE_MARKDOWN = `
# Markdown UI Showcase

This is a demonstration of the \`pd-markdown-ui\` components integrated with \`react-markdown\`.

## Typography

You can use standard markdown syntax for:
- **Bold text** and *italicized text*.
- [Links to other sites](https://google.com)
- Inline \`code snippets\`

### Blockquotes
> "The best way to predict the future is to invent it."
> — Alan Kay

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

function greet(user: User) {
  console.log(\`Hello, \${user.name}!\`);
}
\`\`\`

## Tables

| Feature | Status | Description |
| :--- | :---: | :--- |
| SEO Support | ✅ | Built with semantic HTML |
| Visual Consistency | ✅ | Uses pd-shad-ui theme |
| Customization | ✅ | Supports custom classNames |
| GFM Support | ✅ | Tables, task lists, etc. |

## Task Lists
- [x] Integrate components
- [x] Add showcase page
- [ ] Add more themes
`

export function MarkdownExample() {
  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Markdown Rendering Example</CardTitle>
        <CardDescription>
          Using <code>pd-markdown-ui</code> with <code>react-markdown</code> and <code>remark-gfm</code>.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] w-full rounded-md border p-6">
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]} 
            components={components}
          >
            {SAMPLE_MARKDOWN}
          </ReactMarkdown>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
