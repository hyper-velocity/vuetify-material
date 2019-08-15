import Vue from 'vue'
import Vuetify from 'vuetify'

import './styles/index.scss'
import './components'

import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'chartist/dist/chartist.min.css'

Vue.use(Vuetify)
Vue.use(require('vue-chartist'))

export const config = () => {
  return new Vuetify({
    icons: {
      iconfont: 'mdi'
    }
  })
}

export default {
  config
}
