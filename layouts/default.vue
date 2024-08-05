<template>
  <div class="app">
    <template v-if="!$isMobile">
      <VHeader />
      <el-row id="content" type="flex" justify="center" class="app-content">
        <el-col :style="{ 'minHeight': minHeight + 'px' }">
          <nuxt />
        </el-col>
      </el-row>
      <VFooter />
    </template>
    <template v-else>
      <nuxt />
    </template>
  </div>
</template>

<script>
import VHeader from '@/components/f-header'
import VFooter from '@/components/f-footer'
export default {
  name: 'Home',
  components: {
    VHeader, VFooter
  },
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
.app-content {
  background-color: #fff;
  width: 1200px;
  margin: 0 auto;
}

.navBarWrap {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
}
</style>