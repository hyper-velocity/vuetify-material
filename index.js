import Vue from 'vue'
import Vuetify from 'vuetify'

import './styles/index.scss'
import './components'

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'chartist/dist/chartist.min.css'

export const theme = {
  light: {
    primary: '#1976d2',
    secondary: '#4caf50',
    tertiary: '#495057',
    accent: '#82B1FF',
    error: '#f55a4e',
    info: '#00d3ee',
    success: '#5cb860',
    warning: '#ffa21a'
  }
}

Vue.use(Vuetify)
Vue.use(require('vue-chartist'))

const config = () => {
  return new Vuetify({
    icons: {
      iconfont: 'mdi'
    },
    theme
  })
}

export default {
  theme,
  config
}
