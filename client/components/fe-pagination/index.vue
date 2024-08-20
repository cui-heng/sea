<template>
  <ul class="fe-pagination" v-if="total > pageSize">
    <li
      class="fe-pagination-item"
      :class="{
        'fe-pagination-item--active': current == item.page,
        'fe-pagination-item--jump': item.type !== 'page',
      }"
      v-for="item of items"
      :key="item.page"
      :title="item.title"
    >
      <slot v-bind="item">
        <a @click="$emit('change', item.page)">{{ item.page }}</a>
      </slot>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'fe-pagination',
  model: {
    prop: 'current',
    event: 'change',
  },
  props: {
    total: {
      type: Number,
    },
    current: {
      type: [Number, String],
      default: 1,
    },
    pageSize: {
      type: Number,
      default: 10
    },
  },
  computed: {
    items() {
      const left = 1;
      const right = Math.ceil(this.total / this.pageSize);
      const rangeLength = Math.min(5, right - 2);
      const current = Number(this.current);
      const rangeHalf = Math.floor(rangeLength / 2);
      let rangeStart = left + 1;
      const rangePages = [];

      if (current - rangeHalf > left) {
        rangeStart = current - rangeHalf;
      }

      if (current + rangeHalf >= right) {
        rangeStart = right - rangeLength;
      }

      for (let i = 0; i < rangeLength; i++) {
        let type = 'page';
        let page = rangeStart + i;
        let title = page;

        if (i === 0 && page !== left + 1) {
          type = 'prev';
          page = Math.max(1, current - rangeLength);
          title = `向前 ${rangeLength} 页`
        }

        if (i === rangeLength - 1 && page !== right - 1) {
          type = 'next'
          page = Math.min(right, current + rangeLength);
          title = `向后 ${rangeLength} 页`
        }

        rangePages.push({
          page,
          type,
          title
        });
      }

      return [
        {
          page: left,
          type: 'page',
          title: left,
        },
        ...rangePages,
        {
          page: right,
          type: 'page',
          title: right,
        }
      ];
    }
  },
}
</script>

<style lang="scss">
.fe-pagination {
  display: flex;
  justify-content: flex-end;
  list-style: none;
  padding: 0;

  &-item {
    min-width: 32px;
    height: 32px;
    color: #3C3C3C;
    text-align: center;
    line-height: 32px;
    margin-right: 8px;
    border-radius: 3px;
    border: 1px solid transparent;
    cursor: pointer;

    a {
      display: block;
      padding: 0 6px;
      color: #3C3C3C;
    }

    &--active {
      color: #0242AC;
      border-color: #0242AC;

      a {
        color: #0242AC;
      }
    }

    &--jump {
      color: #969696;

      a {
        color: #969696;
        padding: 0;
      }

      &:hover {
        color: #0242AC;

        a {
          color: #0242AC;
        }
      }
    }

    &:hover {
      background: rgba(0, 0, 0, 0.06);
    }
  }
}
</style>
