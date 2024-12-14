import { createApp } from 'vue'
import pinia from '@/stores/index'

//toast
import Toast from "vue-toastification";
import "@/assets/stylesheets/helpers/vueToast/scss/index.css"

//jquery for form-validation
import $ from 'jquery'

//fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(fas, far, fab)

//AOS
import AOS from 'aos'
import 'aos/dist/aos.css'

AOS.init({
  duration: 1200,
})

//loadingEffect
import { LoadingPlugin } from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

//meta head
import { createHead } from '@vueuse/head'
const head = createHead()

//components
import headerView from '@/components/headerView.vue'
import cartItem from '@/components/cartItem.vue'
import cartCanvas from '@/components/cartCanvas.vue'
import navbarView from '@/components/navbarView.vue'
import navtoTop from '@/components/navtoTop.vue'
import footerView from '@/components/footerView.vue'
import orderCartDetails from '@/components/orderCartDetails.vue'
import emptyCart from '@/components/emptyCart.vue'
import cursorEffect from '@/components/cursorEffect.vue'

//bootstrap
import 'bootstrap'
import '@/assets/stylesheets/all.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.use(pinia)
app.use($)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(Toast, { timeout: 2800 })
app.use(LoadingPlugin);
app.use(head)

app.component('headerView',headerView)
app.component('cartItem',cartItem)
app.component('cartCanvas',cartCanvas)
app.component('navbarView',navbarView)
app.component('navtoTop',navtoTop)
app.component('footerView',footerView)
app.component('orderCartDetails',orderCartDetails) 
app.component('emptyCart',emptyCart)
app.component('cursorEffect', cursorEffect)

app.mount('#app')
