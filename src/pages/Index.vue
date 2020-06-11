<template>
  <div id="Order">
    <el-container>
      <el-aside>
        <el-col :span="12">
          <el-menu
            :default-active="this.$route.path"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            router
            unique-opened
          >
            <h1>外 卖 商 家 中 心</h1>
            <div v-for="item in treelist " :key="item.index">
              <!-- 二级菜单 -->
              <el-submenu v-if="item.children" :index="item.index">
                <!-- 二级菜单标题 -->
                <template slot="title">
                  <i :class="item.iclass"></i>
                  <span>{{item.title}}</span>
                </template>
                <!-- 二级菜单子菜单 -->

                <el-menu-item
                  v-for=" child in item.children "
                  :key="child.index"
                  :index="child.index"
                >
                  <i :class="child.iclass"></i>
                  <span slot="title">{{child.title}}</span>
                </el-menu-item>
              </el-submenu>

              <!-- 一级菜单 -->
              <el-menu-item v-else :index="item.index">
                <i :class="item.iclass"></i>
                <span slot="title">{{item.title}}</span>
              </el-menu-item>
            </div>
          </el-menu>
        </el-col>
      </el-aside>
      <el-container>
        <el-header>
          <el-breadcrumb separator="/">
          <!-- in this.$route.meta   循环这个里面的 -->
            <el-breadcrumb-item v-for="(item,index) in this.$route.meta" :key="index">{{item}}</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newtreelist:[],
      treelist: [
        { index: "/index/home", iclass: "el-icon-menu", title: "后台首页",role:['super','normal'] },
        {
          index: "/index/order",
          iclass: "el-icon-document",
          title: "订单管理",
          role:['super','normal']
        },
             {
          index: "shop",
          iclass: "el-icon-setting",
          title: "商品管理",
           role:['super','normal'],
          children: [
            {
              index: "/index/productList",
              iclass: "el-icon-setting",
              title: "商品列表"
            },
            {
              index: "/index/productAdd",
              iclass: "el-icon-setting",
              title: "商品添加"
            },
            {
              index: "/index/productSort",
              iclass: "el-icon-setting",
              title: "商品列表"
            }
          ]
        },
        { index: "/index/shop", iclass: "el-icon-setting", title: "店铺管理" ,role:['super']},
   
        // <!--
        //       <el-submenu index="5">
        //         <template slot="title">
        //           <i class="el-icon-location"></i>
        //           <span>账号管理</span>
        //         </template>
        //         <el-menu-item index="/index/accuntList">账号列表</el-menu-item>
        //         <el-menu-item index="/index/accuntAdd">添加账号</el-menu-item>
        //         <el-menu-item index="/index/changePwd">修改密码</el-menu-item>
        //       </el-submenu>
        //       <el-submenu index="6">
        //         <template slot="title">
        //           <i class="el-icon-location"></i>
        //           <span>销售统计</span>
        //         </template>
        //         <el-menu-item index="/index/productStat">商品统计</el-menu-item>
        //         <el-menu-item index="/index/formStat">订单统计</el-menu-item>
        //       </el-submenu>-->
        {
          index: "acc",
          iclass: "el-icon-setting",
          title: "账号管理",
          role:['super'],
          children: [
            {
              index: "/index/accuntList",
              iclass: "el-icon-setting",
              title: "账号列表"
            },
            {
              index: "/index/accuntAdd",
              iclass: "el-icon-setting",
              title: "添加账号"
            },
            {
              index: "/index/changePwd",
              iclass: "el-icon-setting",
              title: "修改密码"
            }
          ]
        },
        {
          index: "sale",
          iclass: "el-icon-setting",
          title: "销售统计",
          role:['super'],

          children: [
            {
              index: "/index/productStat",
              iclass: "el-icon-setting",
              title: "商品统计"
            },
            {
              index: "/index/formStat",
              iclass: "el-icon-setting",
              title: "订单统计"
            }
          ]
        }
      ]
    };
  },
  computed:{
    // ntlist(){
    //   this.newtreelist.
    // }
  }
};
</script>

<style lang="less" scoped>
#Order {
  display: flex;
  height: 100%;
  .el-container {
    height: 100%;
    .el-aside {
      width: 200px !important;
      background-color: #545c64 !important;
      .el-menu {
        border: 0;
        h1 {
          font-size: 20px;
          margin-top: 10px;
          text-align: center;
          color: #ffffff;
        }
      }
      .el-col {
        width: 200px;

        .el-menu-item {
          margin-bottom: 10px;
        }
        .el-submenu {
          margin-bottom: 10px;
        }
      }
    }
    .el-header {
      background: #f0f2f5;
      padding-top: 20px;
    }
  }
}
</style>
     