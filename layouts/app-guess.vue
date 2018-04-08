<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-12">
        <app-header :nav="false"></app-header>
      </div>
    </div>
    <div class="row  no-gutters">
      <div class="col-sm-12">
      <nuxt/>
      </div>
    </div>
  </div>
</template>
<script>
import Header from '@/components/Header';
export default {
  components:{
    AppHeader:Header
  }
}
</script>
<style lang="scss">
html,body{
  background: url(https://source.unsplash.com/WLUHO9A_xik/1600x900);
    background-repeat: no-repeat;
    background-size: cover;
}
</style>
