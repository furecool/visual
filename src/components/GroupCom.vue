<template>
  <div class="groupCom">

      <v-row class="d-flex mx-1 body-1 grey--text text--darken-1 font-weight-black text-no-wrap" style="margin:5px auto;background:rgba(255, 255, 255, .4);">

          <div v-if="!inBranch" class="d-flex flex-column align-center justify-start" style="width:12.5%;">
            <v-btn v-if="!play && !inBranch" text fab x-small class="ma-1" @click="play=!play">
              <v-icon color="grey darken-2" >mdi-play</v-icon>
            </v-btn>
            <v-btn v-if="play" text fab x-small class="ma-1" @click="play=!play">
              <v-icon color="grey darken-2" >mdi-pause</v-icon>
            </v-btn>
          </div>

          <div id="groupBox" class="componentBox" :style="heightOfBox">
            <v-row v-for="(item,index) in infoGG" :key="index">
              <v-col class="d-flex justify-center">{{item.group}}</v-col>
              <v-col></v-col>
              <v-col></v-col>
              <v-col></v-col>
              <v-col></v-col>
              <v-col class="d-flex justify-center">
                <div>
                  <v-row>
                    <v-col class="px-0 d-flex justify-end" style="width:40px;">{{item.avgWaitingP}}人</v-col>
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

      </v-row>
    
  </div>
</template>

<script>

  export default {
    name: 'GroupCom',
    
    props: {
      info: [],
      fClientHeight: Number,
      inBranch: null,
      groupSort: null,
    },

    data() {
      return {
        allGroup: [
          "北一區",
          "北二區",
          "北三區",
          "北四區",
          "桃竹區",
          "中彰區",
          "嘉南區",
          "高屏區",
        ],
        infoGG: [],
        play: false,
        carouselTime: 5000,
        clientHeight: document.documentElement.clientHeight,
        groupBoxHeight: null,
      }
    },

    created() {
      this.play = true
      // 把 info 做成新陣列 infoGG，陣列中物件參數只有 區名、groupId、計算後的人數、計算後的時間
      let that = this
      this.allGroup.forEach(function(group) {
        // 1. 分區名迴圈創個空白 obj，每次迴圈重置一次，等等拿這些 obj 做 Array
        let obj = {}
        let totalP = 0
        let totalT = 0
        let totalLength = 0
        let groupName = ''
        let groupId = ''
        let avgP = null
        let avgT = null        
        that.info.forEach(function(item) {
          // 2. 做待會 obj 的 value，在分行迴圈 if 判斷符合該分區名的分行，加總數字算平均
          if(item.group == group) {
            totalP += item.waitingP
            totalT += item.waitingT
            totalLength += 1
            groupId = item.groupId
          }
          avgP = Math.floor(totalP/totalLength)
          avgT = Math.floor(totalT/totalLength)
          groupName = group
        })
        // 3. 做 obj，拿上面 if 判斷算出來的平均人數、時間
        obj.group = groupName
        obj.groupId = groupId
        obj.avgWaitingP = avgP
        obj.waitingT = avgT
        // 4. 做 Array
        if(obj.group && obj.groupId && obj.avgWaitingP && obj.waitingT) {
          that.infoGG.push(obj)
        }
      })
      // 排序
      let prior1 = 'avgWaitingP';
      let prior2 = 'waitingT';
      this.infoGG.sort(this.compare(prior1, prior2));
    },

    computed: {
      heightOfBox:function() {
        let that = this
        if(this.inBranch) {
          that.boxHeight = 32
        } else if(this.clientHeight >= 1080) {
          that.boxHeight = 32*8
        } else if(1080 > this.clientHeight && this.clientHeight >= 1024) {
          that.boxHeight = 32*6
        } else if(1024 > this.clientHeight && this.clientHeight >= 768) {
          that.boxHeight = 32*4
        } else if(768 > this.clientHeight && this.clientHeight >= 540) {
          that.boxHeight = 32*3
        } else if(540 > this.clientHeight) {
          that.boxHeight = 32*2
        }
        that.groupBoxHeight = that.boxHeight
        return 'height:' + this.groupBoxHeight + 'px;'
      }
    },

    watch: {
      fClientHeight:function() {
        this.clientHeight = this.fClientHeight
      },
      play:function() {
        let box = document.getElementById('groupBox')
        let that = this
        function scroll() {
          if (box.scrollTop + that.boxHeight < box.scrollHeight) {
            box.scrollTop += that.boxHeight;
          } else {
            box.scrollTop = 0;
          }
        }
        if(this.play) {
          window.scrollId1 = window.setInterval(scroll, this.carouselTime);
        } else {
          window.clearInterval(window.scrollId1);
        }
      },      
      groupBoxHeight:function() {
        if(this.play) {
          this.play = !this.play
          this.play = !this.play
        }
      },
      groupSort:function() {
        let h = this.groupSort;
        let h2
        if(h == 'waitingP') {
          h = 'avgWaitingP';
          h2 = 'waitingT';
        } else if(h == 'waitingT') {
          h2 = 'avgWaitingP';
        } else if(h == 'groupId') {
          h2 = 'avgWaitingP';
        }
        // console.log(this.infoGG)
        this.infoGG.sort(this.compare(h, h2));
      }
    },
    
    methods: {      
      compare(attr1, attr2) {
        return function(a, b) {
          var p1 = a[attr1];
          var p2 = b[attr1];
          var t1
          var t2
          if(attr1 == 'groupId') {
            if(p1 == p2) {
              return b[attr2] - a[attr2]
            }
            return p1 - p2
          }
          if(p1 === p2) {
            t1 = a[attr2];
            t2 = b[attr2];
            return t2 - t1
          }
          return p2 - p1;
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
