<template>
  <div class="answer-card">
    <div class="answer-card-header">
      <h4 class="answer-card-header-title">{{ title }}</h4>
    </div>
    <div class="answer-card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'AnswerCard',
  props: {
    title: String,
  },
  data() {
    return {
      
    }
  },
}
</script>

<style scoped lang="scss">
.answer-card {
  display: flex;
  flex-direction: column;
  height: 945px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0px 1px 17px 1px rgba(8,1,3,0.07);

  &-header {
    height: 58px;
    padding: 0 28px;
    position: relative;

    &-title {
      width: 110px;
      color: #0242AC;
      font-size: 24px;
      line-height: 58px;
      text-align: center;
      border-bottom: 3px solid #0242AC;
      margin: 0;
    }
  }

  &-body {
    flex: 1;
    overflow: auto;
  }
}
</style>
