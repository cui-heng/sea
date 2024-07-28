<template>
  <span class="icon">
    <img :src="require(`@/assets/icons/${icon}.png`)" :alt="icon" />
  </span>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
      default: 'eye'
    },
  }
}
</script>

<style scoped lang="scss">
.icon {
  display: inline-block;
  vertical-align: top;

  img {
    width: 16px;
    height: 16px;
    display: block;
  }
}
</style>
