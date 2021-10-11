import { createApp } from 'vue'
import App from './App.vue'
import dayjs from "dayjs"

createApp(App)
// console.log('1')
const app = createApp(App);
// const app = createApp({})
app.config.globalProperties.$dayjs=dayjs;

app.mount('#app')