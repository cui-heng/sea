<template>
  <component class="fe-title" :is="tag">
    <slot></slot>
  </component>
</template>

<script>
export default {
  name: 'fe-title',
  props: {
    level: {
      type: Number,
      default: 1
    },
  },
  computed: {
    tag() {
      return `h${this.level}`
    }
  }
}
</script>

<style lang="scss">
.fe-title {
  margin: 0;
  color: #3C3C3C;
  font-weight: 800;
  line-height: 1;
}
</style>
