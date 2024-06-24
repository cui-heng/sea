<template>
  <div class="about" style="padding-left: 280px;padding-right: 280px;font-family: PingFang SC, PingFang SC;">
    <div style="width: 100%;height: 80px;border: 1px solid #fff;position: relative;bottom: 170px;z-index: 999;"></div>

    <el-row class="main" type="flex" justify="center"
      style="background-color: #fff;position: relative;bottom: 175px;padding-top: 30px;">

      <el-col :span="20">
        <div style="width: 100%;position: relative;right:90px;top: -10px;"><span style="font-weight: 500;
font-size: 16px;
color: #8A8A8A;">海洋财经</span>><span style="font-weight: 500;
font-size: 16px;
color: #242629;">{{ mbx == '/about' ? '期货保证金' : '期货保证金' }}</span>></div>
        <el-tabs v-model="activeName" @tab-click="msData">
          <el-tab-pane v-for="item in listData" :label="item.title" :name="item.title">
            <div style="width: 100%;height: 40px;border-bottom: 1px solid #E0E0E0;font-size: 22px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #000000;
line-height: 22px;margin-top: 10px;">期货全品种保证金一览表</div>
            <p style="font-size: 18px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #090909;
line-height: 36px;" v-html="msData1">
            </p>

            <div v-if="activeName == '保证金总表'">
              <!-- {{ item.items }} -->
              <div class="tit_sty_div" v-for="item1 in item.items">
                <p class="second_tit" style="font-size: 16px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500; 
color: #242629;
line-height: 16px;">{{ item1.title }}:</p>
                <div>
                  <span style="font-size: 16px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #023665;
line-height: 16px;padding-right: 30px;cursor: pointer;" @click="handleClick(item1, item2.items)"
                    v-for="item2 in item1.items">{{ item2
                    }}</span>
                </div>
              </div>
            </div>
            <div v-else class="tit_sty_div">
              <p class="second_tit" style="font-size: 16px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #242629;
line-height: 16px;">{{ item.title }}:</p>
              <div>
                <span style="font-size: 16px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #023665;
line-height: 16px;padding-right: 30px;cursor: pointer;" v-for="item1 in item.items"
                  @click="handleClick(item, item1)">{{ item1
                  }}</span>
              </div>
            </div>
            <div style="margin-top: 14px;">
              <el-button type="primary" size="small" @click="showZhuli">{{ isMain? '显示全部': '只显示主力合约' }}</el-button>
              <el-button class="down_btn" type="primary" size="small" @click="dlowData">下载保证金Excel表格</el-button>
              <span style="font-size: 14px;
font-family: PingFang SC-Medium, PingFang SC;
font-weight: 500;
color: #545454;
line-height: 14px;">(保证金更新时间:2024-03-12 17:45:12.528，价格更新时间:2024-03-12 17:45:12.528)</span>
            </div>
            <div style="padding-bottom: 100px;" v-if="activeName == '保证金总表'">
              <div v-for="itemT in tableData">
                <p class="table_title_sty" style="text-align: center;">{{ itemT.title }}</p> 
              <el-table :data="itemT.items" style="width: 100%">
                <el-table-column prop="productName" label="合约品种" width="150">
                </el-table-column>
                <el-table-column prop="curPrice" label="现价" width="150">
                </el-table-column>
                <el-table-column label="保证金%">
                  <el-table-column prop="buyOpen" label="买开%" width="120">
                  </el-table-column>
                  <el-table-column label="卖开%" prop="selling">

                  </el-table-column>
                  <el-table-column label="保证金/每手" prop="bond">

                  </el-table-column>

                </el-table-column>
                <el-table-column label="涨/跌停板" prop="upDown">

                </el-table-column>
                <el-table-column label="备注" prop="remark">

                </el-table-column>
              </el-table>
            </div>
            </div>
            <div style="padding-bottom: 100px;" v-else>
              <el-table :data="tableData" style="width: 100%">
                <el-table-column prop="productName" label="合约品种" width="150">
                </el-table-column>
                <el-table-column prop="curPrice" label="现价" width="150">
                </el-table-column>
                <el-table-column label="保证金%">
                  <el-table-column prop="buyOpen" label="买开%" width="120">
                  </el-table-column>
                  <el-table-column label="卖开%" prop="selling">

                  </el-table-column>
                  <el-table-column label="保证金/每手" prop="bond">

                  </el-table-column>

                </el-table-column>
                <el-table-column label="涨/跌停板" prop="upDown">
                 <template slot-scope="{row}">
                 <span style="color: red;">{{ row.upDown.split('/')[0] }}</span> /<span style="color: blue;">{{ row.upDown.split('/')[1] }}</span>
                 </template>
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
      isMain: false,
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
      activeName: '保证金总表',
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
      this.listData = JSON.parse(JSON.stringify(res.data))
      let newItems = []
      newItems = JSON.parse(JSON.stringify(res.data))
      // res.data.map(item=>{
      //   newItems.push({
      //     title:"",
      //     items:()...item.items
      //   })
      // })
      this.listData.unshift({
        title: '保证金总表',
        items: newItems
      })
      console.log(this.listData, newItems, '0000');
    })
    getExchangeInfo({ name: 'all' }).then(res => {
      this.msData1 = res.data.remark1
    })
    this.dataList()
  },
  methods: {
    msData(val) {
      let newAc=''
      if (this.activeName == '保证金总表') {
        newAc = 'all'
      }else{
        newAc = this.activeName
      }
      getExchangeInfo({ name: newAc }).then(res => {
        this.msData1 = res.data.remark1
      })
      this.dataList()
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
      if (this.activeName == '保证金总表') {
        getTransactionData({
        title: '',
        productName: '',
        remark:  this.isMain? '主力合约': '',
      }).then(res => {
        this.tableData = res.data
      })
      }else{
        getTransactionData({
        title: this.activeName,
        productName: this.productName1,
        remark: val != undefined ? val : '',
      }).then(res => {
        this.tableData = res.data[0].items
      })
      }

    },
    showZhuli() {
      this.isMain = !this.isMain
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

<style scoped lang="scss">
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
.tit_sty_div {
  font-weight: 500;
  font-size: 20px;
  color: #242629;
  div {
    span {
      font-weight: 500;
      font-size: 20px;
      color: #023665;
      line-height: 36px;
      margin-bottom: 17px;
      display: inline-block;
    }
  }
  .second_tit {
    border-bottom: 1px dashed #E0E0E0;
  }
}
::v-deep .el-table__header {
  th {
    text-align: center;
  }
}
.table_title_sty {
  height: 50px;
  background: #F7F9FA;
  margin: 0;
  border: .5px solid #999999;
  font-family: PingFang SC, PingFang SC;
  line-height: 50px;
  font-weight: bold;
  font-size: 18px;
  color: #023665;
  margin-top: 24px;

}
::v-deep .down_btn {
  width: 190px;
  height: 32px;
  background: #F0F0F0;
  border-radius: 4px 4px 4px 4px;
  border: 1px solid #8a8a8a;
  font-size: 14px;
  color: #8a8a8a;
  transform: translateY(3px);
  margin-right: 20px;
}
</style>
