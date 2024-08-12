<template>
  <span class="fe-icon">
    <svg-icon :name="icon" width="1em" height="1em" fill="currentColor" v-bind="$attrs"/>
  </span>
</template>

<script>
export default {
  name: 'fe-icon',
  inheritAttrs: false,
  props: {
    icon: {
      type: String,
      default: 'question'
    },
  }
}
</script>

<style lang="scss">
.fe-icon {
  display: inline-flex;
  align-items: center;
  line-height: 0;
  text-align: center;
  vertical-align: -0.16em;
}
</style>
