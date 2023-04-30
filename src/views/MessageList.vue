<script setup lang="ts">

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  },
})
const emits = defineEmits(["list:update"])
emits("list:update", "ignore")
</script>
<template>
  <h2 class="text-xl font-medium text-gray-600">Message Feed</h2>
  <ul>
    <li v-for="(_, idx) in props.list" :key="idx">
      <RouterLink :to="`/message/${idx}`">{{ idx }}</RouterLink>
    </li>
  </ul>
</template>