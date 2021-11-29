<template>
  <div class="group">

    <v-container>

      <!-- --------------------- 全行資訊 --------------------- -->
      <AllCom :info="info"/>

      <!-- --------------------- table header --------------------- -->
      <TableHeader :info="info" @sort="sortGroup"/>

      <!-- --------------------- 分區資訊 --------------------- -->
      <GroupCom :info="infoG" :groupSort="groupSort" :fClientHeight = "fClientHeight"/>

      <!-- --------------------- 警示分行 --------------------- -->
      <WarnCom :info="infoG" :fClientHeight = "fClientHeight" @toggle="openBranchFunc"/>
      
      <!-- --------------------- 分行資訊 --------------------- -->
      <transition name="fade">
        <BranchCom :info = "infoG" :fClientHeight = "fClientHeight" v-show="openBranch"/>
      </transition>

    </v-container>

  </div>
</template>

<script>
  import AllCom from '@/components/AllCom'
  import GroupCom from '@/components/GroupCom'
  import WarnCom from '@/components/WarnCom'
  import BranchCom from '@/components/BranchCom'
  import TableHeader from '@/components/TableHeader'

  export default {
    name: 'Group',

    components: {
      AllCom,
      GroupCom,
      WarnCom,
      BranchCom,
      TableHeader
    },

    props: {
      info: [],
      fClientHeight: Number,
    },

    data() {
      return {
        infoG: [],
        openBranch: true,
        groupSort: null,
        // districtName: this.$route.params.districtName
        districtName: '北區'
        // districtName: '中區'
        // districtName: '南區'
      }
    },

    created() {
      this.makeInfoG()
    },

    watch: {
      info:function() {
        this.infoG = []
        this.makeInfoG()
      }
    },

    methods: {
      makeInfoG() {
        let that = this
        this.info.forEach(function(item) {
            if(item.district == that.districtName) {
              that.infoG.push(item)
            }
        });
      },
      openBranchFunc(val) {
        this.openBranch = val
      },
      sortGroup(val) {
        this.groupSort = val
      },
    },

  }
</script>
