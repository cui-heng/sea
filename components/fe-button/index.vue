<template>
  <button class="fe-button" :class="classNames" v-on="$listeners">
    <span class="fe-button-icon" v-if="icon">
      <fe-icon :icon="icon" />
    </span>
    <span>
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'fe-button',
  props: {
    icon: String,
    size: {
      type: String,
    },
    type: {
      type: String,
      default: 'default'
    }
  },

  computed: {
    classNames() {
      return {
        [`fe-button--${this.type}`]: !!this.type,
        [`fe-button--${this.size}`]: !!this.size,
      }
    }
  },
}
</script>

<style lang="scss">
.fe-button {
  height: 34px;
  line-height: 34px;
  padding: 0 44px;
  font-size: 16px;
  font-weight: 800;
  border-radius: 4px;
  cursor: pointer;

  span {
    display: inline-block;
  }

  &--default {
    color: #0242AC;
    border: 1px solid #0242AC;
  }

  &--primary {
    color: #fff;
    background: #0242AC;
  }

  &--wechat {
    color: #10CB8C;
    border: 1px solid #10CB8C;
  }

  &--small {
    height: 28px;
    line-height: 28px;
    padding: 0 15px;
  }

  &--large {
    height: 44px;
    line-height: 44px;
    padding: 0 20px;
  }
}
</style>
