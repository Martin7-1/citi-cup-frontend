<template>
  <el-popover
      placement="top-start"
      title="队员简介"
      :width="400"
      trigger="hover"
      :content="content"
  >
    <template #reference>
      <div class="memberTag"
           style=" border:1px transparent solid; height: 180px; width:100px; border-radius: 10px; background: rgba(36, 34, 26,0.7)" >
        <img style="margin-top:20px;max-width: 85px" :src="url">
        <br>
        <span style="display:inline-block; margin-top: 15px; font-size: 20px; color: white; font-weight: bold;"> {{name}}</span>
      </div>
    </template>
  </el-popover>

</template>

<script>
export default {
  name: "smallMemberTag",
  props:["name", 'url', 'content']
}
</script>

<style scoped>
.memberTag{
  margin-left: 10px;
  margin-top: 10px;
}
</style>
