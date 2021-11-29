<template>
  <div class="branch">

    <v-container>

      <!-- --------------------- 全行資訊 --------------------- -->
      <AllCom :info="info"/>

      <!-- --------------------- table header --------------------- -->
      <TableHeader :info="info" :inBranch="inBranch"/>

      <!-- --------------------- 分區資訊 --------------------- -->
      <GroupCom :info="infoG" :inBranch="inBranch"/>

      <!-- --------------------- 警示分行 --------------------- -->
      <WarnCom :info="infoB" :inBranch="inBranch" v-show="warnOrNot"/>

      <!-- --------------------- 分行資訊 --------------------- -->
      <BranchCom :info="infoB" :inBranch="inBranch" v-show="!warnOrNot"/>

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
    name: 'Branch',

    components: {
      AllCom,
      GroupCom,
      WarnCom,
      BranchCom,
      TableHeader
    },

    props: {
      info: [],
    },

    data() {
      return {
        infoB: [],
        infoG: [],
        groupName: '',
        // branchName: this.$route.params.branchName,
        // branchName: '內湖分行',
        branchName: '屏東分行',
        groupObj: {},
        branchObj: {},
        inBranch: true,
      }
    },

    created() {
      let that = this
      this.info.forEach(function(item) {
          if(item.branch == that.branchName) {
            that.branchObj = item
            that.groupName = item.group
            that.infoB.push(item)
          }
      });
      this.info.forEach(function(item) {
        if(item.group == that.groupName) {
          that.groupObj = item
          that.infoG.push(item)
        }
      })
    },

    computed: {
      warnOrNot: function() {
        let warn
        if(this.branchObj.waitingP >= 8 || this.branchObj.waitingT >= 480) {
          warn = true
        } else {
          warn = false
        }
        return warn
      }
    },

  }
</script>