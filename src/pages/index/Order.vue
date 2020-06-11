<template>
  <div id="top">
    <span>
      订单号
      <el-input placeholder="订单号" v-model="input" clearable></el-input>
    </span>
    <span>
      收货人
      <el-input placeholder="收货人" v-model="input" clearable></el-input>
    </span>
    <span>
      手机号
      <el-input placeholder="手机号" v-model="input" clearable></el-input>
    </span>
    <span>
      订单状态
      <el-select v-model="value" placeholder="订单状态">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        ></el-option>
      </el-select>
    </span>

    <div class="block time">
      <span class="demonstration">选择时间</span>
      <el-date-picker
        v-model="value1"
        type="datetimerange"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :default-time="['12:00:00']"
      ></el-date-picker>
    </div>
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column fixed prop="date" label="订单号" width="150"></el-table-column>
      <el-table-column prop="name" label="下单时间" width="120"></el-table-column>
      <el-table-column prop="province" label="手机号" width="120"></el-table-column>
      <el-table-column prop="city" label="收货人" width="120"></el-table-column>
      <el-table-column prop="address" label="配送地址" width="300"></el-table-column>
      <el-table-column prop="zip" label="送达时间" width="120"></el-table-column>
      <el-table-column prop="zip" label="用户备注" width="120"></el-table-column>
      <el-table-column prop="zip" label="订单金额" width="120"></el-table-column>
      <el-table-column prop="zip" label="订单状态" width="120"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block pages">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
        //分页

 currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
      //表格

      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1517 弄",
          zip: 200333
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1519 弄",
          zip: 200333
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1516 弄",
          zip: 200333
        }
      ],

      //订单状态

      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: "",
      //输入框
      input: "",
      //时间
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            }
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            }
          }
        ]
      },
      value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
      value2: ""
    };
  },
  //分页的方法
   methods: {
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      }
    },
};
</script>

<style lang="less" scoped>
#top {
  span {
    display: inline-block;
    .el-input {
      width: 200px !important;
      margin: 0 10px;
    }
    .el-select {
      margin-left: 10px;
    }
  }
  .time {
    margin: 15px 0;
    span {
      margin-right: 10px;
    }
  }
  .el-table {
    margin-top: 40px;
    margin-bottom: 20px;

  }

}
</style>