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
    },
    ghost: Boolean,
    danger: Boolean,
  },

  computed: {
    classNames() {
      return {
        [`fe-button--${this.type}`]: !!this.type,
        [`fe-button--${this.size}`]: !!this.size,
        [`fe-button--ghost`]: !!this.ghost,
        [`fe-button--danger`]: !!this.danger,
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

    &.fe-button--ghost {
      color: #0242AC;
      border: 1px solid #0242AC;
      background: transparent;
    }
  }

  &--wechat {
    color: #fff;
    background: #10CB8C;

    &.fe-button--ghost {
      color: #10CB8C;
      border: 1px solid #10CB8C;
      background: transparent;
    }
  }

  &--danger {
    color: #FF0000;
    border: 1px solid #FF0000;
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
    font-size: 18px;
  }
}
</style>
