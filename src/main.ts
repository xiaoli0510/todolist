import './assets/main.css'

import { createApp } from 'vue'

import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// import axios from 'axios';
// Vue.prototype.$axios axios;

import App from './App.vue'
import router from './router'

import { mockXHR } from "@/mock/mock";

// 判断开发环境
if(import.meta.env.MODE=="mock"){
	mockXHR();
}


const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus, { size: 'small', zIndex: 3000 })
app.use(router)

app.mount('#app')
