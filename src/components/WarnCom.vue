<template>
  <div class="warnCom">

      <v-row class="mx-1 body-1 grey--text text--darken-1 font-weight-black text-no-wrap" style="margin:5px auto;background:rgba(255, 255, 255, .4);">

          <div v-if="!inBranch" class="d-flex flex-column align-center justify-start" style="width:12.5%">
            <v-btn v-if="!play" text fab x-small class="ma-0" @click="play=!play">
              <v-icon color="grey darken-2" >mdi-play</v-icon>
            </v-btn>
            <v-btn v-if="play" text fab x-small class="ma-0" @click="play=!play">
              <v-icon color="grey darken-2" >mdi-pause</v-icon>
            </v-btn>
            <v-btn v-if="toggleSwitch" text fab x-small class="ma-0" @click="toggleBox">
              <v-icon color="grey darken-2" >mdi-toggle-switch</v-icon>
            </v-btn>
            <v-btn v-if="!toggleSwitch" text fab x-small class="ma-0" @click="toggleBox">
              <v-icon color="grey darken-2" >mdi-toggle-switch-off</v-icon>
            </v-btn>
          </div>

          <div id="warnBox" class="componentBox" :style="heightOfBox">
            <div v-for="(item,index) in info" :key="index">
              <v-row v-if="item.waitingP > 7 || item.waitingT > 480">
                <v-col class="d-flex justify-center">{{item.group}}</v-col>
                <v-col class="d-flex justify-center">{{item.branchId}}</v-col>
                <v-col class="d-flex justify-center">{{item.branch}}</v-col>
                <v-col class="d-flex justify-center align-center">
                  <img v-if="item.waitingP>=10" src="@/assets/bell_r.png">
                  <img v-if="10 > item.waitingP && item.waitingP >= 8" src="@/assets/bell_y.png">
                  <img v-if="item.waitingP < 8" src="@/assets/bell_g.png">
                </v-col>
                <v-col class="d-flex justify-center align-center">
                  <img v-if="item.waitingT>=600" src="@/assets/bell_r.png">
                  <img v-if="600 > item.waitingT && item.waitingT >= 480" src="@/assets/bell_y.png">
                  <img v-if="item.waitingT < 480" src="@/assets/bell_g.png">
                </v-col>
                <v-col class="d-flex justify-center">
                  <div>
                    <v-row>
                      <v-col class="px-0 d-flex justify-end" style="width:40px;">{{item.waitingP}}人</v-col>
                    </v-row>
                  </div>
                </v-col>
                <v-col class="d-flex justify-center">
                  <div>
                    <v-row>
                      <v-col class="px-0 d-flex justify-end" style="width:40px;">{{waitTimeAvg(item)}}分</v-col>
                      <v-col class="px-0 d-flex justify-end" style="width:40px;">{{waitSecAvg()}}秒</v-col>
                    </v-row>
                  </div>
                </v-col>
              </v-row>
            </div>            
          </div>

      </v-row>

  </div>
</template>

<script>

  export default {
    name: 'WarnCom',

    props: {
      info: [],
      fClientHeight: Number,
      inBranch: null,
    },

    data() {
      return {
        play: false,
        carouselTime: 5000,
        toggleSwitch: true,
        clientHeight: document.documentElement.clientHeight,
        warnBoxHeight: null,
      }
    },

    created() {
      this.play = true
    },

    computed: {
      heightOfBox:function() {
        let that = this
        if(this.inBranch) {
          that.boxHeight = 32
        } else if (this.clientHeight >= 1080) {
          that.boxHeight = 32*9
        } else if(1080 > this.clientHeight && this.clientHeight >= 1024) {
          that.boxHeight = 32*9
        } else if(1024 > this.clientHeight && this.clientHeight >= 768) {
          that.boxHeight = 32*6
        } else if(768 > this.clientHeight && this.clientHeight >= 540) {
          that.boxHeight = 32*3
        } else if(540 > this.clientHeight) {
          that.boxHeight = 32*2
        }
        if(this.toggleSwitch == true) {
          that.warnBoxHeight = that.boxHeight
        } else {
          that.warnBoxHeight = that.boxHeight*2
        }
        return 'height:' + this.warnBoxHeight + 'px;'
      },      
    },
    
    watch: {
      fClientHeight:function() {
        this.clientHeight = this.fClientHeight
      },
      play:function() {
        let box = document.getElementById('warnBox')
        let that = this
        function scroll() {
          if (box.scrollTop + that.warnBoxHeight < box.scrollHeight) {
            box.scrollTop += that.warnBoxHeight;
          } else {
            box.scrollTop = 0;
          }
        }
        if(this.play) {
          window.scrollId2 = window.setInterval(scroll, this.carouselTime);
        } else {
          window.clearInterval(window.scrollId2);
        }
      },
      warnBoxHeight:function() {
        if(this.play) {
          this.play = !this.play
          this.play = !this.play
        }
      },
    },

    methods: {      
      waitTimeAvg(b) {
        let time = Math.floor(b.waitingT /60)
        window.sec = Math.floor(((b.waitingT /60) - time)*60)
        return time;
      },
      waitSecAvg() {
        return window.sec
      },
      toggleBox() {        
        this.toggleSwitch = !this.toggleSwitch
        if(this.toggleSwitch == true) {
          this.warnBoxHeight = this.boxHeight
        } else {
          this.warnBoxHeight = this.boxHeight*2
        }        
        this.$emit('toggle', this.toggleSwitch)
      },
    },
    
  }
</script>
