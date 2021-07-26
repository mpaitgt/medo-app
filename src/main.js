import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import BaseInput from './components/global/BaseInput'
import Layout from './components/layout/Layout'

const app = createApp(App)

app.component('BaseInput', BaseInput)
app.component('Layout', Layout)

app.use(store).use(router).mount('#app')
