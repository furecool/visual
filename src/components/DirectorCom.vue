<template>
  <div class="directorCom">

      <v-row class="body-1 grey--text text--darken-1 font-weight-black" style="margin:5px auto;">
        <!-- 人數 -->
        <v-col class="mx-2" style="background:rgba(255, 255, 255, .4);">
          <div id="directorBox1" class="componentBox" :style="heightOfBox">
            <div v-for="(item, id) in infoP" :key="id">
              <v-row v-if="item.waitingP > 8">
                <v-col class="d-flex justify-center">{{item.group}}</v-col>
                <v-col class="d-flex justify-center">{{item.branch}}</v-col>
                <v-col class="d-flex justify-center">
                  <div>
                    <v-row>
                      <v-col class="px-0 d-flex justify-end" style="width:40px;">{{item.waitingP}}人</v-col>
                    </v-row>
                  </div>
                </v-col> 
                <v-col class="d-flex justify-center align-center">
                  <img v-if="item.waitingP >= 10" src="@/assets/bell_r.png">
                  <img v-if="10 > item.waitingP && item.waitingP >= 8" src="@/assets/bell_y.png">
                  <img v-if="item.waitingP <= 8" src="@/assets/bell_g.png">
                </v-col>
              </v-row>
            </div>
          </div>
        </v-col>
        <!-- 時間 -->
        <v-col class="mx-2" style="background:rgba(255, 255, 255, .4);">
          <div id="directorBox2" class="componentBox" :style="heightOfBox">
            <div v-for="(item, id) in infoT" :key="id">
              <v-row v-if="item.waitingT > 480">
                <v-col class="d-flex justify-center">{{item.group}}</v-col>
                <v-col class="d-flex justify-center">{{item.branch}}</v-col>
                <v-col class="d-flex justify-center">
                  <div>
                    <v-row>
                      <v-col class="px-0 d-flex justify-end" style="width:40px;">{{waitTimeAvg(item)}}分</v-col>
                      <v-col class="px-0 d-flex justify-end" style="width:40px;">{{waitSecAvg()}}秒</v-col>
                    </v-row>
                  </div>
                </v-col>
                <v-col class="d-flex justify-center align-center">
                  <img v-if="item.waitingT >= 600" src="@/assets/bell_r.png">
                  <img v-if="600 > item.waitingT && item.waitingT >= 480" src="@/assets/bell_y.png">
                  <img v-if="item.waitingT <= 480" src="@/assets/bell_g.png">
                </v-col>
              </v-row>
            </div>
          </div>          
        </v-col>
        
      </v-row>

  </div>
</template>

<script>

  export default {
    name: 'DirectorCom',
    
    props: {
      inDirector: null,
      info: [],
      infoP: [],
      infoT: [],
      fClientHeight: Number,
    },

    data() {
      return {
        play: false,
        carouselTime: 5000,
        clientHeight: document.documentElement.clientHeight,
        directorBoxHeight: null,
      }
    },

    computed: {
      heightOfBox:function() {
        let that = this
          if(this.clientHeight >= 1080) {
            that.boxHeight = 32*26
          } else if(1080 > this.clientHeight && this.clientHeight >= 1024) {
            that.boxHeight = 32*24
          } else if(1024 > this.clientHeight && this.clientHeight >= 768) {
            that.boxHeight = 32*16
          } else if(768 > this.clientHeight && this.clientHeight >= 540) {
            that.boxHeight = 32*9
          } else if(540 > this.clientHeight) {
            that.boxHeight = 32*4
          }
          that.directorBoxHeight = that.boxHeight        
        return 'height:' + this.directorBoxHeight + 'px;'
      },      
    },

    watch: {
      info:function() {
        let that = this
        if(this.inDirector == true) {
          that.infoP.sort(that.compare('waitingP'));
          that.infoT.sort(that.compare('waitingT'));
        }
      },
      fClientHeight:function() {
        this.clientHeight = this.fClientHeight
      },
      play:function() {
        let box = document.getElementById('directorBox1')
        let box2 = document.getElementById('directorBox2')
        let that = this
        function scroll() {
          if (box.scrollTop + that.boxHeight < box.scrollHeight) {
            box.scrollTop += that.boxHeight;
            box2.scrollTop += that.boxHeight;
          } else {
            box.scrollTop = 0;
            box2.scrollTop = 0;
          }
        }
        if(this.play) {
          window.scrollId4 = window.setInterval(scroll, this.carouselTime);
        } else {
          window.clearInterval(window.scrollId4);
        }
      },      
      directorBoxHeight:function() {
        if(this.play) {
          this.play = !this.play
          this.play = !this.play
        } else {
          this.play = !this.play
        }
      },
    },

    methods: {
      compare(attr) {
        return function(a,b) {
          var val1 = a[attr];
          var val2 = b[attr];
          return val2 - val1
        }
      },
      waitTimeAvg(b) {
        let time = Math.floor(b.waitingT /60)
        window.sec = Math.floor(((b.waitingT /60) - time)*60)
        return time;
      },
      waitSecAvg() {
        return window.sec
      },      
    },

  }
</script>