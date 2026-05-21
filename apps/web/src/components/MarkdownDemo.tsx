import ReactMarkdown from "react-markdown"
import { components, defaultMarkdownPlugins } from "pd-markdown-ui"
import { Card, CardContent } from "pd-shad-ui"
import "katex/dist/katex.min.css"

type MarkdownDemoProps = {
  content: string
}

export function MarkdownDemo({ content }: MarkdownDemoProps) {
  return (
    <Card>
      <CardContent className="pd-p-6">
        <ReactMarkdown
          remarkPlugins={defaultMarkdownPlugins.remark}
          rehypePlugins={defaultMarkdownPlugins.rehype}
          components={components}
        >
          {content}
        </ReactMarkdown>
      </CardContent>
    </Card>
  )
}
