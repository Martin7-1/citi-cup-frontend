import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


import ECharts from 'vue-echarts'
import { use } from "echarts/core"

import 'echarts-wordcloud';
import store from './store'
import router from './router/index'
import {
    CanvasRenderer
} from 'echarts/renderers'
import {
    PictorialBarChart,
    BarChart
} from 'echarts/charts'
import {
    GridComponent,
    TooltipComponent,
} from 'echarts/components'

// import './utils/rem'

use([
    CanvasRenderer,
    BarChart,
    GridComponent,
    TooltipComponent,
    PictorialBarChart,
])

const app = createApp(App)
app.use(store)
app.use(router)
app.use(ElementPlus)
app.component('v-chart', ECharts)
app.mount('#app')


