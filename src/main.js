import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

import { createPinia } from 'pinia'
import { authStore } from '@/store/authStore'

app.use(router)
app.use(createPinia())
app.config.globalProperties.$auth = authStore();
app.mount('#app')
