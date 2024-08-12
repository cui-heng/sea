<template>
  <div class="biz-search">
    <img class="biz-search-backdrop" src="@/assets/images/layout/backdrop.png" alt="" />
    <img class="biz-search-title" src="@/assets/images/layout/title.png" alt="这里有你要的一切" />
    <div class="biz-search-search">
      <div class="ipt_box">
        <el-input v-model="searchText" placeholder="请输入搜索内容"></el-input>
      </div>
      <div class="search_btn">
        <img src="@/assets/newBanner/turn_big.png" alt />
        搜索
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchText: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.biz-search {
  width: 100%;
  height: 400px;
  position: relative;

  &-backdrop {
    position: absolute;
    width: 100%;
    height: 100%;
  }

  &-title {
    position: absolute;
    width: 460px;
    height: 58px;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
  }

  &-search {
    display: flex;
    width: 713px;
    margin: 0 auto;
    transform: translateY(207px);
    height: 60px;
    ::v-deep .ipt_box {
      width: 543px;
      height: 60px;
      background: #ffffff;
      border-radius: 6px 0px 0px 6px;
      .el-input {
        height: 100%;
        input {
          height: 100%;
          font-size: 26px;
        }
        input::placeholder {
          font-family: PingFang SC;
          font-weight: 500;
          font-size: 26px;
          color: #cecece;
        }
      }
    }
    .search_btn {
      flex: 1;
      height: 60px;
      background: #0242ac;
      border-radius: 0px 6px 6px 0px;
      font-family: PingFang SC;
      font-weight: 500;
      font-size: 26px;
      color: #ffffff;
      line-height: 59px;
      text-align: center;
      img {
        width: 30px;
        transform: translateY(7px);
        height: 30px;
      }
    }
  }
}
</style>
