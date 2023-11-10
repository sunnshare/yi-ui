/**
 * Generated by "@vuepress/internal-routes"
 */

import { injectComponentOption, ensureAsyncComponentsLoaded } from '@app/util'
import rootMixins from '@internal/root-mixins'
import GlobalLayout from "D:\\前端web\\yi-ui\\yi-ui-docs\\node_modules\\@vuepress\\core\\lib\\client\\components\\GlobalLayout.vue"

injectComponentOption(GlobalLayout, 'mixins', rootMixins)
export const routes = [
  {
    name: "v-399704cf",
    path: "/components/button.html",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-399704cf").then(next)
    },
  },
  {
    name: "v-28893bb9",
    path: "/",
    component: GlobalLayout,
    beforeEnter: (to, from, next) => {
      ensureAsyncComponentsLoaded("Layout", "v-28893bb9").then(next)
    },
  },
  {
    path: "/index.html",
    redirect: "/"
  },
  {
    path: '*',
    component: GlobalLayout
  }
]