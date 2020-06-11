<template>
  <div>
    <el-table :data="userlist">
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="账号" width="120" prop="account"></el-table-column>
      <el-table-column label="用户组" width="120" prop="userGroup"></el-table-column>
      <el-table-column label="创建时间" prop="ctime"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="pagesizes"
        :page-size="nowpagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
    </div>
    <p style="margin-top: 20px">
      <el-button @click="toggleSelection()">批量删除</el-button>
      <el-button @click="toggleSelection()">取消选择</el-button>
    </p> 
  </div>
</template>

<script>
import { API_ACCOUNT_LIST } from "../../api/apis";
export default {
  data() {
    return {
      userlist: [],
      currentPage4: 1,
      pagesizes: [5, 10, 15, 20],
      nowpagesize:5,
      total:5,

    };
  },
  created() {
    API_ACCOUNT_LIST(3, 2).then(res => {
      this.userlist = res.data.data;
      console.log(res.data.data);
    });
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },

    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style lang="css" scoped>
</style>