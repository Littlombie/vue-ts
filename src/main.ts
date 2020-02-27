import Vue from 'vue'
// import VueI18n from 'vue-i18n'
// import enLocale from 'element-ui/lib/locale/lang/en'
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import commonConponents from './components/index'
import i18n from './i18n/i18n.js'


// Vue.use(VueI18n)
Vue.use(ElementUI)
Vue.use(commonConponents)

Vue.config.productionTip = false


// Vue.config.lang = 'zh-cn'
// Vue.locale('zh-cn', zhLocale)
// Vue.locale('en', enLocale)

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
}).$mount('#app')

