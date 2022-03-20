<template>

  <div style="height: 130px; width: 100%;">
    <img id="img1" src="../assets/img/footer.png">
    <div style="display: flex; position: relative; z-index: 2; bottom: 110px; width: 100vw">
      <div id="left">
        <!--      TODO: 完成链接跳转的路由-->
        <div style="color: white; font-size: 30px; padding-right: 20px">站内导航</div>
        <div style="padding-top:12px">
          <router-link to="/about"><href class="nav-text" style="color: white; z-index: 11">关于我们</href></router-link>

          <router-link to="/consultant"><href class="nav-text" style="color: white">您的顾问</href></router-link>

          <router-link to="/login"><href class="nav-text" style="color: white">用户中心</href></router-link>
        </div>

      </div>
      <!--    TODO：完成左右文字的布局-->
      <div id="right">
        <div style="color: white; font-size: 22px">联系我们</div>
        <div style="color: white; font-size: 18px; padding-top: 5px">NJUciticup@gmail.com</div>
        <div style="color: white; font-size: 18px; padding-top: 5px">南京大学 2022年 花旗杯参赛作品 智能投顾系统</div>
      </div>
    </div>
  </div>
<!--  <div style="height: 70px; text-align: center;">-->
<!--    <div class="text1" style="font-size: 20px">Discover your real needs.</div>-->
<!--    <div class="text1" style="margin-top: 5px">© 2022 新街口之狼 沪ICP备05009743号</div>-->
<!--  </div>-->
</template>

<script>
export default {
  name: "FootTitle",
  data(){
    return{
      text:'Discover your real needs.\n © 2022 新街口之狼 沪ICP备05009743号'
    }
  }
}
</script>

<style scoped>
#img1{
  position: relative;
  width: 100vw;
  height: auto;
  /*top: 90px;*/
  z-index: -2;
}

.nav-text{
  font-size: 20px;
  padding-right: 25px;
}

.text1{
  font-weight: bold;
  font-size: 17px;
  font-family: 微软雅黑;
  color: white;
  /*margin: 0 auto;*/
}

#left{
  float: left;
  position: relative;
  left: 300px;
  /*z-index: 2;*/
  /*left: 150px;*/
  /*bottom: 110px;*/
  /*width: 400px;*/
}

#right{
  float: right;
  position: relative;
  left: 790px;
  margin-right: 0;
  /*z-index: 2;*/
  /*bottom: 21vh;*/
  /*width: 400px;*/
}
</style>
