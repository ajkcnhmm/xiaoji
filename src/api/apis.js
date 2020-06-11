import axios from 'axios'
//设置ip地址
axios.defaults.baseURL='http://localhost:5000'
//登录
export const Login=(account,password )=>axios.post('/users/checkLogin',{account,password});
//新增账户
export const AccuntAdd=(account,password,userGroup )=>axios.post('/users/add',{account,password,userGroup});

//账号列表
export const API_ACCOUNT_LIST=(currentPage,pageSize )=>axios.get('/users/list',{params:{currentPage,pageSize}});

//检查旧密码
export const checkoldpwd=(oldpwd)=>axios.post('/users/checkoldpwd',{oldpwd});
//修改密码
export const editpwd=(editpwd)=>axios.post('/users/editpwd',{editpwd});



