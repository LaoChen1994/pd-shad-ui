<script setup lang="ts">
import { ref } from 'vue'
import { Button } from 'pd-shad-ui/vue'
import { Markdown } from 'pd-markdown-ui/vue'

const count = ref(0)
const markdownText = ref('# Hello from Vue!\n\nThis is a button built with `radix-vue` and styled with Tailwind.')
</script>

<template>
  <div class="pd-p-8 pd-max-w-2xl pd-mx-auto pd-space-y-8">
    <h1 class="pd-text-3xl pd-font-bold">Vue Demo with pd-ui</h1>
    
    <div class="pd-p-6 pd-border pd-rounded-lg pd-space-y-4">
      <h2 class="pd-text-xl pd-font-semibold">Button Component</h2>
      <div class="pd-flex pd-gap-4">
        <Button @click="count++">
          Clicked: {{ count }}
        </Button>
        <Button variant="outline" @click="count = 0">
          Reset
        </Button>
      </div>
    </div>

    <div class="pd-p-6 pd-border pd-rounded-lg pd-space-y-4">
      <h2 class="pd-text-xl pd-font-semibold">Markdown Component</h2>
      <Markdown :content="markdownText" class-name="pd-prose" />
    </div>
  </div>
</template>

<style>
@import "pd-shad-ui/dist/index.css";
</style>
