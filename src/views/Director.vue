<template>
  <div class="director">

    <v-container fluid>

      <!-- --------------------- 全行資訊 --------------------- -->
      <AllCom :info="info"/>

      <TableHeader :info="info" :inDirector = "inDirector"/>

      <!-- --------------------- 警示分行 --------------------- -->
      <DirectorCom :info="info" :infoP="infoP" :infoT="infoT" :inDirector = "inDirector" :fClientHeight = "fClientHeight"/>

    </v-container>
      
  </div>
</template>

<script>
  import AllCom from '@/components/AllCom'
  import TableHeader from '@/components/TableHeader'
  import DirectorCom from '@/components/DirectorCom'

  export default {
    name: 'Director',

    components: {
      AllCom,
      TableHeader,
      DirectorCom,
    },

    props: {
      info: [],
      fClientHeight: Number
    },

    data() {
      return {
        inDirector: true,
        infoP: [],
        infoT: [],
      }
    },

    created() {
      this.makeInfoD()
    },

    watch: {
      info:function() {
        this.infoP = []
        this.infoT = []
        this.makeInfoD()
      }
    },

    methods: {
      makeInfoD() {
        let that = this
        this.info.forEach(function(item) {
          that.infoP.push(item)
        })
        this.info.forEach(function(item) {
          that.infoT.push(item)
        })
      },
    },

  }
</script>
