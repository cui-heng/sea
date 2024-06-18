<template>
  <Home v-if="!isH5" />
  <Phone v-else></Phone>
  <!-- <AdminIndex v-else-if="isAdmins" /> -->
</template>

<script>
import Phone from './views/phone'
import Home from './views/home'
import AdminIndex from './views/adminIndex'

export default {
  components: { Home, Phone },
  data() {
    return {
      routPath: window.location.href,
      isAdmins: false,
      isH5: false
    }
  },
  created() {
    // this.isAdmins = this.isAdmin()
    this._isMobile()
  },
  mounted() {
    if (this.isH5) {
      this.$router.replace('/lanhu_denglux2fzhucePhone');
    } else {
      this.$router.replace('/');
    }
  },

  methods: {
    _isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      this.isH5 = flag
    },

    isAdmin() {
      console.log(this.routPath)
      return this.routPath.indexOf('/admin') !== -1
    }
  }
}
</script>
<style lang="css" src="./common.css">
</style>