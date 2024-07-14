<template>
  <div class="app">
    <VHeader />
    <el-row id="content" type="flex" justify="center" class="app-content">
      <el-col :style="{ 'minHeight': minHeight + 'px' }">
        <nuxt />
      </el-col>
    </el-row>
    <VFooter />
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
.app {
  font-family: "microsoft yahei", serif;
}

.app-content {
  background-color: #f9f9f9;
  padding: 30px 0;
}

.navBarWrap {
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
}
</style>
