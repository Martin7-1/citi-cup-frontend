<template>
  <div v-if="url" class="check-box" @click="$emit('option-click', label)">
    <el-radio v-model="isCurrentOption" :label="true" >
      <div>
        <img :src="url" >
<!--        <span :style="optionStyle">{{ text }}</span>-->
        <span>{{ text }}</span>
      </div>
    </el-radio>
  </div>
<!--  <span v-else @click="$emit('option-click', label)" :style="optionStyle">-->
  <span v-else @click="$emit('option-click', label)">
    {{ text }}
  </span>
  <br>
</template>

<script>
export default {
  name: "QuizOption",
  emits: ['option-click'],
  props: {
    url: String,
    text: String,
    label: String
  },
  data(){
    return {
      isCurrentOption: false,
    }
  },
  computed:{
    optionStyle() {
      return this.isCurrentOption ? {color: '#D79120'} : {};
    }
  },
  watch: {
    '$store.state.currentOption': function(){
      this.isCurrentOption = this.label === this.$store.state.currentOption;
    }
  }
}
</script>

<style scoped lang="less">

@import "src/style/readme";

.check-box{
  width: 320px;
  height: 200px;
  text-align: center;
  margin-top: 10px;

  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    user-select: none;
  }
  span{
    font-size: large;
  }
  span:hover{
    color: @text-unselected;
  }
}

span{
  user-select: none;
  //cursor: pointer;
  font-weight: normal;
  font-size: xx-large;
  margin-top: 10px;
  color: @text-unselected;
}

span:hover{
  //color: @text-selected;
}
</style>