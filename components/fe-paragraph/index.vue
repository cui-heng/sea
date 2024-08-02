<template>
  <p class="fe-paragraph">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'fe-paragraph',
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
.fe-paragraph {
  margin: 0;
  color: #3C3C3C;
  font-weight: 800;
}
</style>
