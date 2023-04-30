<script setup lang="ts">

import { reactive } from "vue"
import { useRoute } from 'vue-router';
import Default from "../layouts/Default.vue";

const route = useRoute()
const messages = reactive(route.meta.messages as string[])
const props = defineProps({
  currentLayout: {
    type: Object,
    default: () => Default
  }
})
const addMessage = (message: string) => {
  if (message === "ignore") return
  messages.push(message)
}
const emits = defineEmits(["update:currentLayout"])
emits("update:currentLayout", Default)
console.log(props.currentLayout)
</script>

<template>
  <nav class="my-4">
    <RouterLink class="bg-gray-100 text-green-500 px-5 py-2.5 rounded-md mr-2.5 font-medium hover:bg-gray-200" :to="{ name: 'list' }">List</RouterLink>
    <RouterLink class="bg-gray-100 text-green-500 px-5 py-2.5 rounded-md mr-2.5 font-medium hover:bg-gray-200" :to="{ name: 'editor' }">Editor</RouterLink>
  </nav>
  <RouterView :list="messages" @list:update="addMessage" />
</template>