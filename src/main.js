import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';

import 'element-plus/lib/theme-chalk/index.css';
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import 'amfe-flexible';
const app = createApp(App)
app.use(ElementPlus)

app.use(router)
app.mount('#app')