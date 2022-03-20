<template>
<!--  <home></home>-->
<!--  <login></login>-->
<!--  <Register></Register>-->
<!--  <test-view></test-view>-->
<!--  <quiz></quiz>-->
<!--  <About></About>-->
<!--  <consultant></consultant>-->
<!--  <foot-title></foot-title>-->
  <router-view></router-view>
</template>
<script>

// import Home from "@/views/Home";
// import FootTitle from "@/components/FootTitle";
// import FootTitle from "@/components/FootTitle";
// import About from "@/views/About";
// import Consultant from "@/views/Consultant";
// import Quiz from "@/views/Quiz";
// import Login from "@/views/Login";
// import Register from "@/views/Register";
// import TestView from "@/views/Test"

export default {
  name: 'App',
  components: {
    // FootTitle,
    // Consultant,
    // About,
    // Quiz,
    // FootTitle,
    // TestView,
    // Login,
    // Register
    // Home
    // eslint-disable-next-line vue/no-unused-components
    // HeadTitle,
  }
}
</script>

<style>
.router-link-active {
  text-decoration: none;
}
/*初始化*/
* {
  /*overflow:hidden;*/
  margin: 0px;
  padding: 0px;
  text-decoration: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif, 方正苏新诗柳楷简体;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
