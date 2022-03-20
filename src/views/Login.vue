<template>
  <div id="container">
    <img src="../assets/img/background-02.png" id="img1">
    <div>
      <head-title :isNotLogin=true style="position: absolute; top: 0; z-index: 11" :is-login2="isLogin"></head-title>
    </div>
    <div class="robot-display">
      <img src="../assets/gifs/robot-sleep.gif"/>
    </div>
    <login-notice id="card1" :text="textMsg" :is-login="isLogin"></login-notice>
    <el-card class="card2" shadow="hover">
      <div class="titleText">登录</div>
      <div class="items">
        <input type="text" placeholder="手机号" v-model="phone"/>
        <input type="password" placeholder="密码" v-model="password"/>
        <div style="text-align: left">
          <input
              type="text"
              placeholder="验证码"
              v-model="inputCode"
              style="width: 50%"
          />
          <img
              width="90"
              height="30"
              :src="codeSrc"
              @click="generateCode()"
              style="float: right; margin-top: 10px"
          />
        </div>
        <div style="width: 80%">
          <button style="cursor: pointer;" class="btn login" @click.prevent="login">
            登录
          </button>
        </div>
        <div style="width: 80%;">
          <router-link to="/register">
            <button style="cursor: pointer;" class="btn login">
              前往注册
            </button>
          </router-link>
        </div>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      isLogin: this.$store.state.headerViews === 'Login',
    }
  },
  beforeCreate() {
    this.$store.commit('changeViews', 'Login')
  },
}
</script>

<script setup>
import LoginNotice from "@/components/RobotNotice";
import HeadTitle from "@/components/HeadTitle";
import {ElMessage} from "element-plus";
import {computed, onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import { useStore } from "vuex";
import {login as loginApi} from "../api/user";

const isLogin = true;
const textMsg = '等待登录唤醒...';
let router = useRouter();
let store = useStore();
// verify code
const codeSrc = ref("");
const code = ref("");

function randomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function randomColor(m, n) {
  const r = randomInt(m, n);
  const g = randomInt(m, n);
  const b = randomInt(m, n);
  return `rgb(${r}, ${g}, ${b})`;
}

function randomNum(min, max) {
  return Math.random() * (max - min) + min;
}

function generateCode() {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const letterArr = "123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(
      ""
  );
  let codeText = "";
  canvas.width = 120;
  canvas.height = 40;
  ctx.globalAlpha = 0.6;
  ctx.fillStyle = randomColor(200, 250);
  ctx.fillRect(0, 0, 120, 40);
  ctx.globalAlpha = 1;
  for (let i = 0; i < 4; i++) {
    const targetChar = letterArr[randomInt(0, letterArr.length - 1)];
    ctx.textBaseline = "middle";
    ctx.fillStyle = randomColor(5, 90);
    ctx.translate((120 / 4) * (i + 0.2), 15);
    ctx.scale(1.5, 1.5);
    ctx.rotate((Math.PI / 180) * randomNum(-40, 40));
    ctx.fillText(targetChar, 0, 0);
    //reset
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    codeText += targetChar;
  }
  code.value = codeText.toLowerCase();
  codeSrc.value = canvas.toDataURL();
}

onMounted(() => {
  generateCode();
});
// username, password and verify code
const phone = ref("");
const password = ref("");
const inputCode = ref("");

// const store = useStore();
function login() {
  if (!nameAndPasswd.value) {
    ElMessage.error("请正确输入用户名和密码！");
    return;
  }
  if (inputCode.value.toLocaleLowerCase() !== code.value.toLowerCase()) {
    ElMessage.error("验证码错误！");
    return;
  }
  loginApi({
    phone: phone.value,
    password: password.value,
  }).then((data) => {
    if (data.code === 200) {
      ElMessage.success("登录成功！");
      console.log('user', data.data);
      store.state.userId = data.data.id;
      store.state.username = data.data.userName;
      localStorage.setItem('userid', data.data.id);
      localStorage.setItem('username', data.data.userName);
      localStorage.setItem('user', 'skdhjakshdiwqhio19289ejoksladkla');
      console.log(localStorage.getItem('user'));
      router.push('/');
    } else {
      ElMessage.error(data.msg);
    }
  });
}

const nameAndPasswd = computed(() => {
  return phone.value !== "" && password.value !== "";
});
</script>

<style scoped>
#container {
  position: fixed;
  right: 0px;
  bottom: 0px;
  min-width: 100%;
  min-height: 100%;
  background-color: #cbecf5;
  z-index: -12;
}

#img1 {
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
  z-index: -11
}

#v1 {
  position: fixed;
  right: 70%;
  top: 5%;
  /*float: left;*/
  height: 700px;
  width: auto;
  /*padding-right: -123px;*/
  /*margin-right: 60%;*/
  /*right: 30%;*/
  /*margin-top: 2%;*/
  z-index: 2;
}

#card1 {
  float: right;
  position: fixed;
  left: 21.5%;
  top: 30%;
  z-index: 12;
}

.robot-display {
  float: right;
  position: fixed;
  left: 4%;
  top: 5%;
  z-index: 12;
  /*height: 100%;*/
  /*width: 33vw;*/
  /*background-color: #BB8020;*/
}

/*.robot-display img{*/
/*  height: 50%;*/
/*  !*object-fit: contain;*!*/
/*}*/

.titleText {
  font-size: 50px;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  color: black;
  margin-top: 20px;
  margin-bottom: 50px;
}

.item {
  padding: 18px 0;
}

.items {
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  justify-items: center;
}

::placeholder {
  font-weight: lighter;
}

.items input {
  width: 80%;
  font-size: 15px;
  text-align: left;
  border-radius: 10px;
  border: 0.1px solid rgba(0, 0, 0, 0.1);
  padding: 16px 16px;
  /* background-color: rgba(197, 252, 234, 0.1); */
  box-shadow: 2px 2px 2px 2px #00000018;
}

.items input:hover,
.items input:focus {
  width: 85%;
  box-shadow: 8px 8px 8px 8px #00000018;
}

.card2 {
  float: left;
  position: fixed;
  left: 56%;
  top: 15%;
  z-index: 12;
  width: 500px;
  height: 605px;
  border-radius: 40px;
}

.btn {
  border: 0px;
  margin: auto 5%;
  padding: 10px 20px;
  /* background-color: white; */
  border: 1px solid rgba(0, 0, 0, 0.1);

  border-radius: 20px;
  font-size: 16px;
  /* color: white; */
  width: 100%;
  height: 45px;
  font-weight: 400;
  text-decoration: none;
}

</style>
<style>
.el-input__inner {
  border-radius: 12px;
  border: 2px solid #014eb8
}
</style>
