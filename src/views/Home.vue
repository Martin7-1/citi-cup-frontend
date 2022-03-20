<template>
  <div>
    <div class="header">
      <head-title :is-home="isHome" style="position: absolute; width:100%; top: 0; z-index: 4"></head-title>
    </div>
    <video id="v1" autoplay loop muted>
      <source id="v2" src="../assets/video/render-background.mp4" type="video/mp4"  />
    </video>
  <div id="big_box">
    <div class="text1">投资顾问，是一种服务。</div>
    <div class="text2">
      <text>无需复杂操作，</text>
      <text style="color: #dbae58">语音输入</text>
      <text>或</text>
      <text style="color: #dbae58">简单点选</text>
    </div>
    <div class="text3">
      <text style="color: #dbae58">集成学习 + 深度学习</text>
      <text>即可精准刻画投资者画像</text>
    </div>
    <div class="text4">
      <text>实时、快速、便捷的</text>
      <text style="color: #dbae58">组合推荐系统</text>
      <text>让您如虎添翼</text>
    </div>
    <div style="text-align: right">
      <el-button @click="$router.push('/test')" size="large" class="button" type="warning" round style="background:-webkit-gradient(linear, 0 0, 50% 0, from(#F9EC9E), to(#BB8020));">
        立即体验&nbsp;
        <img src="../assets/icon/click-white.png" style="height: 20px; width: auto">
      </el-button>
    </div>
<!--    <img src="../assets/gifs/down.gif" style="margin-top: 34rem; min-width: 100px">-->
    </div>
  </div>
<!--  <div><img src="../assets/img/background-02.png" id="img1">-->
<!--  asdasdsa</div>-->

<!--  <div >1231234</div>-->

<!--  <div>-->
<!--    <foot-title></foot-title>-->
<!--  </div>-->

</template>

<script>
import HeadTitle from "@/components/HeadTitle";
// import FootTitle from "@/components/FootTitle";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  components: {
    // FootTitle,
    HeadTitle,
  },
  data(){
    return{
      isHome: this.$store.state.headerViews === 'Home',
    }
  },
  beforeCreate() {
    this.$store.commit('changeViews', 'Home')
  }
}
</script>

<style scoped>
/*.header{*/
/*  height: 9vh;*/
/*}*/
#img1{
  width: 100%;
  height: 120vh;
  object-fit: cover;
  object-position: center bottom;
  display: block;
  position: absolute;
  bottom: 0;
  top: 100vh;
  z-index:-8
}

#big_box{
  top: 0;
  /*width: 100vw;*/
  height: 100vh;
}

#v1{
  width: 100%;
  /*height: 67rem;*/
  object-fit: contain;
  /*object-position: center bottom;*/
  /*height: 100vh;*/
  display: block;
  /*opacity: 0.9;*/
  position: absolute;
  right: 0px;
  top: 0px;
  /*min-width: 100%;*/
  /*min-height: 100%;*/
  z-index:-11
}
#v2{
  min-width: 100%;
  min-height: 100%;
  height: auto;
  width: auto;
}
.text1{
  text-align: right;
  position: relative;
  /*z-index: 2;*/
  font-family: "思源宋体 CN Heavy";
  font-size: 85px;
  font-weight: bold;
  color: #fffffd;
  top: 16rem;
  right: 10rem;
  /*left: 13rem;*/
  /*margin-left: 28.5%;*/
  /*margin-top: 14.5%;*/
}
.text2{
  text-align: right;
  position: relative;
  /*z-index: 2;*/
  font-family: "微软雅黑";
  font-size: xx-large;
  font-weight: bold;
  color: #fffffd;
  right: 17rem;
  /*left: 21.5rem;*/
  top: 19rem;
}
.text3{
  text-align: right;
  position: relative;
  /*z-index: 2;*/
  /*font-family: "Adobe Arabic";*/
  font-size: xx-large;
  font-weight: bold;
  color: #fffffd;
  right: 17rem;
  /*left: 16.8rem;*/
  top: 20rem;
}
.text4{
  text-align: right;
  position: relative;
  /*z-index: 2;*/
  /*font-family: "Adobe Arabic";*/
  font-size: xx-large;
  font-weight: bold;
  color: #fffffd;
  right: 17rem;
  /*left: 15.8rem;*/
  top: 21rem;
}
.button{
  position: relative;
  /*z-index: 2;*/
  /*font-family: "Adobe Arabic";*/
  font-size: 20px;
  font-weight: bold;
  right: 17rem;
  top: 25rem;
}
.text6{
  /*position: absolute;*/
  z-index: 3;
  /*font-family: "Adobe Arabic";*/
  position: relative;
  font-size: xx-large;
  font-weight: bold;
  color: #fffffd;
  margin-left: -82%;
  margin-top: 10%;
  bottom: 20px;
}
</style>
