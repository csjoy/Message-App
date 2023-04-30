<script setup lang="ts">
import MessageLayout from '../layouts/MessageLayout.vue';
const props = defineProps({
  content: {
    type: String,
    default: "",
  },
  currentLayout: {
    type: Object,
    default: () => MessageLayout
  }
})
const emits = defineEmits(["update:currentLayout"])
emits("update:currentLayout", MessageLayout)

</script>

<template>
  <p>{{ props.content }}</p>
  <RouterView />
</template>