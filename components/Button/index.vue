<template>
  <button class="button">
    <Icon v-if="icon" :icon="icon" />
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    icon: String
  }
}
</script>

<style scoped lang="scss">
.button {
  font-weight: 800;
  font-size: 16px;
  line-height: 1;
  padding: 6px 15px;
  border: 1px solid #0242AC;
  color: #0242AC;
  border-radius: 4px;
  cursor: pointer;
}
</style>
