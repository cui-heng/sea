<template>
  <div class="fe-image">
    <img v-bind="$attrs" :src="fullSrc" />
  </div>
</template>

<script>
export default {
  name: 'fe-image',
  inheritAttrs: false,
  props: {
    src: String,
  },
  computed: {
    fullSrc() {
      if (this.src) {
        return this.src?.startsWith('http') ? this.src : this.baseUrlImg + this.src;
      }
    }
  }
}
</script>

<style lang="scss">
.fe-image {
  img {
    width: 100%;
    height: 100%;
    display: block;
  }
}
</style>
