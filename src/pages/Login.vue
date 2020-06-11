<template>
<body>
  <div class="log">
    <p>后台管理系统</p>
    <el-input placeholder="请输入账号" v-model="acc"></el-input>
    <br />
    <el-input placeholder="请输入密码" v-model="pwd" show-password></el-input>
    <br />
    <el-button @click="clickLogin" type="primary" round>登录</el-button>
  </div>
</body>
</template>

<script>
import { Login } from "../api/apis.js";

export default {
  data() {
    return {
      acc: "",
      pwd: "",
      flag: "true"
    };
  },
  methods: {
    
    clickLogin() {
//先让他是false
    if(this.flag==false)return;
    this.flag=false;
//执行代码
        Login(this.acc, this.pwd).then(res => {
          if (res.data.code == 0) {
            this.$message({
              message: "登录成功",
              type: "success"
            });

            setTimeout(() => {
              this.$router.push("/index/home");
            }, 2000);
          } else {
            this.$message.error("请输入正确的用户密码");
            setTimeout(() => {
            }, 3000);
          }
        });
//让他等三秒后变为true，因为这个时候是false直接就返回了
      setTimeout(() => {
        this.flag=true
      }, 3000); 
    }
//三秒后代码正常运行
  }
};
</script>

<style lang="less" scoped>
body {
  margin: 0;
  padding: 0;
  background: url("../assets/images/bkg1.jpg") center center no-repeat;
  background-size: 100% 100%;
  height: 100%;
  width: 100%;
  position: fixed;

  .log {
    width: 300px;
    height: 300px;
    margin: 200px auto;
    text-align: center;
    p {
      color: pink;
      margin-bottom: 20px;
    }
    .el-input {
      width: 300px;
      margin-bottom: 15px;
    }
    .el-button {
      width: 300px;
    }
  }
}
</style>