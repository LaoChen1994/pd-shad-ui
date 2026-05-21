import * as React from "react"
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Input,
  Progress,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Slider,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Textarea,
  Toaster,
  cn,
} from "pd-shad-ui"
import {
  CheckCircle2,
  Code2,
  FileCode2,
  FileText,
  Github,
  Layers3,
  Moon,
  Package,
  PanelLeft,
  SlidersHorizontal,
  Sun,
  Table2,
  TextCursorInput,
  Type,
} from "lucide-react"

const MarkdownDemo = React.lazy(() =>
  import("./components/MarkdownDemo").then((module) => ({
    default: module.MarkdownDemo,
  }))
)

function App() {
  const [isDark, setIsDark] = React.useState(false)
  const [route, setRoute] = React.useState(() => {
    const hash = window.location.hash.replace("#", "")

    if (
      hash === "pd-shad-ui/button" ||
      hash === "pd-shad-ui/input" ||
      hash === "pd-shad-ui/selection" ||
      hash === "pd-shad-ui/data-display" ||
      hash === "pd-markdown-ui/typography" ||
      hash === "pd-markdown-ui/code" ||
      hash === "pd-markdown-ui/table" ||
      hash === "pd-markdown-ui/math"
    ) {
      return hash
    }

    return "pd-shad-ui/button"
  })

  const selectedPackage = route.startsWith("pd-markdown-ui") ? "pd-markdown-ui" : "pd-shad-ui"

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  React.useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "")

      if (
        hash === "pd-shad-ui/button" ||
        hash === "pd-shad-ui/input" ||
        hash === "pd-shad-ui/selection" ||
        hash === "pd-shad-ui/data-display" ||
        hash === "pd-markdown-ui/typography" ||
        hash === "pd-markdown-ui/code" ||
        hash === "pd-markdown-ui/table" ||
        hash === "pd-markdown-ui/math"
      ) {
        setRoute(hash)
      }
    }

    if (!window.location.hash) {
      window.history.replaceState(null, "", "#pd-shad-ui/button")
    }

    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  return (
    <div className="pd-min-h-screen pd-bg-background pd-text-foreground">
      <Toaster />
      <header className="pd-sticky pd-top-0 pd-z-40 pd-border-b pd-bg-background/95 pd-backdrop-blur">
        <div className="pd-flex pd-h-16 pd-items-center pd-justify-between pd-gap-4 pd-px-4 lg:pd-px-8">
          <div className="pd-flex pd-min-w-0 pd-items-center pd-gap-3">
            <div className="pd-flex pd-h-9 pd-w-9 pd-shrink-0 pd-items-center pd-justify-center pd-rounded-md pd-border pd-bg-card">
              <Package className="pd-h-5 pd-w-5" aria-hidden="true" />
            </div>
            <div className="pd-min-w-0">
              <p className="pd-text-xs pd-font-medium pd-text-muted-foreground">pd-ui</p>
              <h1 className="pd-truncate pd-text-base pd-font-semibold">组件库展示</h1>
            </div>
          </div>
          <div className="pd-flex pd-items-center pd-gap-2">
            <Button variant="outline" size="sm" asChild>
              <a href="https://github.com/LaoChen1994/pd-shad-ui" target="_blank" rel="noreferrer">
                <Github className="pd-mr-2 pd-h-4 pd-w-4" aria-hidden="true" />
                GitHub
              </a>
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setIsDark(!isDark)}>
              {isDark ? (
                <Sun className="pd-mr-2 pd-h-4 pd-w-4" aria-hidden="true" />
              ) : (
                <Moon className="pd-mr-2 pd-h-4 pd-w-4" aria-hidden="true" />
              )}
              {isDark ? "浅色" : "深色"}
            </Button>
          </div>
        </div>
      </header>

      <div className="pd-grid lg:pd-grid-cols-[17rem_1fr]">
        <aside className="pd-border-b pd-bg-background lg:pd-sticky lg:pd-top-16 lg:pd-h-[calc(100vh-4rem)] lg:pd-border-b-0 lg:pd-border-r">
          <nav className="pd-space-y-6 pd-p-4 lg:pd-p-6">
            <div className="pd-space-y-2">
              <p className="pd-text-xs pd-font-medium pd-uppercase pd-text-muted-foreground">Packages</p>
              <div className="pd-grid pd-grid-cols-2 pd-gap-2 lg:pd-grid-cols-1">
                <a
                  className={cn(
                    "pd-flex pd-items-center pd-gap-2 pd-rounded-md pd-border pd-px-3 pd-py-2 pd-text-sm pd-font-medium pd-transition-colors hover:pd-bg-accent hover:pd-text-accent-foreground",
                    selectedPackage === "pd-shad-ui" && "pd-bg-primary pd-text-primary-foreground hover:pd-bg-primary"
                  )}
                  href="#pd-shad-ui/button"
                >
                  <Code2 className="pd-h-4 pd-w-4" aria-hidden="true" />
                  pd-shad-ui
                </a>
                <a
                  className={cn(
                    "pd-flex pd-items-center pd-gap-2 pd-rounded-md pd-border pd-px-3 pd-py-2 pd-text-sm pd-font-medium pd-transition-colors hover:pd-bg-accent hover:pd-text-accent-foreground",
                    selectedPackage === "pd-markdown-ui" &&
                      "pd-bg-primary pd-text-primary-foreground hover:pd-bg-primary"
                  )}
                  href="#pd-markdown-ui/typography"
                >
                  <FileText className="pd-h-4 pd-w-4" aria-hidden="true" />
                  pd-markdown-ui
                </a>
              </div>
            </div>

            <Separator />

            {selectedPackage === "pd-shad-ui" ? (
              <div className="pd-space-y-2">
                <p className="pd-text-xs pd-font-medium pd-uppercase pd-text-muted-foreground">Components</p>
                <div className="pd-grid pd-gap-1">
                  <a
                    className={cn(
                      "pd-flex pd-items-center pd-gap-2 pd-rounded-md pd-px-3 pd-py-2 pd-text-sm pd-text-muted-foreground hover:pd-bg-accent hover:pd-text-accent-foreground",
                      route === "pd-shad-ui/button" && "pd-bg-accent pd-font-medium pd-text-accent-foreground"
                    )}
                    href="#pd-shad-ui/button"
                  >
                    <PanelLeft className="pd-h-4 pd-w-4" aria-hidden="true" />
                    Button
                  </a>
                  <a
                    className={cn(
                      "pd-flex pd-items-center pd-gap-2 pd-rounded-md pd-px-3 pd-py-2 pd-text-sm pd-text-muted-foreground hover:pd-bg-accent hover:pd-text-accent-foreground",
                      route === "pd-shad-ui/input" && "pd-bg-accent pd-font-medium pd-text-accent-foreground"
                    )}
                    href="#pd-shad-ui/input"
                  >
                    <TextCursorInput className="pd-h-4 pd-w-4" aria-hidden="true" />
                    Input
                  </a>
                  <a
                    className={cn(
                      "pd-flex pd-items-center pd-gap-2 pd-rounded-md pd-px-3 pd-py-2 pd-text-sm pd-text-muted-foreground hover:pd-bg-accent hover:pd-text-accent-foreground",
                      route === "pd-shad-ui/selection" && "pd-bg-accent pd-font-medium pd-text-accent-foreground"
                    )}
                    href="#pd-shad-ui/selection"
                  >
                    <SlidersHorizontal className="pd-h-4 pd-w-4" aria-hidden="true" />
                    Selection
                  </a>
                  <a
                    className={cn(
                      "pd-flex pd-items-center pd-gap-2 pd-rounded-md pd-px-3 pd-py-2 pd-text-sm pd-text-muted-foreground hover:pd-bg-accent hover:pd-text-accent-foreground",
                      route === "pd-shad-ui/data-display" && "pd-bg-accent pd-font-medium pd-text-accent-foreground"
                    )}
                    href="#pd-shad-ui/data-display"
                  >
                    <Table2 className="pd-h-4 pd-w-4" aria-hidden="true" />
                    Data Display
                  </a>
                </div>
              </div>
            ) : (
              <div className="pd-space-y-2">
                <p className="pd-text-xs pd-font-medium pd-uppercase pd-text-muted-foreground">Markdown</p>
                <div className="pd-grid pd-gap-1">
                  <a
                    className={cn(
                      "pd-flex pd-items-center pd-gap-2 pd-rounded-md pd-px-3 pd-py-2 pd-text-sm pd-text-muted-foreground hover:pd-bg-accent hover:pd-text-accent-foreground",
                      route === "pd-markdown-ui/typography" && "pd-bg-accent pd-font-medium pd-text-accent-foreground"
                    )}
                    href="#pd-markdown-ui/typography"
                  >
                    <Type className="pd-h-4 pd-w-4" aria-hidden="true" />
                    Typography
                  </a>
                  <a
                    className={cn(
                      "pd-flex pd-items-center pd-gap-2 pd-rounded-md pd-px-3 pd-py-2 pd-text-sm pd-text-muted-foreground hover:pd-bg-accent hover:pd-text-accent-foreground",
                      route === "pd-markdown-ui/code" && "pd-bg-accent pd-font-medium pd-text-accent-foreground"
                    )}
                    href="#pd-markdown-ui/code"
                  >
                    <FileCode2 className="pd-h-4 pd-w-4" aria-hidden="true" />
                    Code
                  </a>
                  <a
                    className={cn(
                      "pd-flex pd-items-center pd-gap-2 pd-rounded-md pd-px-3 pd-py-2 pd-text-sm pd-text-muted-foreground hover:pd-bg-accent hover:pd-text-accent-foreground",
                      route === "pd-markdown-ui/table" && "pd-bg-accent pd-font-medium pd-text-accent-foreground"
                    )}
                    href="#pd-markdown-ui/table"
                  >
                    <Table2 className="pd-h-4 pd-w-4" aria-hidden="true" />
                    Table
                  </a>
                  <a
                    className={cn(
                      "pd-flex pd-items-center pd-gap-2 pd-rounded-md pd-px-3 pd-py-2 pd-text-sm pd-text-muted-foreground hover:pd-bg-accent hover:pd-text-accent-foreground",
                      route === "pd-markdown-ui/math" && "pd-bg-accent pd-font-medium pd-text-accent-foreground"
                    )}
                    href="#pd-markdown-ui/math"
                  >
                    <Layers3 className="pd-h-4 pd-w-4" aria-hidden="true" />
                    Math
                  </a>
                </div>
              </div>
            )}
          </nav>
        </aside>

        <main className="pd-min-w-0 pd-px-4 pd-py-8 md:pd-px-8 lg:pd-px-10">
          <div className="pd-mx-auto pd-w-full pd-max-w-5xl pd-space-y-8">
            <div className="pd-flex pd-flex-col pd-gap-4 md:pd-flex-row md:pd-items-start md:pd-justify-between">
              <div className="pd-space-y-2">
                <Badge variant="outline">{selectedPackage}</Badge>
                <h2 className="pd-text-3xl pd-font-bold pd-tracking-normal md:pd-text-4xl">
                  {route === "pd-shad-ui/button" && "Button"}
                  {route === "pd-shad-ui/input" && "Input"}
                  {route === "pd-shad-ui/selection" && "Selection"}
                  {route === "pd-shad-ui/data-display" && "Data Display"}
                  {route === "pd-markdown-ui/typography" && "Typography"}
                  {route === "pd-markdown-ui/code" && "Code"}
                  {route === "pd-markdown-ui/table" && "Table"}
                  {route === "pd-markdown-ui/math" && "Math"}
                </h2>
                <p className="pd-max-w-2xl pd-text-base pd-leading-7 pd-text-muted-foreground">
                  {route === "pd-shad-ui/button" && "展示按钮、标签和基础反馈状态，覆盖常见操作入口。"}
                  {route === "pd-shad-ui/input" && "展示输入框、文本域和组合表单布局。"}
                  {route === "pd-shad-ui/selection" && "展示选择、开关、复选和滑块等交互控件。"}
                  {route === "pd-shad-ui/data-display" && "展示表格、进度和状态徽标等数据呈现组件。"}
                  {route === "pd-markdown-ui/typography" && "展示 Markdown 标题、段落、列表、引用和链接渲染效果。"}
                  {route === "pd-markdown-ui/code" && "展示 Shiki 代码块、行内代码和命令片段。"}
                  {route === "pd-markdown-ui/table" && "展示 GFM 表格与任务列表。"}
                  {route === "pd-markdown-ui/math" && "展示 remark-math 与 KaTeX 数学公式渲染。"}
                </p>
              </div>
              <div className="pd-flex pd-items-center pd-gap-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="https://www.npmjs.com/package/pd-shad-ui" target="_blank" rel="noreferrer">
                    npm
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <a href="https://github.com/LaoChen1994/pd-shad-ui" target="_blank" rel="noreferrer">
                    Source
                  </a>
                </Button>
              </div>
            </div>

            <Separator />

            {route === "pd-shad-ui/button" && (
              <div className="pd-space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Preview</CardTitle>
                    <CardDescription>按钮变体、尺寸和状态。</CardDescription>
                  </CardHeader>
                  <CardContent className="pd-space-y-6">
                    <div className="pd-flex pd-flex-wrap pd-gap-3">
                      <Button>Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                      <Button variant="destructive">Destructive</Button>
                    </div>
                    <div className="pd-flex pd-flex-wrap pd-gap-2">
                      <Badge>stable</Badge>
                      <Badge variant="secondary">workspace</Badge>
                      <Badge variant="outline">react</Badge>
                      <Badge variant="destructive">breaking</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Usage</CardTitle>
                    <CardDescription>常用导入和调用方式。</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <pre className="pd-overflow-x-auto pd-rounded-md pd-bg-muted pd-p-4 pd-text-sm">
                      <code>{`import { Button } from "pd-shad-ui"\n\n<Button variant="outline">Open</Button>`}</code>
                    </pre>
                  </CardContent>
                </Card>
              </div>
            )}

            {route === "pd-shad-ui/input" && (
              <Card>
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                  <CardDescription>紧凑表单布局。</CardDescription>
                </CardHeader>
                <CardContent className="pd-grid pd-gap-5 md:pd-grid-cols-2">
                  <div className="pd-space-y-2">
                    <label className="pd-text-sm pd-font-medium" htmlFor="project-name">
                      Project name
                    </label>
                    <Input id="project-name" defaultValue="pd-ui showcase" />
                  </div>
                  <div className="pd-space-y-2">
                    <label className="pd-text-sm pd-font-medium" htmlFor="package-name">
                      Package
                    </label>
                    <Input id="package-name" defaultValue="pd-shad-ui" />
                  </div>
                  <div className="pd-space-y-2 md:pd-col-span-2">
                    <label className="pd-text-sm pd-font-medium" htmlFor="release-note">
                      Release note
                    </label>
                    <Textarea id="release-note" defaultValue="Add a GitHub Pages showcase for component demos." />
                  </div>
                </CardContent>
              </Card>
            )}

            {route === "pd-shad-ui/selection" && (
              <div className="pd-grid pd-gap-6 md:pd-grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Controls</CardTitle>
                    <CardDescription>选择、开关和复选控件。</CardDescription>
                  </CardHeader>
                  <CardContent className="pd-space-y-5">
                    <Select defaultValue="react">
                      <SelectTrigger aria-label="Framework">
                        <SelectValue placeholder="Select framework" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="react">React</SelectItem>
                        <SelectItem value="vue">Vue</SelectItem>
                      </SelectContent>
                    </Select>
                    <div className="pd-flex pd-items-center pd-justify-between pd-rounded-md pd-border pd-p-3">
                      <div>
                        <p className="pd-text-sm pd-font-medium">Dark mode</p>
                        <p className="pd-text-sm pd-text-muted-foreground">同步切换页面主题。</p>
                      </div>
                      <Switch checked={isDark} onCheckedChange={setIsDark} aria-label="切换暗色主题" />
                    </div>
                    <div className="pd-flex pd-items-center pd-gap-2">
                      <Checkbox id="pages-ready" defaultChecked />
                      <label className="pd-text-sm pd-font-medium" htmlFor="pages-ready">
                        GitHub Pages ready
                      </label>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Slider</CardTitle>
                    <CardDescription>数值型控制适合展示配置密度。</CardDescription>
                  </CardHeader>
                  <CardContent className="pd-space-y-4">
                    <div className="pd-flex pd-items-center pd-justify-between pd-text-sm">
                      <span className="pd-text-muted-foreground">Display density</span>
                      <span className="pd-font-medium">72%</span>
                    </div>
                    <Slider defaultValue={[72]} max={100} step={1} aria-label="展示密度" />
                    <Progress value={72} />
                  </CardContent>
                </Card>
              </div>
            )}

            {route === "pd-shad-ui/data-display" && (
              <Card>
                <CardHeader>
                  <CardTitle>Preview</CardTitle>
                  <CardDescription>包能力矩阵和发布状态。</CardDescription>
                </CardHeader>
                <CardContent className="pd-space-y-5">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Package</TableHead>
                        <TableHead>Scope</TableHead>
                        <TableHead>Status</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="pd-font-medium">pd-shad-ui</TableCell>
                        <TableCell>Buttons, forms, overlays, data display</TableCell>
                        <TableCell>
                          <Badge variant="secondary">showcase</Badge>
                        </TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell className="pd-font-medium">pd-markdown-ui</TableCell>
                        <TableCell>GFM, math, code blocks, tables</TableCell>
                        <TableCell>
                          <Badge variant="secondary">showcase</Badge>
                        </TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                  <div className="pd-space-y-2">
                    <div className="pd-flex pd-items-center pd-justify-between pd-text-sm">
                      <span className="pd-text-muted-foreground">Component coverage</span>
                      <span className="pd-font-medium">2 packages</span>
                    </div>
                    <Progress value={100} />
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedPackage === "pd-markdown-ui" && (
              <React.Suspense
                fallback={
                  <Card>
                    <CardHeader>
                      <CardTitle>Preview</CardTitle>
                      <CardDescription>正在加载 Markdown 展示内容。</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="pd-h-80 pd-rounded-md pd-border pd-bg-muted/30" />
                    </CardContent>
                  </Card>
                }
              >
                {route === "pd-markdown-ui/typography" && (
                  <MarkdownDemo
                    content={`# Markdown UI\n\nA focused preview for **headings**, paragraphs, lists, links, and blockquotes.\n\n## Typography\n\nUse pd-markdown-ui with [react-markdown](https://github.com/remarkjs/react-markdown) and the exported component map.\n\n- Semantic headings\n- Styled paragraphs\n- Nested list support\n\n> Documentation pages should stay readable, dense, and consistent with pd-shad-ui.`}
                  />
                )}
                {route === "pd-markdown-ui/code" && (
                  <MarkdownDemo
                    content={`## Code blocks\n\nInline code uses \`pd-markdown-ui\` styles.\n\n\`\`\`tsx\nimport ReactMarkdown from "react-markdown";\nimport { components, defaultMarkdownPlugins } from "pd-markdown-ui";\n\nexport function Preview({ content }: { content: string }) {\n  return (\n    <ReactMarkdown\n      remarkPlugins={defaultMarkdownPlugins.remark}\n      rehypePlugins={defaultMarkdownPlugins.rehype}\n      components={components}\n    >\n      {content}\n    </ReactMarkdown>\n  );\n}\n\`\`\`\n\n\`\`\`bash\npnpm --filter pd-markdown-ui run test\npnpm --filter pd-web-demo run build\n\`\`\``}
                  />
                )}
                {route === "pd-markdown-ui/table" && (
                  <MarkdownDemo
                    content={`## GFM table\n\n| Feature | Package | Status |\n| :--- | :--- | :---: |\n| Buttons | pd-shad-ui | ✅ |\n| Markdown components | pd-markdown-ui | ✅ |\n| GitHub Pages | pd-web-demo | ✅ |\n\n## Task list\n\n- [x] Add package switch navigation\n- [x] Add component demo routes\n- [x] Keep Tailwind prefix isolated`}
                  />
                )}
                {route === "pd-markdown-ui/math" && (
                  <MarkdownDemo
                    content={`## Math support\n\nInline equation: $E=mc^2$.\n\nBlock equation:\n\n$$\n\\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}\n$$\n\nKaTeX styles are loaded with the markdown preview component.`}
                  />
                )}
              </React.Suspense>
            )}

            <div className="pd-flex pd-items-center pd-gap-2 pd-rounded-md pd-border pd-bg-muted/30 pd-p-3 pd-text-sm pd-text-muted-foreground">
              <CheckCircle2 className="pd-h-4 pd-w-4 pd-text-foreground" aria-hidden="true" />
              GitHub Pages 构建会使用当前仓库名作为 Vite base，发布后可直接访问展示站。
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
