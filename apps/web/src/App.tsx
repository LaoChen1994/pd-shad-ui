import * as React from "react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AspectRatio,
  Avatar,
  AvatarFallback,
  AvatarImage,
  Badge,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
  Button,
  Calendar,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Checkbox,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuSeparator,
  ContextMenuTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
  Input,
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
  Label,
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Progress,
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  ScrollArea,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Separator,
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Skeleton,
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
  Textarea,
  Toaster,
  Toggle,
  ToggleGroup,
  ToggleGroupItem,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
  cn,
} from "pd-shad-ui"
import {
  Box,
  CheckCircle2,
  Code2,
  FileCode2,
  FileText,
  Github,
  Layers3,
  Moon,
  Package,
  Sun,
  Table2,
  Type,
} from "lucide-react"

const MarkdownDemo = React.lazy(() =>
  import("./components/MarkdownDemo").then((module) => ({
    default: module.MarkdownDemo,
  }))
)

type DemoGroup = {
  title: string
  items: {
    name: string
    route: string
    description: string
  }[]
}

type DemoFormValues = {
  username: string
}

const shadGroups: DemoGroup[] = [
  {
    title: "Basic",
    items: [
      { name: "Button", route: "pd-shad-ui/button", description: "按钮变体、尺寸和基础操作入口。" },
      { name: "Badge", route: "pd-shad-ui/badge", description: "标签、状态和轻量级分类信息。" },
      { name: "Card", route: "pd-shad-ui/card", description: "内容容器、页眉、正文和页脚。" },
      { name: "Separator", route: "pd-shad-ui/separator", description: "内容分隔线和区域划分。" },
      { name: "Skeleton", route: "pd-shad-ui/skeleton", description: "页面和组件的加载占位状态。" },
      { name: "Aspect Ratio", route: "pd-shad-ui/aspect-ratio", description: "固定比例的媒体和预览容器。" },
    ],
  },
  {
    title: "Form",
    items: [
      { name: "Label", route: "pd-shad-ui/label", description: "表单字段标题与可访问关联。" },
      { name: "Input", route: "pd-shad-ui/input", description: "单行输入框和组合表单布局。" },
      { name: "Textarea", route: "pd-shad-ui/textarea", description: "多行文本输入和备注内容。" },
      { name: "Checkbox", route: "pd-shad-ui/checkbox", description: "布尔选择和任务状态。" },
      { name: "Switch", route: "pd-shad-ui/switch", description: "开关型设置项和即时状态。" },
      { name: "Select", route: "pd-shad-ui/select", description: "下拉选择和枚举值输入。" },
      { name: "Slider", route: "pd-shad-ui/slider", description: "数值范围选择和配置密度。" },
      { name: "Toggle", route: "pd-shad-ui/toggle", description: "单个可切换按钮状态。" },
      { name: "Toggle Group", route: "pd-shad-ui/toggle-group", description: "一组选项的切换控制。" },
      { name: "Input OTP", route: "pd-shad-ui/input-otp", description: "验证码和分段输入场景。" },
      { name: "Calendar", route: "pd-shad-ui/calendar", description: "日期选择和日历视图。" },
      { name: "Form", route: "pd-shad-ui/form", description: "react-hook-form 表单组合。" },
    ],
  },
  {
    title: "Overlay",
    items: [
      { name: "Dialog", route: "pd-shad-ui/dialog", description: "模态弹窗和确认内容。" },
      { name: "Alert Dialog", route: "pd-shad-ui/alert-dialog", description: "高风险操作的确认弹窗。" },
      { name: "Sheet", route: "pd-shad-ui/sheet", description: "侧边抽屉和辅助面板。" },
      { name: "Popover", route: "pd-shad-ui/popover", description: "轻量浮层和局部编辑。" },
      { name: "Hover Card", route: "pd-shad-ui/hover-card", description: "悬停触发的信息预览。" },
      { name: "Tooltip", route: "pd-shad-ui/tooltip", description: "短提示和操作说明。" },
      { name: "Dropdown Menu", route: "pd-shad-ui/dropdown-menu", description: "按钮触发的操作菜单。" },
      { name: "Context Menu", route: "pd-shad-ui/context-menu", description: "右键上下文操作菜单。" },
    ],
  },
  {
    title: "Navigation",
    items: [
      { name: "Tabs", route: "pd-shad-ui/tabs", description: "同级内容视图切换。" },
      { name: "Accordion", route: "pd-shad-ui/accordion", description: "可折叠内容分组。" },
      { name: "Navigation Menu", route: "pd-shad-ui/navigation-menu", description: "顶部导航和下拉内容。" },
      { name: "Breadcrumb", route: "pd-shad-ui/breadcrumb", description: "层级路径和当前位置。" },
      { name: "Pagination", route: "pd-shad-ui/pagination", description: "分页控制和前后翻页。" },
      { name: "Menubar", route: "pd-shad-ui/menubar", description: "桌面式菜单栏。" },
      { name: "Command", route: "pd-shad-ui/command", description: "命令面板和快速检索。" },
    ],
  },
  {
    title: "Data Display",
    items: [
      { name: "Avatar", route: "pd-shad-ui/avatar", description: "用户头像和占位缩写。" },
      { name: "Table", route: "pd-shad-ui/table", description: "结构化数据和状态列。" },
      { name: "Progress", route: "pd-shad-ui/progress", description: "进度反馈和完成度展示。" },
      { name: "Scroll Area", route: "pd-shad-ui/scroll-area", description: "受控滚动内容区域。" },
      { name: "Resizable", route: "pd-shad-ui/resizable", description: "可拖拽尺寸的面板布局。" },
      { name: "Carousel", route: "pd-shad-ui/carousel", description: "横向轮播和预览卡片。" },
      { name: "Sonner", route: "pd-shad-ui/sonner", description: "Toast 通知和临时反馈。" },
    ],
  },
]

const markdownItems = [
  { name: "Typography", route: "pd-markdown-ui/typography", description: "标题、段落、链接和引用。" },
  { name: "Lists", route: "pd-markdown-ui/lists", description: "有序、无序和任务列表。" },
  { name: "Code", route: "pd-markdown-ui/code", description: "行内代码、Shiki 代码块和命令片段。" },
  { name: "Table", route: "pd-markdown-ui/table", description: "GFM 表格和对齐方式。" },
  { name: "Math", route: "pd-markdown-ui/math", description: "remark-math 与 KaTeX 公式。" },
]

const shadItems = shadGroups.flatMap((group) => group.items)
const allRoutes = new Set([...shadItems, ...markdownItems].map((item) => item.route))

const getRoute = () => {
  const hash = window.location.hash.replace("#", "")

  return allRoutes.has(hash) ? hash : "pd-shad-ui/button"
}

function App() {
  const [isDark, setIsDark] = React.useState(false)
  const [route, setRoute] = React.useState(getRoute)
  const [date, setDate] = React.useState<Date | undefined>(new Date(2026, 4, 21))
  const form = useForm<DemoFormValues>({
    defaultValues: {
      username: "pd-ui",
    },
  })

  const selectedPackage = route.startsWith("pd-markdown-ui") ? "pd-markdown-ui" : "pd-shad-ui"
  const currentItem = [...shadItems, ...markdownItems].find((item) => item.route === route) ?? shadItems[0]

  React.useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  React.useEffect(() => {
    const onHashChange = () => setRoute(getRoute())

    if (!window.location.hash) {
      window.history.replaceState(null, "", "#pd-shad-ui/button")
    }

    window.addEventListener("hashchange", onHashChange)
    return () => window.removeEventListener("hashchange", onHashChange)
  }, [])

  return (
    <TooltipProvider>
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

        <div
          className="pd-grid"
          style={{
            gridTemplateColumns: "18rem minmax(48rem, 1fr)",
            minHeight: "calc(100vh - 4rem)",
          }}
        >
          <aside
            className="pd-sticky pd-top-16 pd-overflow-y-auto pd-border-r pd-bg-background"
            style={{ height: "calc(100vh - 4rem)" }}
          >
            <nav className="pd-flex pd-flex-col pd-p-6" style={{ gap: "2rem" }}>
              <div className="pd-flex pd-flex-col" style={{ gap: "0.75rem" }}>
                <p className="pd-text-xs pd-font-medium pd-uppercase pd-tracking-wide pd-text-muted-foreground">Packages</p>
                <div className="pd-grid" style={{ gap: "0.75rem" }}>
                  <a
                    className={cn(
                      "pd-flex pd-h-11 pd-items-center pd-gap-2 pd-rounded-md pd-border pd-px-3 pd-text-sm pd-font-medium pd-transition-colors hover:pd-bg-accent hover:pd-text-accent-foreground",
                      selectedPackage === "pd-shad-ui" && "pd-bg-primary pd-text-primary-foreground hover:pd-bg-primary"
                    )}
                    href="#pd-shad-ui/button"
                  >
                    <Code2 className="pd-h-4 pd-w-4" aria-hidden="true" />
                    pd-shad-ui
                  </a>
                  <a
                    className={cn(
                      "pd-flex pd-h-11 pd-items-center pd-gap-2 pd-rounded-md pd-border pd-px-3 pd-text-sm pd-font-medium pd-transition-colors hover:pd-bg-accent hover:pd-text-accent-foreground",
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
                <div className="pd-flex pd-flex-col" style={{ gap: "1.25rem" }}>
                  {shadGroups.map((group) => (
                    <div key={group.title} className="pd-flex pd-flex-col" style={{ gap: "0.5rem" }}>
                      <p className="pd-text-xs pd-font-medium pd-uppercase pd-tracking-wide pd-text-muted-foreground">
                        {group.title}
                      </p>
                      <div className="pd-grid" style={{ gap: "0.25rem" }}>
                        {group.items.map((item) => (
                          <a
                            key={item.route}
                            className={cn(
                              "pd-flex pd-min-h-10 pd-items-center pd-gap-2 pd-rounded-md pd-px-3 pd-py-2 pd-text-sm pd-text-muted-foreground hover:pd-bg-accent hover:pd-text-accent-foreground",
                              route === item.route && "pd-bg-accent pd-font-medium pd-text-accent-foreground"
                            )}
                            href={`#${item.route}`}
                          >
                            <Box className="pd-h-4 pd-w-4" aria-hidden="true" />
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="pd-flex pd-flex-col" style={{ gap: "0.5rem" }}>
                  <p className="pd-text-xs pd-font-medium pd-uppercase pd-tracking-wide pd-text-muted-foreground">Markdown</p>
                  <div className="pd-grid" style={{ gap: "0.25rem" }}>
                    {markdownItems.map((item) => (
                      <a
                        key={item.route}
                        className={cn(
                          "pd-flex pd-min-h-10 pd-items-center pd-gap-2 pd-rounded-md pd-px-3 pd-py-2 pd-text-sm pd-text-muted-foreground hover:pd-bg-accent hover:pd-text-accent-foreground",
                          route === item.route && "pd-bg-accent pd-font-medium pd-text-accent-foreground"
                        )}
                        href={`#${item.route}`}
                      >
                        {item.route.endsWith("code") ? (
                          <FileCode2 className="pd-h-4 pd-w-4" aria-hidden="true" />
                        ) : item.route.endsWith("table") ? (
                          <Table2 className="pd-h-4 pd-w-4" aria-hidden="true" />
                        ) : item.route.endsWith("math") ? (
                          <Layers3 className="pd-h-4 pd-w-4" aria-hidden="true" />
                        ) : (
                          <Type className="pd-h-4 pd-w-4" aria-hidden="true" />
                        )}
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </nav>
          </aside>

          <main className="pd-min-w-0 pd-px-4 pd-py-10 md:pd-px-8 lg:pd-px-10">
            <div className="pd-mx-auto pd-flex pd-w-full pd-max-w-6xl pd-flex-col" style={{ gap: "2rem" }}>
              <div className="pd-flex pd-flex-col pd-gap-5 md:pd-flex-row md:pd-items-start md:pd-justify-between">
                <div className="pd-flex pd-flex-col" style={{ gap: "1rem" }}>
                  <Badge variant="outline">{selectedPackage}</Badge>
                  <h2 className="pd-text-3xl pd-font-bold pd-leading-tight pd-tracking-normal md:pd-text-4xl">
                    {currentItem.name}
                  </h2>
                  <p className="pd-max-w-2xl pd-text-base pd-leading-7 pd-text-muted-foreground">
                    {currentItem.description}
                  </p>
                </div>
                <div className="pd-flex pd-items-center pd-gap-3 md:pd-pt-2">
                  <Button variant="outline" size="sm" asChild>
                    <a
                      href={`https://www.npmjs.com/package/${selectedPackage}`}
                      target="_blank"
                      rel="noreferrer"
                    >
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

              {selectedPackage === "pd-shad-ui" && (
                <div className="pd-flex pd-flex-col" style={{ gap: "2rem" }}>
                  {route === "pd-shad-ui/button" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>按钮变体、尺寸和状态。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-flex pd-flex-col pd-p-8 pd-pt-2" style={{ gap: "1.5rem" }}>
                        <div className="pd-flex pd-flex-wrap pd-items-center pd-gap-4">
                          <Button>Primary</Button>
                          <Button variant="secondary">Secondary</Button>
                          <Button variant="outline">Outline</Button>
                          <Button variant="ghost">Ghost</Button>
                          <Button variant="destructive">Destructive</Button>
                        </div>
                        <div className="pd-flex pd-flex-wrap pd-items-center pd-gap-4">
                          <Button size="sm">Small</Button>
                          <Button>Default</Button>
                          <Button size="lg">Large</Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/badge" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>不同语义的状态标签。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-flex pd-flex-wrap pd-items-center pd-gap-4 pd-p-8 pd-pt-2">
                        <Badge>stable</Badge>
                        <Badge variant="secondary">workspace</Badge>
                        <Badge variant="outline">react</Badge>
                        <Badge variant="destructive">breaking</Badge>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/card" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Release card</CardTitle>
                        <CardDescription>包含页眉、正文和页脚操作。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <p className="pd-text-sm pd-leading-6 pd-text-muted-foreground">
                          展示站通过 GitHub Pages 发布，覆盖 pd-shad-ui 与 pd-markdown-ui 的主要组件。
                        </p>
                      </CardContent>
                      <CardFooter className="pd-flex pd-gap-3 pd-p-8 pd-pt-0">
                        <Button size="sm">Publish</Button>
                        <Button size="sm" variant="outline">Preview</Button>
                      </CardFooter>
                    </Card>
                  )}

                  {route === "pd-shad-ui/separator" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>横向与纵向分隔内容。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-flex pd-flex-col pd-p-8 pd-pt-2" style={{ gap: "1.5rem" }}>
                        <div className="pd-flex pd-flex-col pd-gap-3">
                          <p className="pd-font-medium">pd-shad-ui</p>
                          <Separator />
                          <p className="pd-text-sm pd-text-muted-foreground">组件、文档和展示站保持独立。</p>
                        </div>
                        <div className="pd-flex pd-h-8 pd-items-center pd-gap-4 pd-text-sm">
                          <span>React</span>
                          <Separator orientation="vertical" />
                          <span>Tailwind prefix</span>
                          <Separator orientation="vertical" />
                          <span>GitHub Pages</span>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/skeleton" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>内容加载前的结构占位。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-flex pd-items-center pd-gap-5 pd-p-8 pd-pt-2">
                        <Skeleton className="pd-h-14 pd-w-14 pd-rounded-full" />
                        <div className="pd-flex pd-flex-1 pd-flex-col" style={{ gap: "0.75rem" }}>
                          <Skeleton className="pd-h-4 pd-w-48" />
                          <Skeleton className="pd-h-4 pd-w-full" />
                          <Skeleton className="pd-h-4 pd-w-2/3" />
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/aspect-ratio" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>固定比例媒体区域。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <AspectRatio ratio={16 / 9} className="pd-overflow-hidden pd-rounded-md pd-bg-muted">
                          <div className="pd-flex pd-h-full pd-items-center pd-justify-center pd-bg-muted pd-text-sm pd-text-muted-foreground">
                            16:9 preview area
                          </div>
                        </AspectRatio>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/label" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>Label 与控件通过 htmlFor 关联。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-flex pd-flex-col pd-p-8 pd-pt-2" style={{ gap: "0.75rem" }}>
                        <Label htmlFor="label-demo">Package name</Label>
                        <Input id="label-demo" defaultValue="pd-shad-ui" />
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/input" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>单行输入框与组合表单。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-grid pd-gap-6 pd-p-8 pd-pt-2 md:pd-grid-cols-2">
                        <div className="pd-flex pd-flex-col" style={{ gap: "0.75rem" }}>
                          <Label htmlFor="project-name">Project name</Label>
                          <Input id="project-name" defaultValue="pd-ui showcase" />
                        </div>
                        <div className="pd-flex pd-flex-col" style={{ gap: "0.75rem" }}>
                          <Label htmlFor="package-name">Package</Label>
                          <Input id="package-name" defaultValue="pd-shad-ui" />
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/textarea" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>多行文本输入。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-flex pd-flex-col pd-p-8 pd-pt-2" style={{ gap: "0.75rem" }}>
                        <Label htmlFor="release-note">Release note</Label>
                        <Textarea id="release-note" defaultValue="Add a GitHub Pages showcase for component demos." />
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/checkbox" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>带说明的复选项。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-flex pd-items-center pd-gap-3 pd-p-8 pd-pt-2">
                        <Checkbox id="pages-ready" defaultChecked />
                        <Label htmlFor="pages-ready">GitHub Pages ready</Label>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/switch" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>页面主题开关。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <div className="pd-flex pd-items-center pd-justify-between pd-rounded-md pd-border pd-p-4">
                          <div>
                            <p className="pd-text-sm pd-font-medium">Dark mode</p>
                            <p className="pd-text-sm pd-text-muted-foreground">同步切换页面主题。</p>
                          </div>
                          <Switch checked={isDark} onCheckedChange={setIsDark} aria-label="切换暗色主题" />
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/select" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>下拉选择框。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-flex pd-flex-col pd-p-8 pd-pt-2" style={{ gap: "0.75rem" }}>
                        <Label htmlFor="framework-select">Framework</Label>
                        <Select defaultValue="react">
                          <SelectTrigger id="framework-select" aria-label="Framework">
                            <SelectValue placeholder="Select framework" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="react">React</SelectItem>
                            <SelectItem value="vue">Vue</SelectItem>
                            <SelectItem value="svelte">Svelte</SelectItem>
                          </SelectContent>
                        </Select>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/slider" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>数值型范围控制。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-flex pd-flex-col pd-p-8 pd-pt-2" style={{ gap: "1.25rem" }}>
                        <div className="pd-flex pd-items-center pd-justify-between pd-text-sm">
                          <span className="pd-text-muted-foreground">Display density</span>
                          <span className="pd-font-medium">72%</span>
                        </div>
                        <Slider defaultValue={[72]} max={100} step={1} aria-label="展示密度" />
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/toggle" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>单个开关按钮。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-flex pd-items-center pd-gap-4 pd-p-8 pd-pt-2">
                        <Toggle aria-label="Toggle bold">Bold</Toggle>
                        <Toggle variant="outline" aria-label="Toggle italic">Italic</Toggle>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/toggle-group" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>一组互斥或多选控制。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <ToggleGroup type="multiple" variant="outline">
                          <ToggleGroupItem value="bold">Bold</ToggleGroupItem>
                          <ToggleGroupItem value="italic">Italic</ToggleGroupItem>
                          <ToggleGroupItem value="underline">Underline</ToggleGroupItem>
                        </ToggleGroup>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/input-otp" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>分段验证码输入。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <InputOTP maxLength={6} defaultValue="123456">
                          <InputOTPGroup>
                            <InputOTPSlot index={0} />
                            <InputOTPSlot index={1} />
                            <InputOTPSlot index={2} />
                          </InputOTPGroup>
                          <InputOTPSeparator />
                          <InputOTPGroup>
                            <InputOTPSlot index={3} />
                            <InputOTPSlot index={4} />
                            <InputOTPSlot index={5} />
                          </InputOTPGroup>
                        </InputOTP>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/calendar" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>日期选择器。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <Calendar mode="single" selected={date} onSelect={setDate} className="pd-rounded-md pd-border" />
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/form" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>react-hook-form 组合字段。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <Form {...form}>
                          <form className="pd-flex pd-flex-col" style={{ gap: "1rem" }}>
                            <FormField
                              control={form.control}
                              name="username"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Username</FormLabel>
                                  <FormControl>
                                    <Input placeholder="pd-ui" {...field} />
                                  </FormControl>
                                  <FormDescription>展示 FormItem、FormLabel、FormControl 和 FormDescription。</FormDescription>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />
                            <Button type="button" className="pd-w-fit">Save</Button>
                          </form>
                        </Form>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/dialog" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>模态弹窗。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button>Open dialog</Button>
                          </DialogTrigger>
                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Publish showcase</DialogTitle>
                              <DialogDescription>确认后展示站将通过 GitHub Pages 工作流发布。</DialogDescription>
                            </DialogHeader>
                            <DialogFooter>
                              <Button type="button">Confirm</Button>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/alert-dialog" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>高风险操作确认。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <AlertDialog>
                          <AlertDialogTrigger asChild>
                            <Button variant="destructive">Delete release</Button>
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle>确认删除？</AlertDialogTitle>
                              <AlertDialogDescription>这个操作会移除当前发布草稿。</AlertDialogDescription>
                            </AlertDialogHeader>
                            <AlertDialogFooter>
                              <AlertDialogCancel>Cancel</AlertDialogCancel>
                              <AlertDialogAction>Continue</AlertDialogAction>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/sheet" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>右侧抽屉面板。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <Sheet>
                          <SheetTrigger asChild>
                            <Button variant="outline">Open sheet</Button>
                          </SheetTrigger>
                          <SheetContent>
                            <SheetHeader>
                              <SheetTitle>Package details</SheetTitle>
                              <SheetDescription>查看当前组件包的发布信息。</SheetDescription>
                            </SheetHeader>
                            <SheetFooter>
                              <Button type="button">Done</Button>
                            </SheetFooter>
                          </SheetContent>
                        </Sheet>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/popover" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>轻量浮层。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button variant="outline">Open popover</Button>
                          </PopoverTrigger>
                          <PopoverContent className="pd-w-72">
                            <div className="pd-flex pd-flex-col" style={{ gap: "0.75rem" }}>
                              <p className="pd-font-medium">Release channel</p>
                              <Input defaultValue="latest" />
                            </div>
                          </PopoverContent>
                        </Popover>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/hover-card" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>悬停查看详情。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <HoverCard>
                          <HoverCardTrigger asChild>
                            <Button variant="link" className="pd-px-0">pd-shad-ui</Button>
                          </HoverCardTrigger>
                          <HoverCardContent>
                            <p className="pd-text-sm pd-leading-6">基础交互组件包，展示站中覆盖所有当前导出组件。</p>
                          </HoverCardContent>
                        </HoverCard>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/tooltip" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>短提示。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="outline">Hover me</Button>
                          </TooltipTrigger>
                          <TooltipContent>Tooltip content</TooltipContent>
                        </Tooltip>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/dropdown-menu" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>操作菜单。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="outline">Open menu</Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent>
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Copy import</DropdownMenuItem>
                            <DropdownMenuItem>Open docs</DropdownMenuItem>
                            <DropdownMenuCheckboxItem checked>Published</DropdownMenuCheckboxItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/context-menu" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>右键触发上下文菜单。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <ContextMenu>
                          <ContextMenuTrigger className="pd-flex pd-h-32 pd-items-center pd-justify-center pd-rounded-md pd-border pd-border-dashed pd-text-sm pd-text-muted-foreground">
                            Right click this area
                          </ContextMenuTrigger>
                          <ContextMenuContent>
                            <ContextMenuLabel>Component</ContextMenuLabel>
                            <ContextMenuSeparator />
                            <ContextMenuItem>Copy name</ContextMenuItem>
                            <ContextMenuItem>View source</ContextMenuItem>
                          </ContextMenuContent>
                        </ContextMenu>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/tabs" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>同级内容切换。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <Tabs defaultValue="preview">
                          <TabsList>
                            <TabsTrigger value="preview">Preview</TabsTrigger>
                            <TabsTrigger value="source">Source</TabsTrigger>
                          </TabsList>
                          <TabsContent value="preview" className="pd-mt-6 pd-rounded-md pd-border pd-p-4">
                            Component preview
                          </TabsContent>
                          <TabsContent value="source" className="pd-mt-6 pd-rounded-md pd-border pd-p-4">
                            import {"{ Tabs }"} from "pd-shad-ui"
                          </TabsContent>
                        </Tabs>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/accordion" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>折叠内容。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <Accordion type="single" collapsible className="pd-w-full">
                          <AccordionItem value="item-1">
                            <AccordionTrigger>组件是否带 pd- 前缀？</AccordionTrigger>
                            <AccordionContent>展示站使用 pd-shad-ui 导出的组件和前缀类名。</AccordionContent>
                          </AccordionItem>
                          <AccordionItem value="item-2">
                            <AccordionTrigger>是否支持 GitHub Pages？</AccordionTrigger>
                            <AccordionContent>Vite base 会在 Pages 构建时使用仓库名。</AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/navigation-menu" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>顶部导航菜单。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <NavigationMenu>
                          <NavigationMenuList>
                            <NavigationMenuItem>
                              <NavigationMenuTrigger>Packages</NavigationMenuTrigger>
                              <NavigationMenuContent>
                                <div className="pd-grid pd-w-72 pd-gap-3 pd-p-4">
                                  <NavigationMenuLink className="pd-rounded-md pd-p-3 hover:pd-bg-accent">
                                    pd-shad-ui
                                  </NavigationMenuLink>
                                  <NavigationMenuLink className="pd-rounded-md pd-p-3 hover:pd-bg-accent">
                                    pd-markdown-ui
                                  </NavigationMenuLink>
                                </div>
                              </NavigationMenuContent>
                            </NavigationMenuItem>
                          </NavigationMenuList>
                        </NavigationMenu>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/breadcrumb" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>层级路径。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <Breadcrumb>
                          <BreadcrumbList>
                            <BreadcrumbItem>
                              <BreadcrumbLink href="#pd-shad-ui/button">Components</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
                            </BreadcrumbItem>
                          </BreadcrumbList>
                        </Breadcrumb>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/pagination" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>分页导航。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <Pagination>
                          <PaginationContent>
                            <PaginationItem>
                              <PaginationPrevious href="#pd-shad-ui/pagination" />
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationLink href="#pd-shad-ui/pagination" isActive>1</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationLink href="#pd-shad-ui/pagination">2</PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                              <PaginationNext href="#pd-shad-ui/pagination" />
                            </PaginationItem>
                          </PaginationContent>
                        </Pagination>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/menubar" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>菜单栏。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <Menubar>
                          <MenubarMenu>
                            <MenubarTrigger>File</MenubarTrigger>
                            <MenubarContent>
                              <MenubarItem>New component</MenubarItem>
                              <MenubarItem>Open docs</MenubarItem>
                              <MenubarSeparator />
                              <MenubarItem>
                                Save <MenubarShortcut>⌘S</MenubarShortcut>
                              </MenubarItem>
                            </MenubarContent>
                          </MenubarMenu>
                        </Menubar>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/command" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>命令列表。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <Command className="pd-rounded-md pd-border">
                          <CommandInput placeholder="Search components..." />
                          <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup heading="Components">
                              <CommandItem>Button <CommandShortcut>B</CommandShortcut></CommandItem>
                              <CommandItem>Dialog <CommandShortcut>D</CommandShortcut></CommandItem>
                              <CommandItem>Table <CommandShortcut>T</CommandShortcut></CommandItem>
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/avatar" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>头像和 fallback。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-flex pd-items-center pd-gap-4 pd-p-8 pd-pt-2">
                        <Avatar>
                          <AvatarImage src="https://github.com/shadcn.png" alt="shadcn" />
                          <AvatarFallback>SC</AvatarFallback>
                        </Avatar>
                        <Avatar>
                          <AvatarFallback>PD</AvatarFallback>
                        </Avatar>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/table" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>包能力矩阵。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
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
                              <TableCell>Components</TableCell>
                              <TableCell><Badge variant="secondary">ready</Badge></TableCell>
                            </TableRow>
                            <TableRow>
                              <TableCell className="pd-font-medium">pd-markdown-ui</TableCell>
                              <TableCell>Markdown</TableCell>
                              <TableCell><Badge variant="secondary">ready</Badge></TableCell>
                            </TableRow>
                          </TableBody>
                        </Table>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/progress" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>进度条。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-flex pd-flex-col pd-p-8 pd-pt-2" style={{ gap: "1rem" }}>
                        <div className="pd-flex pd-items-center pd-justify-between pd-text-sm">
                          <span className="pd-text-muted-foreground">Component coverage</span>
                          <span className="pd-font-medium">100%</span>
                        </div>
                        <Progress value={100} />
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/scroll-area" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>固定高度滚动区域。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <ScrollArea className="pd-h-56 pd-rounded-md pd-border pd-p-4">
                          <div className="pd-flex pd-flex-col" style={{ gap: "0.75rem" }}>
                            {shadItems.slice(0, 18).map((item) => (
                              <div key={item.route} className="pd-rounded-md pd-bg-muted pd-p-3 pd-text-sm">
                                {item.name}
                              </div>
                            ))}
                          </div>
                        </ScrollArea>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/resizable" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>可拖拽面板。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <ResizablePanelGroup direction="horizontal" className="pd-min-h-44 pd-rounded-md pd-border">
                          <ResizablePanel defaultSize={35} className="pd-flex pd-items-center pd-justify-center pd-p-4">
                            Sidebar
                          </ResizablePanel>
                          <ResizableHandle withHandle />
                          <ResizablePanel defaultSize={65} className="pd-flex pd-items-center pd-justify-center pd-p-4">
                            Content
                          </ResizablePanel>
                        </ResizablePanelGroup>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/carousel" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>横向轮播。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <Carousel className="pd-mx-auto pd-w-full pd-max-w-sm">
                          <CarouselContent>
                            {[1, 2, 3].map((item) => (
                              <CarouselItem key={item}>
                                <div className="pd-flex pd-aspect-video pd-items-center pd-justify-center pd-rounded-md pd-border pd-bg-muted pd-text-3xl pd-font-semibold">
                                  {item}
                                </div>
                              </CarouselItem>
                            ))}
                          </CarouselContent>
                          <CarouselPrevious />
                          <CarouselNext />
                        </Carousel>
                      </CardContent>
                    </Card>
                  )}

                  {route === "pd-shad-ui/sonner" && (
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>Toast 通知。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <Button onClick={() => toast("展示站已生成", { description: "pd-ui component showcase" })}>
                          Show toast
                        </Button>
                      </CardContent>
                    </Card>
                  )}
                </div>
              )}

              {selectedPackage === "pd-markdown-ui" && (
                <React.Suspense
                  fallback={
                    <Card>
                      <CardHeader className="pd-p-8 pd-pb-4">
                        <CardTitle>Preview</CardTitle>
                        <CardDescription>正在加载 Markdown 展示内容。</CardDescription>
                      </CardHeader>
                      <CardContent className="pd-p-8 pd-pt-2">
                        <div className="pd-h-80 pd-rounded-md pd-border pd-bg-muted/30" />
                      </CardContent>
                    </Card>
                  }
                >
                  {route === "pd-markdown-ui/typography" && (
                    <MarkdownDemo
                      content={`# Markdown UI\n\nA focused preview for **headings**, paragraphs, links, and blockquotes.\n\n## Typography\n\nUse pd-markdown-ui with [react-markdown](https://github.com/remarkjs/react-markdown) and the exported component map.\n\n> Documentation pages should stay readable, dense, and consistent with pd-shad-ui.`}
                    />
                  )}
                  {route === "pd-markdown-ui/lists" && (
                    <MarkdownDemo
                      content={`## Lists\n\n- Semantic headings\n- Styled paragraphs\n- Nested list support\n\n1. Install workspace packages\n2. Build the demo app\n3. Publish with GitHub Pages\n\n- [x] Package switch navigation\n- [x] Component demo routes\n- [x] Tailwind prefix isolation`}
                    />
                  )}
                  {route === "pd-markdown-ui/code" && (
                    <MarkdownDemo
                      content={`## Code blocks\n\nInline code uses \`pd-markdown-ui\` styles.\n\n\`\`\`tsx\nimport ReactMarkdown from "react-markdown";\nimport { components, defaultMarkdownPlugins } from "pd-markdown-ui";\n\nexport function Preview({ content }: { content: string }) {\n  return (\n    <ReactMarkdown\n      remarkPlugins={defaultMarkdownPlugins.remark}\n      rehypePlugins={defaultMarkdownPlugins.rehype}\n      components={components}\n    >\n      {content}\n    </ReactMarkdown>\n  );\n}\n\`\`\`\n\n\`\`\`bash\npnpm --filter pd-markdown-ui run test\npnpm --filter pd-web-demo run build\n\`\`\``}
                    />
                  )}
                  {route === "pd-markdown-ui/table" && (
                    <MarkdownDemo
                      content={`## GFM table\n\n| Feature | Package | Status |\n| :--- | :--- | :---: |\n| Components | pd-shad-ui | ✅ |\n| Markdown | pd-markdown-ui | ✅ |\n| GitHub Pages | pd-web-demo | ✅ |`}
                    />
                  )}
                  {route === "pd-markdown-ui/math" && (
                    <MarkdownDemo
                      content={`## Math support\n\nInline equation: $E=mc^2$.\n\nBlock equation:\n\n$$\n\\frac{-b \\pm \\sqrt{b^2-4ac}}{2a}\n$$\n\nKaTeX styles are loaded with the markdown preview component.`}
                    />
                  )}
                </React.Suspense>
              )}

              <div className="pd-flex pd-items-center pd-gap-3 pd-rounded-md pd-border pd-bg-muted/30 pd-p-4 pd-text-sm pd-text-muted-foreground">
                <CheckCircle2 className="pd-h-4 pd-w-4 pd-text-foreground" aria-hidden="true" />
                GitHub Pages 构建会使用当前仓库名作为 Vite base，发布后可直接访问展示站。
              </div>
            </div>
          </main>
        </div>
      </div>
    </TooltipProvider>
  )
}

export default App
