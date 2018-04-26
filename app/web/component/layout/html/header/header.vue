<template>
  <header class="header">
    <div class="container"><h1>
      <a href="/" class="router-link-active">爬虫书城</a></h1>
      <ul class="nav">
        <!--<li class="nav-item"><a href="/" :class="{'active' : selectedMenu === '/'}">首页</a></li>-->
        <li class="nav-item"><a href="/" :class="{'active' : selectedMenu === '/'}">爬虫</a></li>
        <li class="nav-item"><a href="/bookshelf" :class="{'active' : selectedMenu === '/bookshelf'}">书架</a></li>
      </ul>
    </div>
  </header>
</template>
<style>
  @import "header.scss";
</style>
<script type="text/babel">
  export default{
    data(){
      return {
        selectedMenu : '/'
      }
    },
    computed:{
    },
    mounted(){
      this.selectedMenu = window.location.pathname.toLowerCase();
    }
  }
</script>
