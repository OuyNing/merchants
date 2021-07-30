import Vue from 'vue'
import App from './App.vue'
import router from './router/index'


//时间格式
Vue.prototype.$renderTime = function (datetime, callback) {
  let thisDatetime = new Date();
  if (datetime) {
    thisDatetime = datetime
  }
  let date = new Date(thisDatetime).toJSON();
  if (callback) {
    callback(new Date(+new Date(date) + 8 * 3600 * 1000).toISOString().replace(/T/g, ' ')
        .replace(/\.[\d]{3}Z/, ''));
  } else {
    return new Date(+new Date(date) + 8 * 3600 * 1000).toISOString()
        .replace(/T/g, ' ')
        .replace(/\.[\d]{3}Z/, '')
  }
}

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
