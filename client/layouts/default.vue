<template>
  <main class="main">
    <template v-if="!$isMobile">
      <biz-header />
      <div class="body">
        <nuxt />
      </div>
      <biz-footer />
    </template>
    <template v-else>
      <nuxt />
    </template>
  </main>
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
.main {
  min-width: max-content;
}

.body {
  background-color: #fff;
}
</style>