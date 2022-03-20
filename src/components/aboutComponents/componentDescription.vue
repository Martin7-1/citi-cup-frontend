<template>

  <div class="is-flex">
    <div>
    <img src="../../assets/icon/circle-gold.png" style="max-height: 100px">

      <br>

      <div style="margin-top: 20px">
           <span >{{title}}</span>
      </div>
    </div>

    <div style="display: flex; border: 3px solid white; width: 280px;height: 200px; margin-left: 20px">
      <span style="text-align: left;font-weight: normal;font-size: 20px; position: relative;top: 27px; padding-right: 20px; padding-left: 20px"> {{text}}</span>
    </div>
 </div>

</template>

<script>
export default {
  name: "componentDescription",

  props:["text", 'title']
}
</script>

<style scoped>
.is-flex{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  margin-left: 10px;
}
span{
  font-family: 'Adobe Arabic';
  font-size: 20px;
  font-weight: bold;
  color: white;
}
</style>
