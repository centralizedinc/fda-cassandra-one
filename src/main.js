import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import mixins from "@/plugins/mixins"
import notify from "@/plugins/notify";
import navbar from "@/plugins/navbar";

import * as VueGoogleMaps from 'vue2-google-maps'

Vue.config.productionTip = false

Vue.use(mixins)
Vue.use(notify, store)
Vue.use(navbar, store)
Vue.use(VueGoogleMaps, {
  load:{
    key:'AIzaSyB-cPzUnnkk0E_4pYYYiPk0zo9q4tvqqrs',
    libraries: 'places'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
