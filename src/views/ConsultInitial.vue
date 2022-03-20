<template>
  <div id="container">
    <img src="../assets/img/background-02.png" id="img1">
    <div>
      <head-title :is-consultant="isConsultant" style="position: absolute; top: 0; z-index: 11"></head-title>
    </div>
    <div style="margin-top: 110px; margin-bottom: 50px">
      <text style="font-size: 35px;color: white">欢迎您使用 &nbsp;</text>
      <text style="font-size: 35px;color:#d79120">新街口之狼 —— 智能投顾系统</text>
      <text style="font-size: 35px;color: white">&nbsp; !</text>
    </div>
    <div style="display: flex">
      <div style="float: left">
        <div id="left-title">投顾系统使用流程如下:</div>
        <div style="display: flex; margin-left: 450px">
          <img src="../assets/img/down.png" style="float: left; padding-right: 40px; height: 420px">
          <div style="float: right; position: relative; top: 70px">
            <text class="left-text">麦克风测试（可选）<br></text>
            <text class="left-text">回答问题，构建画像<br></text>
            <text class="left-text">选择投资组合并保存<br></text>
            <text class="left-text">进入“您的顾问”<br></text>
            <text class="left-text">查看您的历史选投 <br></text>
          </div>
        </div>
      </div>
      <div style="float: right; margin-top: 100px;">
        <div class="right-text" style="margin-bottom: 30px; font-weight: bold; font-size: 30px">请注意以下标记</div>
        <div class="right-text" style="border:2px solid #e0af5b; border-radius: 20px; width: 100px; margin: 0 auto">开始</div>
        <div class="right-text" style="margin-top: 10px">点击后进行语音输入<br></div>
        <img src="../assets/icon/click-white.png" style="max-width: 10%;height: auto">
        <div class="right-text">请在附近点击<br></div>
        <img src="../assets/icon/logo-white.png" style="max-width: 10%;height: auto">
        <div class="right-text">点击导航栏logo返回首页</div>
      </div>
    </div>
    <router-link to="/test">
      <div style="display: flex; margin-left: 46%; margin-top: 3%">
        <div style="float: left; font-size: 27px; color: white">继续 &nbsp; &nbsp;</div>
        <img src="../assets/icon/click-white.png" style="float: right; width: 4%; height: auto">
      </div>
    </router-link>
  </div>
</template>

<script>
import HeadTitle from "@/components/HeadTitle";

export default {
  name: "ConsultInitial",
  components:{ HeadTitle },
  data(){
    return{
      isConsultant: this.$store.state.headerViews === 'Consultant',
    }
  },
  beforeCreate() {
    this.$store.commit('changeViews', 'Consultant')
  }
}
</script>

<style scoped>
.right-text{
  font-size: 24px;
  margin-bottom: 20px;
  color: white;
}

.left-text{
  font-size: 27px;
  line-height: 70px;
  color: #e0af5b;
}

#left-title{
  margin-top: 10px;
  font-size: 30px;
  color: white;
  padding-left: 400px;
  margin-bottom: 40px;
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

</style>
