<template>
  <div style="position: relative;top: -230px;float: left;width: 100%;margin-top: 40px;">
  <div class="f-footer" style="">
    <el-main class="main">
      <el-row>
        <el-col :span="24" class="item-col weside">
          <div class="item" style="text-align: center;">
            <img src="../assets/Frame.png" style="padding-right: 50px;"/>
            &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp
            <img src="../assets/Frame1.png"/>
            <div >
              <span style="padding-right: 100px;">咨询</span>
              
              <span style="margin-left: 20px;">关注</span>
            </div>
            <div style="width: 100%;border: 0.1px solid rgb(132, 132, 132,0.5);"></div>
            <p>京ICP备19048506号-2 Copyright</p>
            <p> @ 2024 中国海洋财经有限公司 All Rights Reserved.<span @click="dialogTableVisible=true">免责声明</span></p>
           
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-dialog :visible.sync="dialogTableVisible" width="40%" append-to-body>
<img src="../assets/mz.png" style="width: 100%;"/>


    </el-dialog>
  </div>
</div>
</template>

<script>
export default {
  name: 'Vfooter',
  data(){
    return{
      dialogTableVisible:false
    }
   
  },
  methods:{
    
  }
}
</script>

<style scoped>
.f-footer {
  width: 100%;
  padding: 20px;
  text-align: center;
  color: #fff;
  background-color: #555;
}

.main {
  width: 70%;
  margin: 0 auto;
  color: #ccc;
}

.out-link {
  text-decoration: none;
  color: #ccc;
}

.out-link:hover {
  color: #5e5252;
}

.item-col {
  text-align: left;
}

.item-col.weside {
  font-size: 14px;
}

.item-col .title {
  color: #ddd;
  margin-bottom: 10px;
}

.item span {
  margin-right: 5px;
}
</style>
