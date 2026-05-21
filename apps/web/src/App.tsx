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
  Separator,
  Slider,
  Switch,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Toaster,
} from "pd-shad-ui"
import {
  ArrowRight,
  Code2,
  FileText,
  Github,
  Moon,
  Package,
  Sun,
} from "lucide-react"

const MarkdownExample = React.lazy(() =>
  import("./components/MarkdownExample").then((module) => ({
    default: module.MarkdownExample,
  }))
)

function App() {
  const [isDark, setIsDark] = React.useState(false)

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  return (
    <div className="pd-min-h-screen pd-bg-background pd-text-foreground">
      <Toaster />
      <header className="pd-border-b pd-bg-background/95">
        <div className="pd-mx-auto pd-flex pd-w-full pd-max-w-6xl pd-items-center pd-justify-between pd-gap-4 pd-px-4 pd-py-4 md:pd-px-6">
          <div className="pd-flex pd-items-center pd-gap-3">
            <div className="pd-flex pd-h-10 pd-w-10 pd-items-center pd-justify-center pd-rounded-md pd-border pd-bg-card">
              <Package className="pd-h-5 pd-w-5" aria-hidden="true" />
            </div>
            <div>
              <p className="pd-text-sm pd-font-medium pd-text-muted-foreground">pd-ui</p>
              <h1 className="pd-text-xl pd-font-semibold pd-leading-tight">组件库展示</h1>
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

      <main className="pd-mx-auto pd-w-full pd-max-w-6xl pd-px-4 pd-py-8 md:pd-px-6 md:pd-py-10">
        <section className="pd-grid pd-gap-6 lg:pd-grid-cols-[1fr_22rem]">
          <div className="pd-flex pd-flex-col pd-justify-center pd-gap-5">
            <div className="pd-flex pd-flex-wrap pd-gap-2">
              <Badge variant="secondary">React</Badge>
              <Badge variant="outline">Tailwind prefix: pd-</Badge>
              <Badge variant="outline">GitHub Pages</Badge>
            </div>
            <div className="pd-space-y-3">
              <h2 className="pd-text-4xl pd-font-bold pd-tracking-normal md:pd-text-5xl">
                pd-shad-ui 与 pd-markdown-ui 展示站
              </h2>
              <p className="pd-max-w-2xl pd-text-base pd-leading-7 pd-text-muted-foreground md:pd-text-lg">
                同一个 GitHub Pages 页面展示基础组件和 Markdown 渲染组件，便于发布后快速检查组件包的真实使用效果。
              </p>
            </div>
            <div className="pd-flex pd-flex-wrap pd-gap-3">
              <Button asChild>
                <a href="#showcase">
                  查看组件
                  <ArrowRight className="pd-ml-2 pd-h-4 pd-w-4" aria-hidden="true" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="https://www.npmjs.com/package/pd-shad-ui" target="_blank" rel="noreferrer">
                  npm 包
                </a>
              </Button>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>发布目标</CardTitle>
              <CardDescription>展示站由 GitHub Actions 构建并发布到 Pages。</CardDescription>
            </CardHeader>
            <CardContent className="pd-space-y-5">
              <div className="pd-space-y-2">
                <div className="pd-flex pd-items-center pd-justify-between pd-text-sm">
                  <span className="pd-text-muted-foreground">组件覆盖</span>
                  <span className="pd-font-medium">2 packages</span>
                </div>
                <Progress value={100} />
              </div>
              <Separator />
              <div className="pd-grid pd-grid-cols-2 pd-gap-3 pd-text-sm">
                <div className="pd-rounded-md pd-border pd-p-3">
                  <p className="pd-font-medium">pd-shad-ui</p>
                  <p className="pd-text-muted-foreground">基础交互组件</p>
                </div>
                <div className="pd-rounded-md pd-border pd-p-3">
                  <p className="pd-font-medium">pd-markdown-ui</p>
                  <p className="pd-text-muted-foreground">Markdown 渲染</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section id="showcase" className="pd-pt-10">
          <Tabs defaultValue="shad" className="pd-w-full">
            <div className="pd-flex pd-flex-col pd-gap-4 sm:pd-flex-row sm:pd-items-end sm:pd-justify-between">
              <div>
                <p className="pd-text-sm pd-font-medium pd-text-muted-foreground">Packages</p>
                <h2 className="pd-text-2xl pd-font-semibold pd-tracking-normal">组件预览</h2>
              </div>
              <TabsList className="pd-grid pd-w-full pd-grid-cols-2 sm:pd-w-[22rem]">
                <TabsTrigger value="shad">
                  <Code2 className="pd-mr-2 pd-h-4 pd-w-4" aria-hidden="true" />
                  shad-ui
                </TabsTrigger>
                <TabsTrigger value="markdown">
                  <FileText className="pd-mr-2 pd-h-4 pd-w-4" aria-hidden="true" />
                  markdown-ui
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="shad" className="pd-mt-6">
              <div className="pd-grid pd-gap-4 md:pd-grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Inputs</CardTitle>
                    <CardDescription>表单控件和状态展示。</CardDescription>
                  </CardHeader>
                  <CardContent className="pd-space-y-5">
                    <div className="pd-space-y-2">
                      <label className="pd-text-sm pd-font-medium" htmlFor="project-name">
                        项目名称
                      </label>
                      <Input id="project-name" defaultValue="pd-ui showcase" />
                    </div>
                    <div className="pd-flex pd-items-center pd-justify-between pd-rounded-md pd-border pd-p-3">
                      <div>
                        <p className="pd-text-sm pd-font-medium">启用暗色主题</p>
                        <p className="pd-text-sm pd-text-muted-foreground">同步页面级 class 切换。</p>
                      </div>
                      <Switch checked={isDark} onCheckedChange={setIsDark} aria-label="切换暗色主题" />
                    </div>
                    <div className="pd-space-y-3">
                      <div className="pd-flex pd-items-center pd-justify-between">
                        <span className="pd-text-sm pd-font-medium">展示密度</span>
                        <span className="pd-text-sm pd-text-muted-foreground">72%</span>
                      </div>
                      <Slider defaultValue={[72]} max={100} step={1} aria-label="展示密度" />
                    </div>
                    <div className="pd-flex pd-items-center pd-gap-2">
                      <Checkbox id="release-ready" defaultChecked />
                      <label className="pd-text-sm pd-font-medium" htmlFor="release-ready">
                        包构建后可用于 Pages 展示
                      </label>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Buttons</CardTitle>
                    <CardDescription>常用按钮、标签和反馈组件。</CardDescription>
                  </CardHeader>
                  <CardContent className="pd-space-y-5">
                    <div className="pd-flex pd-flex-wrap pd-gap-2">
                      <Button>Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="outline">Outline</Button>
                      <Button variant="ghost">Ghost</Button>
                    </div>
                    <div className="pd-flex pd-flex-wrap pd-gap-2">
                      <Badge>stable</Badge>
                      <Badge variant="secondary">workspace</Badge>
                      <Badge variant="outline">react</Badge>
                      <Badge variant="destructive">breaking</Badge>
                    </div>
                    <Separator />
                    <div className="pd-space-y-2">
                      <div className="pd-flex pd-items-center pd-justify-between pd-text-sm">
                        <span className="pd-text-muted-foreground">构建进度</span>
                        <span className="pd-font-medium">84%</span>
                      </div>
                      <Progress value={84} />
                    </div>
                  </CardContent>
                </Card>

                <Card className="md:pd-col-span-2">
                  <CardHeader>
                    <CardTitle>Package Matrix</CardTitle>
                    <CardDescription>展示站覆盖的包和关键能力。</CardDescription>
                  </CardHeader>
                  <CardContent>
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
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="markdown" className="pd-mt-6">
              <React.Suspense
                fallback={
                  <Card>
                    <CardHeader>
                      <CardTitle>Markdown Rendering Example</CardTitle>
                      <CardDescription>正在加载 Markdown 展示内容。</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="pd-h-[600px] pd-rounded-md pd-border pd-bg-muted/30" />
                    </CardContent>
                  </Card>
                }
              >
                <MarkdownExample />
              </React.Suspense>
            </TabsContent>
          </Tabs>
        </section>
      </main>
    </div>
  )
}

export default App
