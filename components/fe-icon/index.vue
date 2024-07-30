<template>
  <span class="fe-icon">
    <img :src="require(`@/assets/icons/${icon}.png`)" :alt="icon" />
  </span>
</template>

<script>
export default {
  name: 'fe-icon',
  props: {
    icon: {
      type: String,
      default: 'eye'
    },
  }
}
</script>

<style lang="scss">
.fe-icon {
  display: inline-flex;
  width: 16px;
  height: 16px;
  vertical-align: -0.16em;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
  }
}
</style>
