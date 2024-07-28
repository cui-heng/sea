<template>
  <div class="staff-card">
    <div class="staff-card-info">
      <div class="staff-card-body">
        <p class="staff-card-name">{{ staff.nickName }}</p>
        <div class="staff-card-desc">
          <span>{{ staff.remark }}</span>
          <span>帮助{{ staff.helpNumber }}</span>
        </div>
      </div>
      <div class="staff-card-extra">
        <slot name="extra"></slot>
      </div>
    </div>
    <div class="staff-card-avatar">
      <img :src="baseUrlImg + staff.avatar" :alt="staff.nickName">
    </div>
  </div>
</template>

<script>

export default {
  name: 'StaffCard',
  props: {
    staff: Object,
  },
  data() {
    return {
      
    }
  },
  watch: {
    
  },
  mounted() {
    console.log(this.staff);
  },
  methods: {
    
  }
}
</script>

<style scoped lang="scss">
.staff-card {
  display: inline-flex;
  width: 383px;
  height: 192px;
  background: #fff;
  box-shadow: 0px 1px 17px 1px rgba(8,1,3,0.07);

  &-info {
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0 12px 0 18px;
  }

  &-body {
    flex: 1;
    align-content: center;
    border-bottom: 1px solid #E0E0E0;
  }

  &-name {
    margin: 0;
    margin-bottom: 16px;
  }

  &-desc {
    color: #aaa;
    font-size: 13px;
    margin-bottom: 16px;
  }

  &-extra {
    display: flex;
    justify-content: center;
  }

  &-avatar {
    width: 143px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
