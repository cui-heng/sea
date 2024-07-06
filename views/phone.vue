<template>
  <div >
    <!-- <VHeader :class="{'navBarWrap':navBarFixed}" /> -->
    <div id="app">
    <router-view/>
  </div>
  </div>
</template>

<script>
// import VHeader from '../components/f-header'
// import VFooter from '../components/f-footer'
export default {
  name: 'Home',
  components: {
    // VHeader, VFooter
  },
  data() {
    return {
      minHeight: 0,
      navBarFixed: false,
      name:''
    }
  },
  mounted() {
    console.log(this.$route, '5555');
    const that = this
    that.minHeight = document.documentElement.clientHeight
    window.addEventListener('scroll', that.watchScroll)
    window.onresize = function () {
      that.minHeight = document.documentElement.clientHeight
    }
  },

  watch: {
    $route(to, from) {
      console.log(to.name);
      this.name=to.name
    }
  },
  methods: {
    watchScroll() {
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      //  当滚动超过 50 时，实现吸顶效果
      this.navBarFixed = scrollTop > 50
    }
  }
}
</script>

<style scoped>

</style>
