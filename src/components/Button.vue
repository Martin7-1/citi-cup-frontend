<template>
  <el-button>{{ text }}</el-button>
</template>

<script>
export default {
  name: "Button",
  props:{
    text: String
  }
}
</script>

<style scoped lang="less">
@import "src/style/readme";

.el-button{
  color: white;
  font-size: medium;
  background-color: unset;
  width: 100px;
  border-color: @text-selected;
}

.el-button:hover{
  color: white;
  background-color: @text-selected;
}
.el-button:focus{
  color: white;
  background-color: @text-selected;
}
</style>