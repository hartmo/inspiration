<template>
    <div>
        <el-input placeholder="输入书本名称" v-model="bookname">
            <template slot="prepend">书本名称：</template>
            <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
    </div>
</template>
<style scoped>
    @import "du1du.scss";
</style>

<script>
    import src from "axios";
  /**
   *Created by uc on 2018/4/26
   */
  export default {
    name: "du1du",
    data () {
      return {
        bookname: ''
      }
    },
    components: {},
    props: {},
    computed: {},
    methods: {
      search () {
        src({
          method: 'post',
          baseURL: 'http://127.0.0.1:9001',
          url:'/search',
          data:{bookname:this.bookname},
          timeout: 10000,
        }).then(res=>{
          console.log(res);
        })
      }
    }
  }
</script>
