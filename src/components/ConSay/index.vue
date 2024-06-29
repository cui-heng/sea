<template>
  <div v-if="dialogVisible1" class="popup" style="z-index: 99999;">
    <!-- 弹窗的内容 -->
    <!-- 关闭按钮 -->
    <div class="image-wrapper_14 flex-row" @click="closeDia">
      <img class="thumbnail_46" referrerpolicy="no-referrer"
        src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG1a1730c41af2279e3053b2e67cc48a4c.png"
        @click="closeDia"/>
    </div>
      <div class="img_box">
        <img src="@/assets/mz.png" alt="">
      </div>
    </div>
</template>
<script>
  export default {
    data() {
      return {
        serviceInfo: {}
      }
    },
    props: {
      dialogVisible1: {
        required: true,
        type: Boolean,
        default: false
      },
    },
    mounted() {
    },
    methods: {
      closeDia() {
        this.$emit('closeDia')
      }
    }
  }
</script>

<style scoped lang="scss">
  .popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}


 
.popup-content {
  background: #fff;
  padding: 20px;
  border-radius: 5px;
}
.img_box img {
  width: 80vw;
}
.image-wrapper_14 {
    position: absolute;
    right: 53px;
    top: 68px;
}

</style>
