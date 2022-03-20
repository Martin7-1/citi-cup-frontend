<template>
  <div style="position: relative ; top: 0; width: 100%; height: 10%">
    <div style=" width: 100%; height: 100%;">
      <div id="home" v-if="isHome" >
        <router-link to="/">
          <div id="icon1">
            <img src="../assets/icon/logo-white.png" style="height: 100%; width: auto">
          </div>
        </router-link>
        <div class="left">
          <div class="text1" style="margin-top: 3px;font-size: 28px;">新街口之狼 ── 智能投顾系统</div>
          <hr class="text1" style="width: 400px;margin-top: 50px; border:none;border-top:2px solid white;" />
          <div class="text1" style="margin-top: 55px;font-size: 35px;">Discover your real needs.</div>
        </div>
      </div>
      <div id="others" v-if="!isHome">
        <router-link to="/">
          <div id="icon2">
            <img src="../assets/icon/logo-white.png" style="height: 100%; width: auto">
          </div>
        </router-link>
        <div>
            <div class="text-about" style="margin-top: 3px;font-size: 30px;" v-if="isAbout">关于我们</div>
            <div class="text-about" style="margin-top: 3px;font-size: 30px;" v-if="isConsultant">历史</div>
            <div class="text-about" style="margin-top: 3px;font-size: 30px;" v-if="isQuiz">选投</div>
            <div class="text-about" style="margin-top: 3px;font-size: 30px;" v-if="isTest">测试</div>
          <div class="text-about" style="margin-top: 3px;font-size: 30px;" v-if="isLogin2">登录</div>
          <div class="text-about" style="margin-top: 3px;font-size: 30px;" v-if="isRegister">注册</div>
        </div>
      </div>
<!--      TODO：加上路由和跳转链接-->
      <div class="href">
        <div class="nav-div" id="about" style="margin-right: 30px">
          <router-link to="/about"><div class="text2">关于我们</div></router-link>
          <hr class="line" style="width: 100px; border:none;border-top:4px solid #d29126;" />
        </div>
        <div class="nav-div" id="advisor" style="margin-right: 30px">
          <router-link to="/consultant"><div class="text2">您的顾问</div></router-link>
          <hr class="line" style="width: 100px; border:none;border-top:4px solid #d29126;" />
        </div>
        <div class="nav-div" id="notLogin">
          <router-link to="/login">
            <div class="text2" v-if="!isLogin">登录注册</div>
          </router-link>
          <div id='userid' class="text2"  v-if="isLogin" @click="logout">
            {{this.username}}
          </div>
          <!--      TODO：icon2补上img-->
          <div class="icon2">
            <img v-if="!isLogin" src="../assets/icon/click-white.png" style="height: 80%; width: auto;margin-top: 5px">
            <img v-else src="../assets/icon/user-gold.png" style="width: 100%;margin-top: 5px">
          </div>
          <hr class="line" style="width: 150px; border:none;border-top:4px solid #d29126;" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {ElMessage} from "element-plus";
export default {
  name: "HeadTitle",
  created() {
    this.isLogin = localStorage.getItem('user') != null;
    // this.username = this.$store.state.username;
  },
  data(){
    return{
      isNotLogin: true,
      isLogin: false,
      username:  localStorage.getItem('username'),
      // isHome: this.$store.state.headerViews === 'Home',
      // isAbout: this.$store.state.headerViews === 'About',
      // isConsultant: this.$store.state.headerViews === 'Consultant',
      // isQuiz: this.$store.state.headerViews === 'Quiz',
    }
  },
  props: ['isHome', 'isAbout', 'isConsultant', 'isQuiz', 'isTest', 'isLogin2', 'isRegister'],
  methods:{
    logout(){
      localStorage.clear();
      ElMessage.success('登出成功');
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>
* {
  text-decoration: none;
}
#icon1{
  width: 78px;
  height: 78px;
  position: absolute;
  z-index: 2;
  margin-left: 30px;
  margin-top: 8px;
}

#icon2{
  width: 50px;
  height: 50px;
  position: absolute;
  z-index: 2;
  left: 30px;
  margin-top: 10px;
}

.text1{
  position: absolute;
  z-index: 2;
  font-family: "Adobe Arabic";
  font-weight: bold;
  color: #fffffd;
  margin-left:120px;
}

.text-about{
  position: absolute;
  z-index: 2;
  font-family: "Adobe Arabic";
  font-weight: bold;
  color: #fffffd;
  left: 100px;
  top: 12px
}

.href{
  /*width: 30vw;*/
  margin-top: 15px;
  position: absolute;
  z-index: 2;
  /*margin-left: 73vw;*/
  /*left: 73vw;*/
  right: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: right;
}

.text2{
  z-index: 2;
  font-family: "Adobe Arabic";
  font-size: 25px;
  font-weight: normal;
  color: #fffffd;
  /*margin-left: 88%;*/
  margin-top: 2px
}

.nav-div{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.line{
  position: absolute;
  z-index: 2;
  margin-top: 65px;
  color: #d29126;
}

.icon2{
  width: 10%;
  height: 80%;
  position: absolute;
  /*left: 290px;*/
  z-index: 2;
  bottom: 10px;
  /*font-size: x-large;*/
  /*color: #628EB6;*/
  margin-left: 30%;
  margin-top: 4px
}
#userid:hover{
  cursor: pointer;
}
#userid{
  font-size: 30px;
}
</style>
