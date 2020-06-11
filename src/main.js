import Vue from 'vue'
import App from './App.vue'
import less from 'less'
import router from './router'
//elementUI组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//less组件
Vue.use(less)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
