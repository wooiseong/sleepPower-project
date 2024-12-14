import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePaymentStore = defineStore('payment', () => {
  const paymentStep = ref({ progress: 2 })
  return {
    paymentStep
  }
}, {
  persist: true
})
