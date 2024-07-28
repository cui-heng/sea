<template>
  <div class="consult-list">
    <div class="consult" v-for="consult of items" :key="consult.id">
      <div class="consult-title">{{ consult.title }}</div>
      <div class="consult-reply" v-html="consult.result"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'ConsultList',
  props: {
    items: Array,
  },
  data() {
    return {
      
    }
  },
}
</script>

<style scoped lang="scss">
.consult {
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
    font-weight: 800;
    margin-bottom: 20px;
  }

  &-reply {
    color: #9E9E9E;
    font-size: 16px;
    font-weight: 500;    
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;

    * {
      margin: 0;
      line-height: 1;
    }
  }
}
</style>
