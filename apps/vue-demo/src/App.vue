<script setup lang="ts">
import { ref } from 'vue'
import { Button, Tabs, TabsList, TabsTrigger, TabsContent, Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, Toaster, Calendar } from 'pd-shad-ui/vue'
import { toast } from 'vue-sonner'
import { H1, H2, P, Code, Pre } from 'pd-markdown-ui/vue'

const count = ref(0)
const date = ref(new Date())

const showToast = () => {
  toast('Hello from Sonner!', {
    description: 'This is a toast notification built with vue-sonner.',
  })
}
</script>

<template>
  <div class="pd-p-8 pd-max-w-4xl pd-mx-auto pd-space-y-8">
    <Toaster />
    
    <H1>Vue Demo with pd-ui</H1>
    <P>This demo validates the cross-framework compatibility of the <Code>pd-ui</Code> monorepo.</P>
    
    <div class="pd-grid pd-grid-cols-2 pd-gap-8">
      <!-- Buttons -->
      <div class="pd-p-6 pd-border pd-rounded-lg pd-space-y-4">
        <H2 class="pd-text-xl pd-mt-0">Button Component</H2>
        <div class="pd-flex pd-gap-4 pd-items-center">
          <Button @click="count++">
            Clicked: {{ count }}
          </Button>
          <Button variant="outline" @click="count = 0">
            Reset
          </Button>
        </div>
      </div>

      <!-- Toast -->
      <div class="pd-p-6 pd-border pd-rounded-lg pd-space-y-4">
        <H2 class="pd-text-xl pd-mt-0">Toast (Sonner)</H2>
        <Button variant="secondary" @click="showToast">
          Show Toast
        </Button>
      </div>

      <!-- Dialog -->
      <div class="pd-p-6 pd-border pd-rounded-lg pd-space-y-4">
        <H2 class="pd-text-xl pd-mt-0">Dialog</H2>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">Open Dialog</Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your account and remove your data from our servers.
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>

      <!-- Calendar -->
      <div class="pd-p-6 pd-border pd-rounded-lg pd-space-y-4">
        <H2 class="pd-text-xl pd-mt-0">Calendar</H2>
        <div class="pd-border pd-rounded-md pd-inline-block">
          <Calendar v-model="date" />
        </div>
        <P class="pd-text-sm pd-text-muted-foreground">Selected date: {{ date.toDateString() }}</P>
      </div>
    </div>

    <!-- Tabs -->
    <div class="pd-p-6 pd-border pd-rounded-lg pd-space-y-4">
      <H2 class="pd-text-xl pd-mt-0">Tabs</H2>
      <Tabs default-value="account" class="pd-w-[400px]">
        <TabsList>
          <TabsTrigger value="account">Account</TabsTrigger>
          <TabsTrigger value="password">Password</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <P>Make changes to your account here.</P>
        </TabsContent>
        <TabsContent value="password">
          <P>Change your password here.</P>
        </TabsContent>
      </Tabs>
    </div>

    <!-- Markdown Code Block -->
    <div class="pd-p-6 pd-border pd-rounded-lg pd-space-y-4">
      <H2 class="pd-text-xl pd-mt-0">Markdown Code Block</H2>
      <Pre class="language-typescript">const hello = 'World';
console.log(hello);</Pre>
    </div>
  </div>
</template>


