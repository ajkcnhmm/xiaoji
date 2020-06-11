import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../pages/Login'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: '/',
            name: 'login',
            component: Login
        },
        {
            path: '/index',
            name: 'index',
            component: () => import('../pages/Index'),
            children: [{
                    path: '/index/home',
                    name: 'home',
                    component: () => import('../pages/index/Home'),
                    meta:["后台首页"]
                },
                {
                    path: '/index/order',
                    name: 'order',
                    component: () => import('../pages/index/Order'),
                    meta:["订单管理"]
                },
                {
                    path: '/index/AccuntAdd',
                    name: 'AccuntAdd',
                    component: () => import('../pages/index/AccuntAdd'),
                    meta:["账号管理","添加账号"]
                },
                {
                    path: '/index/AccuntList',
                    name: 'AccuntList',
                    component: () => import('../pages/index/AccuntList'),
                    meta:["账号管理","账号列表"]
                },
                {
                    path: '/index/ChangePwd',
                    name: 'ChangePwd',
                    component: () => import('../pages/index/ChangePwd'),
                    meta:["账号管理","修改密码"]
                },
                {
                    path: '/index/FormStat',
                    name: 'FormStat',
                    component: () => import('../pages/index/FormStat'),
                    meta:["销售统计","订单统计"]
                },
                {
                    path: '/index/ProductAdd',
                    name: 'ProductAdd',
                    component: () => import('../pages/index/ProductAdd'),
                    meta:["商品管理","添加商品"]
                    
                },
                {
                    path: '/index/ProductList',
                    name: 'ProductList',
                    component: () => import('../pages/index/ProductList'),
                    meta:["商品管理","商品列表"]

                },
                {
                    path: '/index/ProductSort',
                    name: 'ProductSort',
                    component: () => import('../pages/index/ProductSort'),
                    meta:["商品管理","商品分类"]

                },
                {
                    path: '/index/ProductStat',
                    name: 'ProductStat',
                    component: () => import('../pages/index/ProductStat'),
                    meta:["销售统计","商品统计"]
                },
                {
                    path: '/index/shop',
                    name: 'Shop',
                    component: () => import('../pages/index/Shop'),
                    meta:["店铺管理"]

                }
            ]
        }

    ]
})