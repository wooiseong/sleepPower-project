import { defineStore } from 'pinia'
import { ref } from 'vue'

export const usePersonalStore = defineStore('personal', () => {
  const personalList = ref({
    email:'',
    name: '',
    address: '',
    phone: '',
    payment: '',
    message: ''
  })
  return {
    personalList
  }
}, {
  persist: true
})
