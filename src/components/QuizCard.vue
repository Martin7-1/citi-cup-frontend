<template>
  <div class="container">
    <p class="question">{{ content }}</p>
    <div v-if="questionPicPath">
      <img :src="getPicUrl(qid, questionPicPath)">
    </div>
    <div class="options" v-if="type === QuestionType.SELECT_QUESTION">
      <QuizOption v-for="(option, index) in options"
                  :key="index"
                  :text="option"
                  :label="option.substring(0, 1)"
                  :url="paths.length !== 0 && paths[index] ? getPicUrl(qid, paths[index]) : ''"
                  @option-click="handleClickOption"
      >
      </QuizOption>
    </div>
    <div v-if="type === QuestionType.ANS_QUESTION">
    </div>
    <div class="audio-wave"
         v-loading="loading"
         element-loading-background="rgba(0, 0, 0, 0)"
    >
    </div>
    <Button v-show="!isRecording" text="开始" @click="recorderStart"></Button>
    <Button v-show="isRecording" text="结束" @click="recorderStop"></Button>

    <!--    <Button text="提交" @click="submit"></Button>-->
  </div>
</template>

<script>
import {QuestionType} from '@/utils/constant';
import {audioUpload, getQuestion, getNextQuestion} from '@/utils/getData';
import QuizOption from "@/components/QuizOption";
import Recorder from "recorder-core";
import 'recorder-core/src/engine/wav';
import 'recorder-core/src/extensions/waveview'
import Button from "@/components/Button";

export default {
  name: "QuizCard",
  components: {Button, QuizOption},
  props:{
    answerTimes: Number,
  },
  emits: ["cloud"],
  data() {
    return {
      qid: 1,
      type: 0,
      content: '',
      options: [],
      paths: [],
      answer: String,
      QuestionType,
      questionPicPath: '',
      isRecording: false,
      audioType: "wav",
      bitRate: 16,
      sampleRate: 16000,
      rec: undefined,
      duration: 0,
      powerLevel: 0,
      powerLevelLimit: 2,
      lowPowerLevelCount: 0,
      lowPowerLevelCountLimit: 50,
      loading: true
    }
  },
  methods: {
    handleClickOption(option){
      this.answer = option;
      this.$store.state.currentOption = option;
    },
    getPicUrl(questionID, path){
      return `https://124.223.105.99:8081/file/${questionID}/${path}`;
    },
    getNextQuestion(fileIndex){
      if(this.qid === 45){
        this.$router.push('/consultant')
        return;
      }
      this.paths = [];
      this.questionPicPath = '';
      this.loading = true;
      let payload = {
        userID: (Number)(localStorage.getItem('userid')),
        questionID: this.qid,
        questionType: this.type,
        answerTimes: this.answerTimes
      }
      console.log(payload)
      getNextQuestion(payload, fileIndex).then((response) => {
        console.log(response);
        // this.$alert('提交成功');
        this.$store.state.currentOption = '';
        // 识别成功
        if(response.data.key){
          this.qid = response.data.key.id;
          this.type = response.data.key.type;
          this.content = response.data.key.content;
          this.options = response.data.key.option.split(' ');
          let path = response.data.key.path;
          if(path){
            this.paths = path.split(' ');
            if(this.paths.length === 1){
              this.questionPicPath = this.paths[0];
              this.paths = [];
            }
          }
        }
        else {
          this.$alert(response.data.value);
        }
        this.loading = false;


        if(response.data.key && response.data.value)
        {
          this.$emit("cloud", response.data.value);
        }
      });
    },
    recorderStart(){
      if(!(this.rec && Recorder.IsOpen())){
        console.log("未打开录音");
        this.recOpen();
        return;
      }
      this.rec.start();
      this.isRecording = true;
    },

    recorderStop(){
      let This = this;
      if(!(this.rec && Recorder.IsOpen())){
        console.log("未打开录音");
        return;
      }
      this.rec.stop(
          function(blob, duration){
            console.log(blob);
            console.log(duration);
            audioUpload(blob).then((response) => {
              // 通过fileId获取下一题
              console.log(response);
              This.getNextQuestion(response.data);
            });
          },
          function(msg){
            console.log(msg);
          }
      );
      this.isRecording = false;
      this.lowPowerLevelCount = 0;
    },

    recOpen: function () {
      let This = this;
      this.rec = Recorder({
        type: this.audioType,
        bitRate: this.bitRate,
        sampleRate: this.sampleRate,
        onProcess: async function (buffers, powerLevel, duration, sampleRate) {
          This.duration = duration;
          This.powerLevel = powerLevel;
          This.wave.input(buffers[buffers.length - 1], powerLevel, sampleRate);
          if(powerLevel < This.powerLevelLimit){
            This.lowPowerLevelCount += 1;
            if(This.lowPowerLevelCount > This.lowPowerLevelCountLimit){
              This.recorderStop();
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
          linear1: [0, "rgb(203,179,110)", 0.5, "rgb(229,147,24)", 1, "rgb(193,104,38)"],
          linear2: [0, "rgba(212,157,64,0.6)", 1, "rgba(180,152,58,0.6)"]
        });
      }, function (msg, isUserNotAllow) {
        console.log(msg, isUserNotAllow);
        alert("请打开浏览器录音权限。");
      });
    }
  },
  mounted() {
    this.recOpen();
    getQuestion(this.qid).then((response) => {
      console.log(response);
      this.type = response.data.type;
      this.content = response.data.content;
      this.options = response.data.option.split(' ');
      let path = response.data.path;
      if (path) {
        this.paths = path.split(' ');
        if (this.paths.length === 1) {
          this.questionPicPath = this.paths[0];
          this.paths = [];
        }
      }
      this.loading = false;
    });
  },
  beforeUnmount() {
    this.rec.stop();
  }
}
</script>

<style scoped lang="less">
@import "src/style/readme";

.start{

}

.question{
  color: white;
  font-size: x-large;
  font-weight: lighter;
  margin-bottom: 50px;
}

.options{
  text-align: center;
  align-items: center;
  margin-top: 100px;
}

img {
  align-self: center;
  width: 300px;
  height: 200px;
  object-fit: cover;
  user-select: none;
}

.audio-wave{
  width: 300px;
  height: 50px;
  margin: 100px auto 0;
}
</style>

<style lang="less">
@import "src/style/readme";
.el-loading-spinner .path{
  stroke: @text-selected;
}
</style>