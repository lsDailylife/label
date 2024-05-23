// import './assets/main.css' // 如果需要这个 CSS 文件，可以取消注释  
import './assets/iconfont/iconfont.css'  
import { createApp } from 'vue';  
import App from './App.vue';  
import store from './store'; // 引入 Vuex store
import Print from 'vue3-print-nb'
const app = createApp(App);  
 
app.use(store);  
app.use(Print)

app.mount('#app');