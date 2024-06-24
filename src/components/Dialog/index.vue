<template>
  <div v-if="dialogVisible1" class="popup" style="z-index: 999999999999;">
    <!-- 弹窗的内容 -->
    <div class="dia_css" style="position: absolute;background: #fff;">
        <div class="image-wrapper_14 flex-row">
          <img class="thumbnail_46" referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG1a1730c41af2279e3053b2e67cc48a4c.png"
            @click="closeDia"/>
        </div>
        <div class="image-wrapper_15 flex-row">
          <img class="image_12" referrerpolicy="no-referrer" src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNGfdd1de355ade847646e5b7e03b5ef02c.png"/>
        </div>
        <div class="ser_per">
          <span style="text-align: center;">{{serviceInfo.nickName}}</span>
        </div>
        <div class="image-wrapper_16 flex-row">
          <img class="image_13" referrerpolicy="no-referrer" :src="baseUrlImg + serviceInfo.wxQrCode"/>
        </div>
        <div class="group_51 flex-row">
          <div class="image-text_76 flex-row justify-between">
            <div class="img_sty">
              <img src="../../assets/Vector.png">
            </div>
            <span class="name_phone_sty">{{ serviceInfo.phonenumber }}</span>
          </div>
        </div>
        <div class="botto_info_text">
          <div>
            <span class="colo_sty">*</span>
            <span>咨询时请说明来自海洋财经，以便得到更佳服务</span>
          </div>
        </div>
      </div>
    <!-- 关闭按钮 -->
    </div>
</template>
<script>
import { getAlertInfo } from '@/api/index'
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
      this.getService()
    },
    methods: {
      async getService() {
          const {data} = await getAlertInfo({})
          this.serviceInfo = data
        },
      closeDia() {
        // this.dialogVisible1=false
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


.dia_css {
    border-radius: 10px;
    height: 353px;
    width: 300px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
}

.dia_css .image_13 {
    width: 110px;
    height: 110px;
    margin-bottom: 16px;
}
.dia_css .botto_info_text .colo_sty {
    color: red;
}

.dia_css .botto_info_text {
    margin-bottom: 16px;
    font-family: PingFang SC, PingFang SC;
    font-weight: 500;
    font-size: 14px;
    color: #7A7A7A;
    padding: 0 15px;
}
.dia_css .name_phone_sty {
    font-family: PingFang SC, PingFang SC;
    font-weight: bold;
    font-size: 25px;
    color: #1ABCFC;
    margin-bottom: 16px;
}
.dia_css .ser_per {
    font-family: PingFang SC, PingFang SC;
    font-weight: bold;
    font-size: 16px;
    margin-bottom: 16px;
    color: #242629;
}
.dia_css .image-wrapper_15 {
    margin-bottom: 16px;
    margin-top: 35px !important;
}
.dia_css .image-wrapper_14 {
    position: absolute;
    right: 15px;
    top: 15px;
}
</style>
