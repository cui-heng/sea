<template>
  <ol class="issue-list">
    <li class="issue-item" v-for="(item, index) in items" :key="item.id">
      <span
        class="issue-index"
        :class="issueIndexColors[index]"
      >{{ `${index + 1}`.padStart(2, '0') }}</span>
      <span class="issue-text">
        <slot class="issue-text" :item="item">{{ item.title }}</slot>
      </span>
    </li>
  </ol>
</template>

<script>
export default {
  name: "IssueList",
  props: {
    items: Array
  },
  computed: {
    issueIndexColors() {
      return ['issue-index--first', 'issue-index--second', 'issue-index--third']
    }
  }
};
</script>

<style scoped lang="scss">
.issue {
  &-list {
    margin: 0;
    padding: 20px 32px;
    display: flex;
    flex-direction: column;
    row-gap: 36px;
  }
  

  &-item {
    display: flex;
    align-items: center;
    list-style: none;
    color: #6d6d6d;
    font-weight: 500;
  }

  &-index {
    width: 24px;
    height: 24px;
    font-size: 12px;
    text-align: center;
    line-height: 24px;
    margin-right: 10px;

    &--first,
    &--second,
    &--third {
      color: #fff;
    }

    &--first {
      background: #ff5065;
    }

    &--second {
      background: #ff704e;
    }

    &--third {
      background: #ff964e;
    }
  }

  &-text {
    flex: 1;
    font-size: 14px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    
    a {
      color: #6D6D6D;
    }
  }
}
</style>
