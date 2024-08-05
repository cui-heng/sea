<template>
  <p class="fe-paragraph" :class="classNames" :style="style">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: 'fe-paragraph',
  props: {
    ellipsis: {
      type: [Boolean, Number],
      default: false,
    }
  },
  computed: {
    classNames() {
      const isSingleLine = this.ellipsis === 1;
      const isMultipleLine = this.ellipsis > 1;
      return {
        ['fe-paragraph-ellipsis-single-line']: typeof this.ellipsis === 'boolean' ? this.ellipsis : isSingleLine,
        ['fe-paragraph-ellipsis-multiple-line']: isMultipleLine,
      }
    },
    style() {
      if (this.ellipsis > 1) {
        return {
          ['-webkit-line-clamp']: this.ellipsis
        }
      }
    }
  }
}
</script>

<style lang="scss">
.fe-paragraph {
  margin: 0;
  color: #3C3C3C;
  font-weight: 500;

  &-ellipsis-single-line {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  &-ellipsis-multiple-line {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    overflow: hidden;
  }
}
</style>
