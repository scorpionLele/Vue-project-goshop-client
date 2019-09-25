<template>
  <div>
    <router-view></router-view>
    <FooterGuide v-show="$route.meta.isShow"></FooterGuide>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
export default {
  async mounted (){
    this.$store.dispatch('getAddress')
    this.$store.dispatch('autoLogin')
  },
  components:{
    FooterGuide
  },
  name: 'App'
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
