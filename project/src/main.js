import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import $ from 'jquery'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueForceNextTick from 'vue-force-next-tick'


createApp(App).use(router,$,VueAxios,axios,VueForceNextTick).mount('#app')
