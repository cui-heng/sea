<template>
  <div class="root">
    <template v-if="!$isMobile">
      <biz-header />
      <main class="main">
        <nuxt />
      </main>
      <biz-footer />
    </template>
    <template v-else>
      <nuxt />
    </template>
  </div>
</template>

<script>
export default {
  name: 'BasicLayout',
}
</script>
<style scoped>
.root {
  min-width: max-content;
}

.main {
  background-color: #fff;
}
</style>