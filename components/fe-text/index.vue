<template>
  <span class="fe-text" :class="classNames">
    <slot></slot>
  </span>
</template>

<script>
export default {
  name: 'fe-text',
  props: {
    type: String,
    level: {
      type: Number,
      default: 1
    },
  },
  computed: {
    tag() {
      return `h${this.level}`
    },
    classNames() {
      return {
        [`fe-text--${this.type}`]: !!this.type
      }
    }
  }
}
</script>

<style lang="scss">
.fe-text {
  color: #3C3C3C;
  font-weight: 500;
  line-height: 1;

  &--secondary {
    color: #969696;
  }

  &--disabled {
    color: #9E9E9E;
  }
}
</style>
