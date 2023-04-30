<script setup lang="ts">
import { ref } from "vue"
import { onBeforeRouteLeave } from "vue-router"

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})
console.log(props.list)
const emits = defineEmits(["list:update"])
const message = ref("")

const onSendClick = () => {
  if (!message.value) return
  emits("list:update", message.value)
  message.value = ""
}

onBeforeRouteLeave((to, _, next) => {
  if (message.value !== "") {
    const ans = window.confirm("You have an unsaved message.  Are you sure you want to navigate away?")
    next(!!ans)
    console.log(to)
  } else {
    next()
  }
})
</script>

<template>
  <textarea class="bg-gray-100 rounded-md block" cols="30" rows="4" v-model="message"></textarea>
  <button class="my-2 bg-gray-100 rounded-md text-green-500 px-5 py-2.5 hover:bg-gray-200" @click="onSendClick()">Submit</button>
</template>