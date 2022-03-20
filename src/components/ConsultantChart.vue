<template>
  <div class="chart-container" ref="chart"></div>
</template>

<script>
export default {
  name: "ConsultantCharts",
  data(){
    return{
      type: '股票',
    }
  }
}
</script>

<!--echarts引入-->
<script setup>
import { onMounted, reactive, ref } from "@vue/runtime-core"
import * as echarts from 'echarts'
import {onUpdated} from "vue";

//1.通过vue3.x中的refs标签用法，获取到container容器实例
const chart = ref(null);
//2.定义在本vue实例中的echarts实例
let myEcharts = reactive({});
//3.准备数据
// let base = +new Date(1968, 9, 3);
// let oneDay = 24 * 3600 * 1000;
// TODO:从consultant里将值传给date和data
//4.定义props和emits
// eslint-disable-next-line no-unused-vars,no-undef
const props = defineProps(['data1', 'data2', 'date', 'type', 'code'])
// let date = [];
// let data = [Math.random() * 300];
// for (let i = 1; i < 20000; i++) {
//   var now = new Date((base += oneDay));
//   date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
//   data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
// }
// let type = '股票'

//5.定义好echarts的配置数据
let option = {
  tooltip: {
    trigger: 'axis',
    position: function (pt) {
      return [pt[0], '10%'];
    }
  },
  title: {
    left: 'center',
    // text: props.type +' - ' + props.code,
    text:  props.code,
    textStyle: {
      fontSize: 24,
      fontWeight: 'bolder',
      color: '#fffffd'
    },
    // text: 'xx股票走势图'
  },
  toolbox: {
    feature: {
      dataZoom: {
        yAxisIndex: 'none'
      },
      restore: {},
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: props.date
  },
  yAxis: [
    {
      min: 'dataMin',
      max: 'dataMax',
      type: 'value',
      boundaryGap: [0, '100%']
    },
    {
      min: 'dataMin',
      max: 'dataMax',
      type: 'value',
      boundaryGap: [0, '100%']
    }
  ],
  dataZoom: [
    {
      type: 'inside',
      start: 0,
      end: 100
    },
    {
      start: 0,
      end: 100
    }
  ],
  series: [
    {
      name: '数据可视化',
      type: 'line',
      symbol: 'none',
      sampling: 'lttb',
      itemStyle: {
        color: 'rgb(255, 70, 131)'
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 158, 68)'
          },
          {
            offset: 1,
            color: 'rgb(255, 70, 131)'
          }
        ])
      },
      data: props.data1
    },
    {
      name: '数据可视化',
      type: 'line',
      symbol: 'none',
      sampling: 'lttb',
      itemStyle: {
        color: 'rgb(255, 70, 131)'
      },
      areaStyle: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
          {
            offset: 0,
            color: 'rgb(255, 158, 68)'
          },
          {
            offset: 1,
            color: 'rgb(255, 70, 131)'
          }
        ])
      },
      data: props.data2
    },
  ]
}

//onMounted钩子函数
onMounted(()=>{
  //初始化echarts
  init();
})

onUpdated(()=>{
  //3.初始化container容器
  if (myEcharts != null && myEcharts !== "" && myEcharts !== undefined) {
    myEcharts.dispose();//销毁
  }
  console.log(props.date)
  init()
})

//初始化echarts实例方法
const init = ()=>{
  option.series[0].data = props.data1;
  option.series[1].data = props.data2;
  option.xAxis.data = props.date;
  if(props.type != undefined) option.title.text = props.type + ' - ' + props.code;
  else option.title.text = props.code
  //3.初始化container容器
  myEcharts= echarts.init(chart.value);
  //5.传入数据
  myEcharts.setOption(option);
  //additional：图表大小自适应窗口大小变化
  window.onresize = ()=>{
    myEcharts.resize();
  }
}
</script>

<style scoped>

.chart-container{
  position: relative;
  right: 130px;
  box-sizing: border-box;
  height: 300px;
  width: 50%;
  /*margin: 0 auto;*/
  display: inline-block;
}

</style>
