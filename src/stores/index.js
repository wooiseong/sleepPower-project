import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(persist)

export default pinia
export * from '@/stores/modules/cart'
export * from '@/stores/modules/personal'
export * from '@/stores/modules/payment'