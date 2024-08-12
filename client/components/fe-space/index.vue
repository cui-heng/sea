<template>
  <span class="fe-space" :style="style">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'fe-space',
  props: {
    size: {
      type: [Number, Array],
      default: 10
    },
  },
  computed: {
    style() {
      if (Array.isArray(this.size)) {
        const [columnGap, rowGap] = this.size;
        return {
          gap: `${columnGap}px ${rowGap}px`
        }
      }

      return {
        gap: `${this.size}px`
      }
    }
  }
}
</script>

<style lang="scss">
.fe-space {
  display: flex;
}
</style>
