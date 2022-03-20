<template>
  <el-card class="box-card" shadow="always">
    <div class="text item" id="login" v-if="isLogin">{{ text }}</div>
    <div class="text item" id="quiz" v-if="!isLogin">{{ text }}</div>
  </el-card>
</template>

<script>
export default {
  name: "RobotNotice",
  data(){
    return{
      //实际上的text从后端传来
    }
  },
  props: ['text', 'isLogin']
}
</script>

<style scoped>
#quiz{
  padding: 0px 0;
  text-align: left;
}

#login{
  padding: 70px 0;
  vertical-align: central;
  text-align: center;
}

.text {
  font-size: 25px;
  margin: auto;
  color: white;
  font-weight: bold;
}

.item {
  white-space: pre-wrap;
}

.box-card {
  /*box-shadow: 0 20px 4px rgba(0, 0, 0, .12), 0 0 60px rgba(0, 0, 0, .04);*/
  border-radius: 10px;
  width: 360px;
  height: 240px;
  opacity: 0.6;
  background-color: rgb(204, 144, 30);
  border: 3px solid white;
  /*vertical-align: central;*/
  display:table;
}
</style>
