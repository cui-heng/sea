<template>
  <div class="fe-image" :class="classNames">
    <img v-bind="$attrs" :src="fullSrc" />
  </div>
</template>

<script>
export default {
  name: 'fe-image',
  inheritAttrs: false,
  props: {
    src: String,
    circle: Boolean,
  },
  computed: {
    fullSrc() {
      if (this.src) {
        return this.src?.startsWith('http') ? this.src : this.baseUrlImg + this.src;
      }

      return this.src;
    },
    classNames() {
      const classNames = [];

      if (this.circle) {
        classNames.push('fe-image--circle');
      }

      return classNames;
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

  &--circle img {
    border-radius: 100%;
    overflow: hidden;
  }
}
</style>
