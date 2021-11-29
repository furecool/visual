<template>
  <v-app id="app" style="position:relative;">

    <Navbar/>

    <v-main class="lighten-3 back">
      <keep-alive>
        <router-view :info = "info" :fClientHeight = "fClientHeight"/>
      </keep-alive>      
    </v-main>

  </v-app>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',

  components: {
    Navbar,
  },

  data() {
    return {
      info: [
        {
          "district": "北區",
          "group": "北一區",
          "groupId": "11",
          "branchId": "002",
          "branch": "敦南分行",
          "waitingP": 15,
          "waitingT": 590
        },
        {
          "district": "北區",
          "group": "北一區",
          "groupId": "11",
          "branchId": "020",
          "branch": "中和分行",
          "waitingP": 7,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北一區",
          "groupId": "11",
          "branchId": "049",
          "branch": "永和分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北一區",
          "groupId": "11",
          "branchId": "079",
          "branch": "景平分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北一區",
          "groupId": "11",
          "branchId": "004",
          "branch": "新生分行",
          "waitingP": 5,
          "waitingT": 315
        },
        {
          "district": "北區",
          "group": "北一區",
          "groupId": "11",
          "branchId": "031",
          "branch": "大安分行",
          "waitingP": 6,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北一區",
          "groupId": "11",
          "branchId": "092",
          "branch": "北師分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北一區",
          "groupId": "11",
          "branchId": "073",
          "branch": "基隆路分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北一區",
          "groupId": "11",
          "branchId": "074",
          "branch": "新店分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北一區",
          "groupId": "11",
          "branchId": "111",
          "branch": "文山分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北一區",
          "groupId": "11",
          "branchId": "070",
          "branch": "北新店分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北一區",
          "groupId": "11",
          "branchId": "113",
          "branch": "景美分行",
          "waitingP": 5,
          "waitingT": 300
        },        
        {
          "district": "北區",
          "group": "北二區",
          "groupId": "12",
          "branchId": "062",
          "branch": "敦北分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北二區",
          "groupId": "12",
          "branchId": "043",
          "branch": "民生分行",
          "waitingP": 6,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北二區",
          "groupId": "12",
          "branchId": "011",
          "branch": "南東分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北二區",
          "groupId": "12",
          "branchId": "088",
          "branch": "南松山分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北二區",
          "groupId": "12",
          "branchId": "048",
          "branch": "內湖分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北二區",
          "groupId": "12",
          "branchId": "055",
          "branch": "大直分行",
          "waitingP": 7,
          "waitingT": 420
        },
        {
          "district": "北區",
          "group": "北二區",
          "groupId": "12",
          "branchId": "110",
          "branch": "東湖分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北二區",
          "groupId": "12",
          "branchId": "099",
          "branch": "南港分行",
          "waitingP": 5,
          "waitingT": 555
        },
        {
          "district": "北區",
          "group": "北二區",
          "groupId": "12",
          "branchId": "063",
          "branch": "忠孝分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北二區",
          "groupId": "12",
          "branchId": "097",
          "branch": "松德分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北二區",
          "groupId": "12",
          "branchId": "026",
          "branch": "信義分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北二區",
          "groupId": "12",
          "branchId": "090",
          "branch": "東基隆分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北二區",
          "groupId": "12",
          "branchId": "084",
          "branch": "汐止分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北二區",
          "groupId": "12",
          "branchId": "023",
          "branch": "花蓮分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北二區",
          "groupId": "12",
          "branchId": "109",
          "branch": "羅東分行",
          "waitingP": 7,
          "waitingT": 540
        },        
        {
          "district": "北區",
          "group": "北三區",
          "groupId": "13",
          "branchId": "001",
          "branch": "營業部",
          "waitingP": 5,
          "waitingT": 360
        },
        {
          "district": "北區",
          "group": "北三區",
          "groupId": "13",
          "branchId": "017",
          "branch": "天母分行",
          "waitingP": 5,
          "waitingT": 360
        },
        {
          "district": "北區",
          "group": "北三區",
          "groupId": "13",
          "branchId": "086",
          "branch": "石牌分行",
          "waitingP": 5,
          "waitingT": 420
        },
        {
          "district": "北區",
          "group": "北三區",
          "groupId": "13",
          "branchId": "089",
          "branch": "淡水分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北三區",
          "groupId": "13",
          "branchId": "077",
          "branch": "延平分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北三區",
          "groupId": "13",
          "branchId": "061",
          "branch": "西門分行",
          "waitingP": 9,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北三區",
          "groupId": "13",
          "branchId": "041",
          "branch": "建橋分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北三區",
          "groupId": "13",
          "branchId": "082",
          "branch": "松江分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北三區",
          "groupId": "13",
          "branchId": "068",
          "branch": "建北分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北三區",
          "groupId": "13",
          "branchId": "064",
          "branch": "復興分行",
          "waitingP": 5,
          "waitingT": 300
        },        
        {
          "district": "北區",
          "group": "北四區",
          "groupId": "14",
          "branchId": "091",
          "branch": "新板分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北四區",
          "groupId": "14",
          "branchId": "094",
          "branch": "江翠分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北四區",
          "groupId": "14",
          "branchId": "065",
          "branch": "板南分行",
          "waitingP": 7,
          "waitingT": 360
        },
        {
          "district": "北區",
          "group": "北四區",
          "groupId": "14",
          "branchId": "008",
          "branch": "板橋分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北四區",
          "groupId": "14",
          "branchId": "040",
          "branch": "古亭分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北四區",
          "groupId": "14",
          "branchId": "045",
          "branch": "和平分行",
          "waitingP": 13,
          "waitingT": 495
        },
        {
          "district": "北區",
          "group": "北四區",
          "groupId": "14",
          "branchId": "056",
          "branch": "南門分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北四區",
          "groupId": "14",
          "branchId": "005",
          "branch": "新莊分行",
          "waitingP": 7,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北四區",
          "groupId": "14",
          "branchId": "047",
          "branch": "南新莊分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北四區",
          "groupId": "14",
          "branchId": "112",
          "branch": "副都心",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北四區",
          "groupId": "14",
          "branchId": "016",
          "branch": "蘆洲分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北四區",
          "groupId": "14",
          "branchId": "069",
          "branch": "三和分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "北區",
          "group": "北四區",
          "groupId": "14",
          "branchId": "028",
          "branch": "三重分行",
          "waitingP": 5,
          "waitingT": 300
        },        
        {
          "district": "中區",
          "group": "桃竹區",
          "groupId": "21",
          "branchId": "006",
          "branch": "桃園分行",
          "waitingP": 7,
          "waitingT": 420
        },
        {
          "district": "中區",
          "group": "桃竹區",
          "groupId": "21",
          "branchId": "075",
          "branch": "北桃園分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "中區",
          "group": "桃竹區",
          "groupId": "21",
          "branchId": "078",
          "branch": "南崁分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "中區",
          "group": "桃竹區",
          "groupId": "21",
          "branchId": "012",
          "branch": "中壢分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "中區",
          "group": "桃竹區",
          "groupId": "21",
          "branchId": "103",
          "branch": "八德分行",
          "waitingP": 13,
          "waitingT": 601
        },
        {
          "district": "中區",
          "group": "桃竹區",
          "groupId": "21",
          "branchId": "032",
          "branch": "龍潭分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "中區",
          "group": "桃竹區",
          "groupId": "21",
          "branchId": "098",
          "branch": "北大分行",
          "waitingP": 7,
          "waitingT": 300
        },
        {
          "district": "中區",
          "group": "桃竹區",
          "groupId": "21",
          "branchId": "102",
          "branch": "南寮分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "中區",
          "group": "桃竹區",
          "groupId": "21",
          "branchId": "024",
          "branch": "新竹分行",
          "waitingP": 7,
          "waitingT": 420
        },
        {
          "district": "中區",
          "group": "桃竹區",
          "groupId": "21",
          "branchId": "101",
          "branch": "竹北分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "中區",
          "group": "桃竹區",
          "groupId": "21",
          "branchId": "085",
          "branch": "成功分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "中區",
          "group": "桃竹區",
          "groupId": "21",
          "branchId": "052",
          "branch": "竹科分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "中區",
          "group": "桃竹區",
          "groupId": "21",
          "branchId": "108",
          "branch": "竹南分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "中區",
          "group": "桃竹區",
          "groupId": "21",
          "branchId": "100",
          "branch": "關東橋分行",
          "waitingP": 5,
          "waitingT": 300
        },        
        {
          "district": "中區",
          "group": "中彰區",
          "groupId": "22",
          "branchId": "027",
          "branch": "北台中分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "中區",
          "group": "中彰區",
          "groupId": "22",
          "branchId": "083",
          "branch": "大雅分行",
          "waitingP": 7,
          "waitingT": 420
        },
        {
          "district": "中區",
          "group": "中彰區",
          "groupId": "22",
          "branchId": "044",
          "branch": "太平分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "中區",
          "group": "中彰區",
          "groupId": "22",
          "branchId": "022",
          "branch": "豐原分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "中區",
          "group": "中彰區",
          "groupId": "22",
          "branchId": "018",
          "branch": "大里分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "中區",
          "group": "中彰區",
          "groupId": "22",
          "branchId": "104",
          "branch": "員林分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "中區",
          "group": "中彰區",
          "groupId": "22",
          "branchId": "037",
          "branch": "彰化分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "中區",
          "group": "中彰區",
          "groupId": "22",
          "branchId": "007",
          "branch": "台中分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "中區",
          "group": "中彰區",
          "groupId": "22",
          "branchId": "066",
          "branch": "民權分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "中區",
          "group": "中彰區",
          "groupId": "22",
          "branchId": "107",
          "branch": "沙鹿分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "中區",
          "group": "中彰區",
          "groupId": "22",
          "branchId": "051",
          "branch": "逢甲分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "中區",
          "group": "中彰區",
          "groupId": "22",
          "branchId": "105",
          "branch": "市府分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "中區",
          "group": "中彰區",
          "groupId": "22",
          "branchId": "076",
          "branch": "大墩分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "中區",
          "group": "中彰區",
          "groupId": "22",
          "branchId": "080",
          "branch": "文心分行",
          "waitingP": 2,
          "waitingT": 915
        },
        {
          "district": "中區",
          "group": "中彰區",
          "groupId": "22",
          "branchId": "054",
          "branch": "南屯分行",
          "waitingP": 5,
          "waitingT": 300
        },        
        {
          "district": "南區",
          "group": "嘉南區",
          "groupId": "31",
          "branchId": "010",
          "branch": "台南分行",
          "waitingP": 9,
          "waitingT": 480
        },
        {
          "district": "南區",
          "group": "嘉南區",
          "groupId": "31",
          "branchId": "029",
          "branch": "永福分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "南區",
          "group": "嘉南區",
          "groupId": "31",
          "branchId": "093",
          "branch": "永華分行",
          "waitingP": 25,
          "waitingT": 420
        },
        {
          "district": "南區",
          "group": "嘉南區",
          "groupId": "31",
          "branchId": "034",
          "branch": "金華分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "南區",
          "group": "嘉南區",
          "groupId": "31",
          "branchId": "035",
          "branch": "後甲分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "南區",
          "group": "嘉南區",
          "groupId": "31",
          "branchId": "071",
          "branch": "府城分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "南區",
          "group": "嘉南區",
          "groupId": "31",
          "branchId": "033",
          "branch": "崇德分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "南區",
          "group": "嘉南區",
          "groupId": "31",
          "branchId": "021",
          "branch": "嘉義分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "南區",
          "group": "嘉南區",
          "groupId": "31",
          "branchId": "087",
          "branch": "永康分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "南區",
          "group": "嘉南區",
          "groupId": "31",
          "branchId": "036",
          "branch": "海佃分行",
          "waitingP": 5,
          "waitingT": 300
        },        
        {
          "district": "南區",
          "group": "高屏區",
          "groupId": "32",
          "branchId": "015",
          "branch": "苓雅分行",
          "waitingP": 10,
          "waitingT": 660
        },
        {
          "district": "南區",
          "group": "高屏區",
          "groupId": "32",
          "branchId": "038",
          "branch": "五甲分行",
          "waitingP": 7,
          "waitingT": 360
        },
        {
          "district": "南區",
          "group": "高屏區",
          "groupId": "32",
          "branchId": "114",
          "branch": "雄科分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "南區",
          "group": "高屏區",
          "groupId": "32",
          "branchId": "025",
          "branch": "七賢分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "南區",
          "group": "高屏區",
          "groupId": "32",
          "branchId": "072",
          "branch": "東高雄分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "南區",
          "group": "高屏區",
          "groupId": "32",
          "branchId": "009",
          "branch": "高雄分行",
          "waitingP": 7,
          "waitingT": 360
        },
        {
          "district": "南區",
          "group": "高屏區",
          "groupId": "32",
          "branchId": "046",
          "branch": "北高雄分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "南區",
          "group": "高屏區",
          "groupId": "32",
          "branchId": "106",
          "branch": "右昌分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "南區",
          "group": "高屏區",
          "groupId": "32",
          "branchId": "081",
          "branch": "岡山分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "南區",
          "group": "高屏區",
          "groupId": "32",
          "branchId": "039",
          "branch": "鳳山分行",
          "waitingP": 7,
          "waitingT": 300
        },
        {
          "district": "南區",
          "group": "高屏區",
          "groupId": "32",
          "branchId": "067",
          "branch": "三民分行",
          "waitingP": 5,
          "waitingT": 300
        },
        {
          "district": "南區",
          "group": "高屏區",
          "groupId": "32",
          "branchId": "030",
          "branch": "屏東分行",
          "waitingP": 8,
          "waitingT": 600
        },
      ],
      fClientHeight: null,
      // author: 'home',
      // author: 'director',
      // author: 'group',
      // author: 'branch',
      // districtName: '北區',
      // branchName: '屏東分行',
    }
  },

  created() {

    // if(this.author=='home') {
    //   this.$router.push({
    //     name:'Home'
    //   }).catch(err => {err});
    // } else if(this.author=='director') {
    //   this.$router.push({
    //     name:'Director'
    //   }).catch(err => {err});
    // } else if(this.author=='group') {
    //   this.$router.push({
    //     name:'Group',
    //     params: {
    //       'districtName': this.districtName
    //     }
    //   }).catch(err => {err});
    // } else if(this.author=='branch') {
    //   this.$router.push({
    //     name:'Branch',
    //     params: {
    //       'branchName': this.branchName
    //     }
    //   }).catch(err => {err});
    // }

  },

  mounted() {
    let that = this
    window.onresize = function(){
      that.fClientHeight = document.documentElement.clientHeight
    }    

  },

};
</script>

<style>

  body {
    background-color: #ededed;
    overflow: hidden;
  }
  body::-webkit-scrollbar {
    display: none;
  }

  /* 背景樣式 */

  .back {
    position: relative;
    overflow: hidden;
    background-color: #e9e8e8;
  }
  .back::before {
    content: "";
    position: absolute;
    width: 250%;
    height: 2000px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    left: -150%;
    z-index: 0;
  }

  /* views */

  .container {
    max-width: 100%;
  }

  /* components */

  .col {
    padding: 0px;
  }
  .headerList {
    cursor: pointer;
  }

  /* componentBox */

  .componentBox {
    flex:1;
    overflow-x: hidden;
    overflow-y: scroll;
    margin:0 auto;
    transition: all .3s ease;
  }
  .componentBox::-webkit-scrollbar {
    background-color: rgba(0, 0, 0, 0);
    width: 10px;
  }
  .componentBox::-webkit-scrollbar-thumb {
    background: #707070;
  }
  .componentBox .row {
    margin: 0;
  }
  .componentBox .col {
    line-height: 2rem;
  }
  .componentBox img {
    width: 18px;
  }

  /* fade */

  .fade-leave-active,
  .fade-enter-active {
    transition: all .2s;
  }
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-to,
  .fade-leave {
    opacity: 1;
  }

  
</style>
