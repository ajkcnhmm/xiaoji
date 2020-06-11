<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>卡片名称</span>
      </div>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="原密码">
          <el-input v-model="form.oldpwd"></el-input>
        </el-form-item>
        <el-form-item label="新密码">
          <el-input v-model="form.newpwd"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input v-model="form.checkpwd"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">确认修改</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { checkoldpwd } from "../../api/apis.js";
import { editpwd } from "../../api/apis.js";

export default {
  data() {
    return {
      form: {
        oldpwd: "",
        newpwd: "",
        checkpwd: ""
      }
    };
  },
  methods: {
    onSubmit() {
      checkoldpwd(this.form.oldpwd).then(res => {
        console.log(res);
      });
      editpwd(this.form.checkpwd).then(res => {
        console.log(res);
      });
    }
  }
};
</script>

<style lang="css" scoped>
.el-input {
  width: 250px !important;
}

.buttonBox {
  margin-top: 20px;
}
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}
</style>