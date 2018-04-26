<template>
    <el-tabs v-model="activeName" type="card">
        <el-tab-pane label="读1读" name="du1du">
            <du1du></du1du>
        </el-tab-pane>
    </el-tabs>
</template>
<style scoped>
    @import "crawler.scss";
</style>

<script>
  /**
   *Created by uc on 2018/4/26
   */
  import du1du from "./du1du/du1du";
  export default {
    name: "bookshelf",
    data () {
      return {
        activeName: 'du1du'
      }
    },
    components: {
      du1du
    },
    props: {},
    computed: {},
    methods: {
      handleTabsEdit () {

      }
    }
  }
</script>
