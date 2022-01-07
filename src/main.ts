// import 'amfe-flexible'
import '/@/design/index.less'

import { createApp } from 'vue'
import App from './App.vue'
import VConsole from 'vconsole'
/* eslint-disable */
const vConsole = new VConsole()
import Vant from 'vant'
import 'vant/lib/index.css'
createApp(App).use(Vant).mount('#app')
