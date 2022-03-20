<template>
  <div id="container">
    <img src="../assets/img/background-02.png" id="img1">
    <div>
      <head-title :is-consultant="isConsultant" style="position: absolute; top: 0; z-index: 11"></head-title>
    </div>
    <div class="big-container" style="display: flex">
      <div class="aside" style="float: left; width: 22%; margin-top: 100px">
        <el-scrollbar>

          <!-- 滚动条要包裹的内容 -->
          <div style="cursor: pointer;" v-for="(res, index) in historyList"
               :key="index"
               @click="changeView(index)">
            <div style="background:linear-gradient(244deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%);
                      height:1px;
                      position: relative;
                      margin-top: 30px;"></div>
            <div class="default-text" :class="{active: index === current_index}" style="font-size: 2rem; margin-top: 20px; font-weight: bolder;">第 {{ index + 1 }} 次投资咨询</div>
            <div class="default-text" :class="{active: index === current_index}" style="font-size: 20px; margin: 26px 0 0 40px;text-align: left">● &nbsp; &nbsp; {{dateAndCount[index]?.date}}</div>
            <div class="default-text" :class="{active: index === current_index}" style="font-size: 20px; margin: 10px 0 0 40px;text-align: left">● &nbsp; &nbsp; 获取{{dateAndCount[index]?.count}}条个性信息</div>
          </div>

          <div style="background:linear-gradient(244deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%);
                      height:1px;
                      position: relative;
                      margin-top: 30px;">
          </div>
          <router-link to="/test"><div style="font-size: 80px; padding-top: 30px; color: white">+</div></router-link>

        </el-scrollbar>
      </div>
      <div class="data-body" style="float: right;width: 78%; height: 72vh">
        <el-menu
            id="nav"
            :default-active="active_index"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="transparent"
            text-color="#fff"
            active-text-color="#ffd04b"
            >
<!--          TODO:recommendRes全部改为historyList[index_history]-->
          <el-menu-item id="text-1" class="nav-text" index="1" style="margin-left: 150px">期货<br>&thinsp;{{ historyList[index_history]?.futures_percent * 100 }}%</el-menu-item>
          <el-menu-item id="text-2" class="nav-text" index="2" ><text>股票 <br>&thinsp;{{ historyList[index_history]?.stock_percent * 100 }}%</text></el-menu-item>
          <el-menu-item id="text-3" class="nav-text" index="3" >债券<br>  &thinsp;{{ historyList[index_history]?.bond_percent * 100 }}%</el-menu-item>
          <el-menu-item id="text-4" class="nav-text" index="4" style="margin-right: 300px">黄金<br>&thinsp;{{ historyList[index_history]?.gold_percent * 100 }}%</el-menu-item>
        </el-menu>
        <div style="background:linear-gradient(244deg,rgba(255,255,255,0) 0%,rgba(255,255,255,1) 50%,rgba(255,255,255,0) 100%);
                    height:2px;
                    position: relative;
                    margin-top: 30px;"></div>
        <el-scrollbar>
<!--          TODO:这里引入echarts-->
<!--          TODO：改为v-for渲染 渲染historyList[current_index].resList[index_res]-->
          <div style="display: block; margin-top: 20px" v-for="(result, index) in resList[index_res]" :key="index">
            <consultant-charts :date="xData[index]" :data1="yData_1[index]" :data2="yData_2[index]" :type="result.name" :code="result.code" ></consultant-charts>
<!--            <div class="chart-container" ref="chart"></div>-->
            <div class="vertical-line"></div>
            <div style="display: inline-block; position: relative; bottom: 80px; right:70px">

              <div v-if="index_res === 0" class="chart-text">同类产品占比: {{resList[index_res][index].percent}}</div>
              <div v-if="index_res === 0" class="chart-text">累计涨跌幅: &nbsp; {{resList[index_res][index].change}}</div>
              <div v-if="index_res === 0" class="chart-text">交易量:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{resList[index_res][index].volume}}</div>

              <div v-if="index_res === 1" class="chart-text">月均收益率: &nbsp; {{resList[index_res][index].addition_info.pbMRQ}}</div>
              <div v-if="index_res === 1" class="chart-text">滚动市盈率: &nbsp; {{resList[index_res][index].addition_info.peTTM}}</div>
              <div v-if="index_res === 1" class="chart-text">市净率:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{resList[index_res][index].npv}}</div>
              <div v-if="index_res === 1" class="chart-text">交易量:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{resList[index_res][index].addition_info.volume}}</div>

              <div v-if="index_res === 2" class="chart-text">振幅:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{resList[index_res][index].volt}}</div>
              <div v-if="index_res === 2" class="chart-text">市净率:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{resList[index_res][index].npv}}</div>
              <div v-if="index_res === 2" class="chart-text">交易量:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{resList[index_res][index].volume}}</div>
              <div v-if="index_res === 2" class="chart-text">累计涨跌幅: &nbsp; {{resList[index_res][index].change}}</div>

              <div v-if="index_res === 3" class="chart-text">同类产品占比: {{resList[index_res][index].percent}}</div>
              <div v-if="index_res === 3" class="chart-text">累计涨跌幅: &nbsp; {{resList[index_res][index].change}}</div>
              <div v-if="index_res === 3" class="chart-text">交易量:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{resList[index_res][index].volume}}</div>

            </div>
          </div>

        </el-scrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import HeadTitle from "@/components/HeadTitle";
import ConsultantCharts from "@/components/ConsultantChart";
// import request from "@/utils/request";
import { getAllAdvice, getCount, getDate} from "@/utils/getData";

export default {
  name: "Consultant",
  components:{ConsultantCharts, HeadTitle },
  data(){
    return{
      active_index: '1',
      isConsultant: this.$store.state.headerViews === 'Consultant',
      //每次推荐返回的结果包括四大理财产品的推荐结果
      // TODO:根据接口文档修改数据结构，将推荐结果绑定至list，前端图表改为v-for渲染
      recommendRes: {
        //期货数据结构
        futures:{},
        //股票数据结构
        shares:{},
        //债券数据结构
        bonds:{},
        //黄金数据结构
        gold:{},
        //保存四种理财产品结果数组的list，下标0123对应fsbg
        resList: [],
        //四种理财产品的比例
        ratio: 0,
        //投资咨询的日期
        date: 'date',
        //用户答题的数目
        count: 0,
      },
      //保存四种理财产品的数组VO，即[futures, shares, bonds, gold]
      res:[0],
      //保存四种理财产品结果数组的listVO，下标0123对应fsbg
      resList: [],
      //recommendRes的list，存储历次顾投结果
      historyList: [],
      //存储时间日期的数组
      dateAndCount: [{
        date: '123',
        count: 12,
      }],
      //res的下标
      index_res: 0,
      //historyList的下标
      index_history: 0,
      //echarts横纵坐标值
      yData_1: [],
      yData_2: [],
      xData: [],
      //投资列表的下标，默认激活第一位
      current_index: 0,
    }
  },
  methods:{
    initialize(){
      const self = this;
      getAllAdvice(localStorage.getItem('userid')).then(res=> {
        // TODO: 如果用户没有推荐数据，则跳转至consultantInitial
        if(res.data == '') self.$router.push('/consultant-initial')
        const recommendList = res.data;
        console.log(recommendList);
        self.historyList = recommendList;
        // console.log('historyList: ');
        // console.log(self.historyList[self.index_history].futures_percent);
        self.resList[0] = recommendList[self.index_history].futureInfoVOList;
        self.resList[1] = recommendList[self.index_history].stockInfoVOList;
        self.resList[2] = recommendList[self.index_history].bondInfoVOList;
        self.resList[3] = recommendList[self.index_history].goldInfoVOList;
        self.initializeCharts(self.resList, this.xData, this.yData_1, this.yData_2, 0)
        // console.log('length' + self.resList)
      })
      getCount(localStorage.getItem('userid')).then((res) =>{
        //初始化答题数
        console.log(res.data)
        //挂载测试数据
        for (let i = 0; i < res.data.length; i++) {
          this.dateAndCount[i].count = res.data[i]
        }
      })
      getDate(localStorage.getItem('userid')).then((res) =>{
        //初始化答题日期
        console.log(res.data)
        //挂载测试数据
        for (let i = 0; i < res.data.length; i++) {
          this.dateAndCount[i].date = res.data[i]
        }
      })
    },

    handleSelect(key, keyPath) {
      //menu的key是从1开始
      this.index_res = Number(key) - 1;
      console.log(this.index_res)
      console.log(key, keyPath);
      this.initializeCharts(this.resList, this.xData, this.yData_1, this.yData_2, this.index_res)
      console.log(this.resList[this.index_res])
    },

    changeView(index){
      // 激活点击的列表
      this.current_index = index;
      // 修改index_history
      this.index_history = index;
      // 将res里的结果改为第index的结果
      const tempRes = [this.historyList[index].futureInfoVOList, this.historyList[index].stockInfoVOList, this.historyList[index].bondInfoVOList, this.historyList[index].goldInfoVOList];
      //更新resListVO
      this.resList = tempRes;
      console.log(this.resList);
      //更新echarts
      this.initializeCharts(this.resList, this.xData, this.yData_1, this.yData_2, 0)
      console.log('修改视图，查看第' + index + '次结果！')
    },

    initializeCharts(data, xAxis, yAxis1, yAxis2, index){
      //先清空
      xAxis = []
      yAxis1 = []
      yAxis2 = []
      //index表示初始化哪一类的数据，0123：fsbg
      let x;
      let y1;
      let y2;
      for (let i = 0; i < data[index].length; i++) {
        // console.log(data[index][i].k_info);
        x = [];
        y1 = [];
        y2 = [];
        for (let j = 0; j < data[index][i].k_info.length; j++) {
          const date = data[index][i].k_info[j].date.substr(0, 10)
          x.push(date)
          y1.push(data[index][i].k_info[j].open)
          y2.push(data[index][i].k_info[j].close)
        }
        xAxis.push(x);
        yAxis1.push(y1);
        yAxis2.push(y2);
        console.log('execute!')
      }
      this.xData = xAxis;
      this.yData_1 = yAxis1;
      this.yData_2 = yAxis2;
      console.log(this.xData, this.yData_1, this.yData_2)
    }
  },
  created() {
    this.$store.commit('changeViews', 'Consultant');
    this.initialize();
  },
  //将四种理财产品的值传进res数组
  mounted() {
    // console.log(testData1.count, testData2.count)
    // console.log(this.$store.state.userId)
    // console.log(localStorage.getItem('userid'))
    // console.log(this.historyList[0].count)
  }
}
</script>

<style scoped>

#nav{
  /*width: 80%;*/
  margin-top: 120px;
  text-align: justify;
  justify-content: space-between;
  border: none;
}

.el-submenu .el-submenu__title{
  border: none;
}

.el-menu-item.is-active{
  font-size: 40px;
  font-weight: bold;
  border: none;
}

.nav-text{
  font-family: '楷体';
  font-size: 24px;
  line-height: 40px;
}

#img1{
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center bottom;
  display: block;
  position: fixed;
  bottom: 0;
  top: 0;
  right: 0;
  left: 0;
  z-index:-11
}

.default-text{
  color: white;
}

.active{
  color: #ffd04b;
  font-weight: bold;
}

.vertical-line{
  background:#E7E7E7;/*背景色为浅灰色*/
  width:1.6px;/*设置宽高*/
  height:200px;
  position:relative;/*调整位置*/
  right:130px;
  bottom: 50px;
  display: inline-block;
}


.chart-text{
  font-size: 20px;
  color: white;
  padding-bottom: 20px;
  text-align: left;
}
</style>

<style>
/* element滚动条组件 隐藏水平滚动条 */
.sidebar-wrapper .el-scrollbar__wrap {
  overflow-x: hidden;
}
.el-scrollbar {
  height: 100%;
}
.el-scrollbar__wrap {
  overflow: scroll;
  width: 100%;
  height: 70vh;
}
</style>
