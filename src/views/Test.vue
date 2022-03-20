<template>
  <div id="container">
    <head-title :is-test="isTest" style="position: fixed; top: 0; z-index: 4"></head-title>
<!--    <video id="v1" autoplay loop muted>-->
<!--      <source id="v2" src="../assets/gifs/robot-hello.gif" type="video/mp4"  />-->
<!--    </video>-->
    <img id="v1" src="../assets/gifs/robot-hello.gif">
    <robot-notice id="card1" :text="textMsg" :is-login="isLogin"></robot-notice>
    <div id="testCard">
      <el-card class="test-card">
        <el-select style="float: left"
                   :placeholder="audioInputOptions[0].label">
          <el-option
              v-for="item in audioInputOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
          >
          </el-option>
        </el-select>
        <span v-if="!isRecording" @click.prevent="startMicroPhoneTesting" class="click-start" style="float: right">点击开始  <img src="../assets/icon/click-white.png"></span>
        <span v-if="isRecording" @click.prevent="endMicroPhoneTesting" class="click-start" style="float: right">点击结束  <img src="../assets/icon/click-white.png"></span>

        <div class="audio-centent">
          <h1>请说：</h1>
          <p>雪花飘飘，北风萧萧</p>
        </div>
        <div class="audio-wave">
        </div>
        <div>
          <span @click="skipAudio" class="click-skip">进入测试 <img src="../assets/icon/click-white.png"></span>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Recorder from 'recorder-core';
import 'recorder-core/src/engine/wav';
import 'recorder-core/src/extensions/waveview'
import RobotNotice from "@/components/RobotNotice";
import HeadTitle from "@/components/HeadTitle";

export default {
  components: {RobotNotice,HeadTitle},
  name: "TestView",
  data(){
    return {
      //卡片布局props
      isLogin: false,
      textMsg: '欢迎使用智能投顾系统,\n接下来您将回答若干问题,\n以帮助我们更好地为您\n推荐投资组合, \n测试麦克风完成后, \n您可用语音回答所有问题。',
      optionVal: '',
      audioInputOptions: [
        {value: 'val1', label: '默认设备'},
      ],
      isRecording: false,
      type: "wav",
      bitRate: 16,
      sampleRate: 16000,
      rec: undefined,
      duration: 0,
      powerLevel: 0,
      powerLevelLimit: 2,
      lowPowerLevelCount: 0,
      lowPowerLevelCountLimit: 50,
      isTest: this.$store.state.headerViews === 'Test',
    }
  },
  beforeCreate() {
    this.$store.commit('changeViews', 'Test')
  },
  methods:{
    skipAudio(){
      this.$router.push("/quiz");
    },

    startMicroPhoneTesting(){
      if(!(this.rec && Recorder.IsOpen())){
        console.log("未打开录音");
        this.recOpen();
        return;
      }
      this.rec.start();
      this.isRecording = true;
    },

    endMicroPhoneTesting(){
      if(!(this.rec && Recorder.IsOpen())){
        console.log("未打开录音");
        return;
      }
      this.rec.stop(
          function(blob, duration){
            console.log(blob);
            console.log(duration);
          //   audioUpload(blob).then((response) => {
          //     console.log(response);
          //   });
          // },
          // function(msg){
          //   console.log(msg);
          }
      );
      this.isRecording = false;
    },

    recOpen: function () {
      let This = this;
      this.rec = Recorder({
        type: this.type,
        bitRate: this.bitRate,
        sampleRate: this.sampleRate,
        onProcess: async function (buffers, powerLevel, duration, sampleRate) {
          This.duration = duration;
          This.powerLevel = powerLevel;
          This.wave.input(buffers[buffers.length - 1], powerLevel, sampleRate);
          if(powerLevel < This.powerLevelLimit){
            This.lowPowerLevelCount += 1;
            if(This.lowPowerLevelCount > This.lowPowerLevelCountLimit){
              This.endMicroPhoneTesting();
            }
          }
          else {
            This.lowPowerLevelCount = 0;
          }
        }
      });

      this.rec.open(function () {
        This.wave = Recorder.WaveView({
          elem: ".audio-wave",
          linear1: [0, "rgb(0,0,0)", 0.5, "rgb(229,147,24)", 1, "rgb(0,0,0)"],
          linear2: [0, "rgba(0,0,0,0.6)", 1, "rgba(180,152,58,0.6)"]
        });
      }, function (msg, isUserNotAllow) {
        console.log(msg, isUserNotAllow);
        alert("请打开浏览器录音权限。");
      });
    },
  },

  mounted() {
    this.recOpen();
  }
}
</script>

<style scoped lang="less">
@import "src/style/readme";
#testCard{
  margin-left: 50%;
  margin-top: 9.5%;
}

.test-card{
  position:relative;
  /*background: #99E7FD;*/
  padding: 0 10px 20px 10px;
  width: 700px;
  height: 500px;
  border-radius: 20px;
  font-family: "Microsoft YaHei","黑体","宋体",sans-serif;
  background: none;

}
/deep/ .el-select{
  width: 70%;
}
 /deep/ .el-input__inner{
  background: none;
  border-radius: 10px; /* 设置select的board-radius*/
}
 /deep/ .el-input__inner::placeholder{
   color: white;
   font-size: 20px;
   font-weight: bold;
   font-family: "Microsoft YaHei","黑体","宋体",sans-serif;
 }
 .click-skip,
 .click-start{
   color: white;
   float: right;
   font-size: 20px;
   /*font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;*/
   font-weight: bold;
   user-select: none;
 }
.click-start img,
.click-skip img{
  vertical-align: middle;
  height: 20px;
}
.audio-centent{
  margin-top: 150px;
  clear: both;
  color: white;
}
.audio-centent p{
  color:  @text-unselected;
  font-size: 50px;
}

.click-skip{
  position: absolute;
  bottom: 20px;
  right: 20px;
}
.audio-wave{
  margin-top: 50px;
  width: 100%;
  height: 50px;
}

.click-start:hover,
.click-skip:hover{
  cursor: pointer;
}

#container{
  position: fixed;
  right: 0px;
  bottom: 0px;
  min-width: 100%;
  min-height: 100%;
  background: url("../assets/img/background-02.png");
  z-index: -12;
}

#v1{
  position: fixed;
  right: 70%;
  top:5%;
  height: 700px;
  width: auto ;
  z-index: 10;
}
#card1{
  float: right;
  position: fixed;
  left: 21.5%;
  top: 30%;
  z-index: 12;
}
</style>
