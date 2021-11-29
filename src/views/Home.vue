<template>
  <div class="home">

    <v-container>

      <!-- --------------------- 全行資訊 --------------------- -->
      <AllCom :info = "info"/>

      <!-- --------------------- table header --------------------- -->
      <TableHeader :info = "info" @sort="sortGroup"/>

      <!-- --------------------- 分區資訊 --------------------- -->
      <GroupCom :info = "info" :groupSort="groupSort" :fClientHeight = "fClientHeight"/>

      <!-- --------------------- 警示分行 --------------------- -->
      <WarnCom :info = "info" :fClientHeight = "fClientHeight" @toggle="openBranchFunc"/>

      <!-- --------------------- 分行資訊 --------------------- -->
      <transition name="fade">
        <BranchCom :info = "info" :fClientHeight = "fClientHeight" v-show="openBranch"/>
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
    name: 'Home',

    components: {
      AllCom,
      GroupCom,
      WarnCom,
      BranchCom,
      TableHeader,
    },

    props: {
      info: [],
      fClientHeight: Number
    },

    data() {
      return {
        openBranch: true,
        groupSort: null,
      }
    },

    methods: {
      openBranchFunc(val) {
        this.openBranch = val
      },
      sortGroup(val) {
        this.groupSort = val
      },
    },

  }
</script>