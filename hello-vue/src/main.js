import Vue from 'vue'
import App from './App.vue'

Vue.config.ignoredElements = [
  'vaadin-button',
  'vaadin-text-field'
]

new Vue({
  el: '#app',
  render: h => h(App)
})
