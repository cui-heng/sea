<template>
  <div class="qh_box">
    <el-drawer :visible.sync="drawer" :direction="direction" :before-close="handleClose">
      <el-menu :default-active="activeIndex" :router="true" class="el-menu-vertical-demo">
        <el-menu-item index="/lanhu_shouye">首页</el-menu-item>
        <el-menu-item index="/lanhu_youwenbida">有问必答</el-menu-item>
        <el-menu-item index="/aboutPhone">期货手续费</el-menu-item>
        <el-menu-item index="/aboutPhoneMargin">期货保证金</el-menu-item>
        <el-menu-item index="/lanhu_qihuobaozhengjin">期货一对一服务</el-menu-item>
      </el-menu>
    </el-drawer>
    <div class="section_3 flex-col">
      <div class="section_4 flex-row">
        <div class="image-wrapper_1 flex-col justify-between">
          <img
            class="image_1"
            referrerpolicy="no-referrer"
            src="./lanhu_youwenbida/assets/img/FigmaDDSSlicePNG41d76e5352422ea2728cff2c9f23ed19.png"
          />
          <img
            class="image_2"
            referrerpolicy="no-referrer"
            src="./lanhu_youwenbida/assets/img/FigmaDDSSlicePNGa248b93bac5dd25c5ba4e2eff60f7753.png"
          />
        </div>
        <div class="box_1 flex-col">
          <div class="image-wrapper_2 flex-col">
            <img
              class="label_4"
              referrerpolicy="no-referrer"
              src="./lanhu_youwenbida/assets/img/FigmaDDSSlicePNGc91b60cc0d136034d7e1cde253d50a91.png"
            />
          </div>
        </div>
        <img
          @click="showRight"
          class="label_5" 
          referrerpolicy="no-referrer"
          src="./lanhu_youwenbida/assets/img/FigmaDDSSlicePNG85213edb0f33d45b7ecd052df3ec843a.png"
        />
      </div>
      <div class="group_3 flex-row" style="margin-top: 10px;padding: 10px;">
        <span class="text_3">海洋财经</span>
        <img  style=" margin: 0.107rem 0 0 0.48rem;width: 7px;height: 7px;" referrerpolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG378c59d9ff2c6ab7928bcb7dacf26fb5.png" />
        <div class="image-text_1 flex-row justify-between">
          <span class="text-group_1">期货手续费</span>
          <img class="thumbnail_2" referrerpolicy="no-referrer"
            src="https://lanhu.oss-cn-beijing.aliyuncs.com/FigmaDDSSlicePNG378c59d9ff2c6ab7928bcb7dacf26fb5.png" />
        </div>
      </div>
      <div class="group_4 flex-col"></div>
      <!-- <div class="section_6 flex-col"></div> -->
    </div>
    <el-row class="main" type="flex" justify="center">
      <el-col :span="23">
        <el-tabs v-model="activeName" @tab-click="msData">
          <el-tab-pane v-for="item in listData" :label="item.title" :name="item.title">
            <div style="width: 100%;height: 20px;font-size: .72rem;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #000000;
line-height: 22px;">期货全品种手续费一览表</div>
            <p class="ht_box" style="font-size: 14px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #707070 !important;
line-height: 29px;" v-html="msData1">
            </p>

            <div>
              <p style="font-size: 16px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #242629;
line-height: 16px;">{{ item.title }}:</p>
              <div>
                <span style="font-size: 16px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #023665;
line-height: 16px;padding-right: 30px;cursor: pointer;" v-for="item1 in item.items" @click="handleClick(item, item1)">{{ item1
                  }}</span>
              </div>
            </div>
            <div style="margin-top: 20px;">
              <el-button type="primary" size="small">只显示主力合约</el-button>
              <el-button type="primary" size="small" @click="dlowData">下载手续费Excel表格</el-button>
              <p style="font-size: 14px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #545454;
line-height: 24px;">(手续费更新时间:2024-03-12 17:45:12.528，价格更新时间:2024-03-12 17:45:12.528)</p>
            </div>
            <div>
              <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="productName" label="合约品种">
                </el-table-column>
                <el-table-column prop="curPrice" label="现价">
                </el-table-column>
                <el-table-column label="手续费(万分之*或*元)">
                  <el-table-column prop="openValue" label="开仓">
                  </el-table-column>
                  <el-table-column label="平昨" prop="flatYesValue">

                  </el-table-column>
                  <el-table-column label="平今" prop="flatTodayValue">

                  </el-table-column>

                </el-table-column>
                <el-table-column label="手续费(开+平)" prop="sxfkjp">

                </el-table-column>
                <el-table-column label="备注" prop="remark">

                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getTransactionCategory, getTransactionData, getTransactionData1, getExchangeInfo, getBreedInfo } from '@/api/index'
export default {
  name: 'About',
  data() {
    return {
      drawer:false,
      mbx: this.$route.path,
      title1: '',
      productName1: '',
      msData1: "",
      listData: [],
      tableData: [{
        date: '2016-05-07',
        name: '王小虎',
        province: '上海',
        city: '普陀区',
        address: '上海市普陀区金沙江路 1518 弄',
        zip: 200333
      }],
      activeName: '上海国际能源交易中心',
      formLabelAlign: {
        name: '',
        email: '',
        content: ''
      },
      rules: {
        name: [{
          required: true,
          message: this.$t('about.nameTip'),
          trigger: 'blur'
        }],
        email: [{
          required: true,
          message: this.$t('about.emailTip1'),
          trigger: 'blur'
        },
        {
          type: 'email',
          message: this.$t('about.emailTip2'),
          trigger: ['blur', 'change']
        }
        ],
        content: [{
          required: true,
          message: this.$t('about.contentTip'),
          trigger: 'blur'
        }]
      }
    }
  },
  watch: {
    // 此处监听variable变量，当期有变化时执行
    $route(item1, item2) {
      this.mbx = this.$route.path
    }
  },
  created() {
    console.log(this.$route.path, 'kkkk');
    getTransactionCategory().then(res => {
      this.listData = res.data
    })
    getExchangeInfo({ name: '上海期货交易所' }).then(res => {
      this.msData1 = res.data.remark
    })
    this.dataList()
  },
  methods: {
    showRight() {
      console.log(11)
      this.drawer = true
    },
    msData(val) {
      getExchangeInfo({ name: this.activeName }).then(res => {
        this.msData1 = res.data.remark
      })
    },
    dlowData() {
      getTransactionData1({
        title: this.title1,
        productName: this.productName1,
        remark: '主力合约',
        export: true
      }).then(res => {
        let blob = new Blob([res], { type: 'application/vnd.ms-excel' });
        let objectUrl = URL.createObjectURL(blob);
        window.location.href = objectUrl;
      })
    },
    handleClick(val, val1) {
      this.title1 = val.title
      this.productName1 = val1
      this.dataList()
    },
    dataList(val) {

      getTransactionData({
        title: this.title1,
        productName: this.productName1,
        remark: val!=undefined?val:'',
      }).then(res => {
        this.tableData = res.data[0].items
      })
    },
    showZhuli() {
      this.dataList('主力合约')
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          return false
        }
      })
    }
  }
}
</script>

<style scoped>
::v-deep .el-table thead.is-group th {
  background-color: #023665;
  color: #fff;
}

.dl-blog dd {
  margin-left: 30px;
}

.dl-blog .icon {
  width: 20px;
  height: 20px;
}

.title {
  margin-top: 40px;
}

.statement {
  border-left: 3px solid #F56C6C;
  padding: 20px;
  background-color: #EBEEF5;
  margin-top: 20px;
}
::v-deep .el-drawer__body {
  .el-menu {
    border: none;
    .el-menu-item {
      font-family: PingFang SC, PingFang SC;
      font-weight: 500;
      font-size: 16px;
      margin-left: 0;
      border-bottom: 1px solid #eae4e4;
      color: #242629;
    }
    
  }
}
::v-deep .el-drawer {
  width: 7rem !important;
}
.section_3 {
  height: 4.4rem !important;
}
.ht_box {
  p {
    span {
      color: #707070 !important;
    }
  }
}

::v-deep .el-table__row {
  font-family: PingFang SC, PingFang SC;
  font-weight: 500;
  font-size: 14px;
  color: #242629;
}
::v-deep .el-table__row .el-table_1_column_1 {
  font-family: PingFang SC, PingFang SC;
  font-weight: bold;
  font-size: 14px;
  color: #023665;
}
</style>
<style scoped lang="css" src="./lanhu_youwenbida/assets/index.rem.css" />