import Vue from 'vue'
import VueElectron from 'vue-electron'
import sourceMapSupport from 'source-map-support'
import bootstrapRenderer from './bootstrap'
import VueRouter from 'vue-router'
// import lang from 'element-ui/lib/locale/lang/en'
// import locale from 'element-ui/lib/locale'
import axios from './axios'
import store from './store'
import './assets/symbolIcon'
import {
  Dialog,
  Form,
  FormItem,
  InputNumber,
  Button,
  Tooltip,
  Upload,
  Slider,
  Checkbox,
  ColorPicker,
  Col,
  Row,
  Tree,
  Autocomplete,
  Switch,
  Select,
  Option,
  Radio,
  RadioGroup,
  Table,
  TableColumn,
  Tabs,
  TabPane,
  Input
} from 'element-ui'
import services from './services'
import routes from './router'
import { addElementStyle } from '@/util/theme'

import './assets/styles/index.css'
import './assets/styles/printService.css'

// Add vue-i18n imports
import VueI18n from 'vue-i18n'
import enLocale from '../locales/en' // Your English translations
import zhLocale from '../locales/zh' // Your Chinese translations (example)

// -----------------------------------------------

// Decode source map in production - must be registered first
sourceMapSupport.install({
  environment: 'node',
  handleUncaughtExceptions: false,
  hookRequire: false
})

global.marktext = {}
bootstrapRenderer()

addElementStyle()

// -----------------------------------------------
// Be careful when changing code before this line!

// Configure Vue
// locale.use(lang)

// Initialize vue-i18n
Vue.use(VueI18n)

// Create i18n instance
if (!store.state.language) {
  store.state.language = 'en'
}
export const i18n = new VueI18n({
  locale: store.state.language, // default locale
  fallbackLocale: store.state.language, // fallback locale
  messages: {
    en: enLocale,
    zh: zhLocale
    // Add more languages as needed
  },
  silentTranslationWarn: process.env.NODE_ENV === 'production' // suppress warnings in production
})
// Make sure to use the i18n instance with Element UI
// locale.i18n((key, value) => i18n.t(key, value))
Vue.use(Dialog)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(InputNumber)
Vue.use(Button)
Vue.use(Tooltip)
Vue.use(Upload)
Vue.use(Slider)
Vue.use(Checkbox)
Vue.use(ColorPicker)
Vue.use(Col)
Vue.use(Row)
Vue.use(Tree)
Vue.use(Autocomplete)
Vue.use(Switch)
Vue.use(Select)
Vue.use(Option)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Input)

Vue.use(VueRouter)

Vue.use(VueElectron)
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

services.forEach(s => {
  Vue.prototype['$' + s.name] = s[s.name]
})

const router = new VueRouter({
  routes: routes(global.marktext.env.type)
})

/* eslint-disable no-new */
new Vue({
  store,
  router,
  i18n,
  template: '<router-view class="view"></router-view>'
}).$mount('#app')
