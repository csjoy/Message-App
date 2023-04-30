<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
const route = useRoute()
const router = useRouter()
const goBack = () => {
  if (route.params.from) {
    router.go(-1)
  } else {
    router.push({ name: "messages" })
  }
}
</script>

<template>
  <div class="container mx-auto">
    <h1 class="my-4 text-2xl font-semibold text-gray-600">Message content</h1>
    <main>
      <slot />
    </main>
    <button class="my-2 bg-gray-100 rounded-md text-green-500 px-5 py-2.5 hover:bg-gray-200" @click="goBack()">Back</button>
  </div>
</template>