<template>
  <div class="answer-list">
    <div class="answer" v-for="answer of items" :key="answer.id">
      <nuxt-link class="answer-creater" :to="`/adviser/${answer.userId}`">
        <div class="answer-user">
          <img class="answer-user-avatar" :src="baseUrlImg + answer.avatar" alt="">
          <div class="answer-user-info">
            <div class="answer-user-name">{{ answer.nickName }}</div>
            <div class="answer-time">{{ answer.createTime }}</div>
          </div>
        </div>
      </nuxt-link>
      
      <nuxt-link class="answer-item" :to="`/answer/${answer.id}`">
        <div class="answer-title">{{ answer.title }}</div>
        <div class="answer-reply" v-html="answer.result"></div>
      </nuxt-link>
      
    </div>
  </div>
</template>

<script>

export default {
  name: 'AnswerList',
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
.answer {
  padding: 20px 24px;
  border-bottom: 2px solid #F8F8F8;
  &-item {
    cursor: pointer;
  }
  &:last-child {
    border-bottom: none;
  }

  &-user {
    display: flex;
    margin-bottom: 20px;

    &-avatar {
      display: block;
      width: 72px;
      height: 72px;
      margin-right: 12px;
      border-radius: 100%;
    }

    &-info {
      display: flex;
      flex-direction: column;
      justify-content: center;
      row-gap: 10px;
    }

    &-name {
      color: #000;
      font-size: 22px;
      font-weight: 500;
    }
  }

  &-time {
    color: #AEAEAE;;
    font-size: 16px;
    font-weight: 500;
  }

  &-title {
    color: #000;
    font-size: 22px;
    font-weight: 800;
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
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    * {
      margin: 0;
      line-height: 1;
    }

    &::before{
      content: "";
      display: inline-block;
      vertical-align: top;
      width: 24px;
      height: 24px;
      margin-right: 6px;
      background: url(~/assets/images/service/reply.png) no-repeat;
      background-size: contain;
    }
  }
}
</style>
