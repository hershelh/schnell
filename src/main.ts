import { setupLayouts } from 'virtual:generated-layouts'
import App from './App.vue'
import routes from '~pages'
import './assets/main.css'

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
})

const app = createApp(App)

app.use(createPinia())
  .use(router)
  .mount('#app')
