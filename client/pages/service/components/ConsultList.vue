<template>
  <div class="consult-list">
    <nuxt-link class="consult" v-for="article of items" :key="article.id" :to="`/answer/${article.id}`">
      <fe-title class="consult-title" :level="3">{{ article.title }}</fe-title>
      <fe-paragraph class="consult-reply" :ellipsis="2">{{ article.result | text }}</fe-paragraph>
    </nuxt-link>
  </div>
</template>

<script>

export default {
  name: 'ConsultList',
  props: {
    items: Array,
  },
}
</script>

<style scoped lang="scss">
.consult {
  display: block;
  padding: 26px 30px;
  background: #fff;
  border-bottom: 2px solid #F8F8F8;

  &:hover {
    background: #F8F8F8;
  }

  &:last-child {
    border-bottom: none;
  }

  &-title {
    color: #000;
    font-size: 22px;
    margin-bottom: 20px;

    &::before{
      content: "";
      display: inline-block;
      vertical-align: top;
      width: 24px;
      height: 24px;
      margin-right: 6px;
      background: url(~/assets/images/service/ask.png) no-repeat;
      background-size: contain;
    }
  }

  &-reply {
    color: #9E9E9E;
    font-size: 16px;
    font-weight: 500;
    line-height: 22px;
  }
}
</style>
