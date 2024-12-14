import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('@/views/home/homePage.vue')},
    { path: '/about', component: () => import('@/views/about/aboutPage.vue')},
    { path: '/productList', component: () => import('@/views/product/productList.vue')},
    { path: '/detail', component: () => import('@/views/detail/detailPage.vue')},
    { path: '/payment', component: () => import('@/views/payment/paymentContainer.vue'),
      children: [
        {path: '/payment/total', component: () => import('@/views/payment/totalPage.vue')},
        {path: '/payment/information', component: () => import('@/views/payment/informationPage.vue')},
        {path: '/payment/confirm', component: () => import('@/views/payment/confirmPage.vue')},
        {path: '/payment/success', component: () => import('@/views/payment/successPage.vue')}
      ]
    },
    {path: '/:pathMatch(.*)*' , component: () => import('@/views/404error/404errorPage.vue')}
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  },
})
export default router
