<template>
  <div class="root">
    <template v-if="!$isMobile">
      <biz-header />
      <main class="main">
        <nuxt />
      </main>
      <biz-footer />
    </template>
    <template v-else>
      <nuxt />
    </template>
  </div>
</template>

<script>
export default {
  name: 'BasicLayout',
  data() {
    return {
      isMobile: false,
      minHeight: 0,
      navBarFixed: false,
    }
  },
  mounted() {
    console.log(this.$isMobile, '27')
    this.minHeight = document.documentElement.clientHeight
    window.addEventListener('scroll', this.watchScroll)
    window.onresize = function () {
      this.minHeight = document.documentElement.clientHeight
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
.root {
  min-width: max-content;
}

.main {
  background-color: #fff;
}
</style>