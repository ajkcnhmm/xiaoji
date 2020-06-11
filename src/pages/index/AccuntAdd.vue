<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>卡片名称</span>
    </div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="form.acc"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.pwd"></el-input>
      </el-form-item>
      <el-form-item label="用户组">
        <el-select v-model="form.group" placeholder="请选择活动区域">
          <el-option label="超级管理员" value="超级管理员"></el-option>
          <el-option label="普通管理员" value="普通管理员"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>
<script>
import { AccuntAdd } from "../../api/apis.js";

export default {
  data() {
    return {
      form: {
        acc: "",
        pwd: "",
        group: ""
      },
      flag: "true"
    };  
  },
  methods: {
    onSubmit() {
      //先让他是false
      if (this.flag == false) return;
      this.flag = false;
      //执行代码
      AccuntAdd(this.form.acc, this.form.pwd, this.form.group).then(res => {
        if (res.data.code == 0) {
          this.$message({
            message: "创建成功",
            type: "success"
          });
        } else {
          this.$message.error("请输入正确的用户密码");
          setTimeout(() => {}, 3000);
        }
      });
      //让他等三秒后变为true，因为这个时候是false直接就返回了
      setTimeout(() => {
        this.flag = true;
      }, 3000);
    }
  }
};
</script>
<style lang="css" scoped>
.el-input {
  width: 250px;
}
</style>