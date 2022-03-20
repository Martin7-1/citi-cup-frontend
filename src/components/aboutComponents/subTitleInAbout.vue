<template>
  <div class="is-flex" style="margin-top: 150px">
    <img class="subTitle-img" src="../../assets/img/title-line1.png">
    <span style="padding-left: 30px;padding-right: 30px">{{text}}</span>
    <img class="subTitle-img" src="../../assets/img/title-line2.png">
  </div>
</template>

<script>

export default {
  name: "subTitleInAbout",
  data(){
    return{

    }
  },
  props: ['text']
}
</script>

<style scoped>

span{
  font-family: 'Adobe Arabic';
  font-size: 40px;
  font-weight: bold;
  color: white;
}
</style>
