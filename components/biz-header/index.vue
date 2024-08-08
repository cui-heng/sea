<template>
  <header class="biz-header">
    <div class="biz-header-inner">
      <div class="biz-header-logo">
        <img src="@/assets/images/layout/logo.png" alt="海洋财经LOGO" />
      </div>
      <div class="biz-header-right">
        <div class="biz-header-exrta">
          <div class="biz-header-search"></div>
          <div class="biz-header-actions">
            <nuxt-link to="/login">登录</nuxt-link>
            <span class="biz-header-actions-divider">|</span>
            <nuxt-link to="/login">注册</nuxt-link>
          </div>
        </div>
        <nav class="biz-header-nav">
          <ul class="biz-header-menu" ref="menu">
            <li class="biz-header-menu-item" v-for="menu of menus" :key="menu.value">
              <nuxt-link :to="menu.value" :exact="menu.exact">{{ menu.label }}</nuxt-link>
            </li>
          </ul>
          <span class="biz-header-nav-line" :style="menuLineStyle"></span>
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          label: '首页',
          value: '/',
          exact: true,
        },
        {
          label: '有问必答',
          value: '/answer'
        },
        {
          label: '期货手续费',
          value: '/commission'
        },
        {
          label: '期货保证金',
          value: '/earnest'
        },
        {
          label: '期货一对一服务',
          value: '/service'
        },
      ],
      menuLineStyle: {}
    };
  },
  mounted() {
    this.setMenuLine();
  },
  watch: {
    ['$route.path']() {
      this.$nextTick(this.setMenuLine);
    }
  },
  methods: {
    setMenuLine() {
      const menuRect = this.$refs.menu.getBoundingClientRect();
      const activeMenuRect = this.$refs.menu.querySelector('.router-link-active')?.getBoundingClientRect();

      if (activeMenuRect) {
        const left = activeMenuRect.left - menuRect.left;

        this.menuLineStyle = {
          width: `${Math.max(110, activeMenuRect.width)}px`,
          left: `${left +( activeMenuRect.width / 2)}px`
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.biz-header {
  position: relative;
  min-width: 1200px;
  border-top: 8px solid #0242ac;
  background: #fff;
  box-shadow: 0px 1px 17px 1px rgba(8,1,3,0.07);
  z-index: 5;

  &-inner {
    display: flex;
    width: 1200px;
    height: 100px;
    margin: 0 auto;
    justify-content: space-between;
    align-items: center;
  }

  &-logo {
    width: 250px;
    height: 52px;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }

  &-right {
    flex: 1;
    align-self: flex-end;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  &-exrta {
    display: flex;
    column-gap: 16px;
    align-items: center;
    height: 32px;
  }

  &-actions {
    color: #474747;
    line-height: 16px;

    &-divider {
      font-size: 12px;
    }

    a {
      color: #474747;
      font-size: 14px;
    }
  }

  &-nav {
    position: relative;

    &-line {
      position: absolute;
      bottom: 0;
      left: 55px;
      transform: translateX(-50%);
      height: 2px;
      background: #0242AC;
      transition: left .3s;
    }
  }

  &-menu {
    display: flex;
    list-style: none;

    &-item {
      margin-left: 60px;

      a {
        color: #474747;
        font-size: 20px;
        font-weight: 500;
      }

      &:first-child {
        margin-left: 0;
      }

      ::v-deep .router-link-active {
        color: #0242AC;
        font-weight: 800;
      }
    }
  }
}
</style>
