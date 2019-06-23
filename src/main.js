import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import {store} from './store'
import CreateMeetup from './components/Meeetup/CreateMeetup'
import Profile from './components/Users/Profile'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
