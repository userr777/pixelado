import Vue from 'vue'
import App from './App.vue'
import VueRulerTool from 'vue-ruler-tool'

Vue.config.productionTip = false
Vue.component('vue-ruler-tool', VueRulerTool)

new Vue({
  render: h => h(App),
}).$mount('#app')
