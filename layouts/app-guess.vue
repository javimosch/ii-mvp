<template>
  <div class="container-fluid pl-0 pr-0">
    <div class="row no-gutters">
      <div class="col-sm-12">
        <app-header :nav="false"></app-header>
      </div>
    </div>
    <div class="row  no-gutters">
      <div class="col-sm-12">
      <nuxt/>
      </div>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>
<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
export default {
  components:{
    AppHeader:Header,
    AppFooter:Footer
  }
}
</script>
<style lang="scss">
html,body{
  margin:0px;
  padding:0px;
  background: url(https://source.unsplash.com/vfzfavUZmfc/1600x900);
    background-repeat: no-repeat;
    background-size: contain;
    @media only screen and (max-width: 768px) {
    background-size: cover;
  }
    @media only screen and (min-width: 1400px) {
    background-size: cover;
  }
}
</style>
