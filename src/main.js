// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI from 'element-ui'

import components from './components'

// import css
import 'element-ui/lib/theme-default/index.css'
import 'assets/css/sb-admin-2.css'
import 'assets/css/bootstrap.min.css'
import 'assets/css/font-awesome.min.css'
import 'assets/css/global.css'

Vue.use(ElementUI)

Object.keys(components).forEach(key => {
  Vue.component(`ci-${key}`, components[key])
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
