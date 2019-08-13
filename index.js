import Vue from 'vue'
import Vuetify from 'vuetify'
import 'styles/index.scss'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'chartist/dist/chartist.min.css'
import './components'

export let defaultTheme = {
  primary: '#4caf50',
  secondary: '#4caf50',
  tertiary: '#495057',
  accent: '#82B1FF',
  error: '#f55a4e',
  info: '#00d3ee',
  success: '#5cb860',
  warning: '#ffa21a'
}

export const config = (theme = defaultTheme) => {
  Vue.use(Vuetify, {
    iconfont: 'mdi',
    theme
  })

  Vue.use(require('vue-chartist'))
}

export default {
  config,
  defaultTheme
}
