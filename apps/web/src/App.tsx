import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { toast } from "sonner"
import { format } from "date-fns"
import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardContent, 
  Input,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Calendar,
  Toaster,
  ScrollArea,
} from "pd-shad-ui"
import { CalendarIcon } from "lucide-react"
import { cn } from "pd-shad-ui/lib/utils"
import { MarkdownExample } from "./components/MarkdownExample"

const formSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  description: z.string().min(10, {
    message: "Description must be at least 10 characters.",
  }),
  dob: z.date(),
})

function App() {
  const [isDark, setIsDark] = React.useState(false)
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      description: "",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast.success("Form submitted successfully!", {
      description: `User: ${values.username}, Born: ${format(values.dob, "PPP")}`,
    })
    console.log(values)
  }

  React.useEffect(() => {
    if (isDark) document.documentElement.classList.add("dark")
    else document.documentElement.classList.remove("dark")
  }, [isDark])

  return (
    <div className="pd-min-h-screen pd-bg-background pd-text-foreground pd-transition-colors pd-duration-300 pd-p-8">
      <Toaster />
      <div className="pd-max-w-2xl pd-mx-auto pd-space-y-8">
        <div className="pd-flex pd-justify-between pd-items-center">
          <h1 className="pd-text-3xl pd-font-bold">New Project</h1>
          <Button variant="ghost" onClick={() => setIsDark(!isDark)}>
            {isDark ? "Light Mode" : "Dark Mode"}
          </Button>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Project Details</CardTitle>
            <CardDescription>
              Complete the form below to register your new project.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="pd-space-y-8">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input placeholder="shadcn" {...field} />
                      </FormControl>
                      <FormDescription>
                        This is your public display name.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="dob"
                  render={({ field }) => (
                    <FormItem className="pd-flex pd-flex-col">
                      <FormLabel>Date of birth</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "pd-w-[240px] pd-pl-3 pd-text-left pd-font-normal",
                                !field.value && "pd-text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a date</span>
                              )}
                              <CalendarIcon className="pd-ml-auto pd-h-4 pd-w-4 pd-opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="pd-w-auto pd-p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            disabled={(date) =>
                              date > new Date() || date < new Date("1900-01-01")
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormDescription>
                        Your date of birth is used to calculate your age.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Bio</FormLabel>
                      <FormControl>
                        <ScrollArea className="pd-h-[100px] pd-w-full pd-rounded-md pd-border pd-p-4">
                          <textarea
                            className="pd-h-full pd-w-full pd-bg-transparent pd-outline-none pd-resize-none pd-text-sm"
                            placeholder="Tell us a little bit about your project..."
                            {...field}
                          />
                        </ScrollArea>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="pd-w-full">
                  Submit Project
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>

        <div className="pd-pt-8 pd-border-t">
          <h2 className="pd-text-2xl pd-font-bold pd-mb-6">Markdown Components Testing</h2>
          <MarkdownExample />
        </div>
      </div>
    </div>
  )
}

export default App
