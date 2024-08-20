<template>
  <nav class="fe-breadcrumb">
    <ol>
      <template v-for="(item, index) in items">
        <li v-if="index !== 0" class="fe-breadcrumb-separator">
          <fe-icon icon="right" />
        </li>
        <li>
          <nuxt-link :to="item.pathname" v-if="index < items.length - 1 && item.pathname">{{ item.label }}</nuxt-link>
          <span v-else>{{ item.label }}</span>
        </li>
      </template>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'fe-breadcrumbn',
  props: {
    items: Array,
  },
}
</script>

<style lang="scss">
.fe-breadcrumb {
  font-size: 20px;
  font-weight: 800;
  ol {
    display: flex;
    list-style: none;
    margin: 12px 6px;
    padding: 0;
  }

  li {
    color: #838383;
    padding: 0 10px;

    &.fe-breadcrumb-separator {
      width: 16px;
      padding: 0;
    }

    &:last-child {
      color: #000;
    }

    a {
      color: #838383;
    }
  }
}
</style>
