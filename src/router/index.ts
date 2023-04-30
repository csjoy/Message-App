import { createRouter, createWebHistory } from "vue-router"
import MessageEditor from "../views/MessageEditor.vue"
import MessageList from "../views/MessageList.vue"
import Messages from "../views/Messages.vue"
import Message from "../views/Message.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "messages",
      component: Messages,
      beforeEnter: async (to, _, next) => {
        const module = await import("../assets/messages")
        to.meta.messages = module.default
        next()
      },
      children: [
        {
          path: "editor",
          name: "editor",
          component: MessageEditor,
          props: true,
        },
        {
          path: "list",
          name: "list",
          component: MessageList,
          props: true,
        }
      ]
    },
    {
      path: "/message/:id",
      name: "message",
      component: Message,
      props: true,
      beforeEnter: async (to, _, next) => {
        const module = await import("../assets/messages")
        const messages = module.default
        if (to.params && to.params.id) {
          const id = Number(to.params.id)
          if (messages && messages.length > 0 && id < messages.length) {
            to.params.content = messages[id]
          }
        }
        next()
      }
    }
  ]
})

export default router