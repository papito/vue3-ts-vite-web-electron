import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import '../public/css/font-awesome.min.css'
import '../public/css/style.css'

import Index from './components/Index.vue'
const routes = [{
  path: '/',
  name: 'index',
  component: Index
}]

const router = createRouter({
  history: createWebHashHistory(),
  // history: process.env.IS_ELECTRON ? createWebHashHistory() : createWebHistory(),
  routes,
})

const app = createApp(Index)

app.use(router)
app.mount('#app')

console.log('Web App started')
