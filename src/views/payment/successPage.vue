<script setup>
import useClipboard from 'vue-clipboard3'
import { useToast } from "vue-toastification"
import { usePaymentStore } from '@/stores/modules/payment'
import { fire } from '@/utils/confetti'
import { vueMetaInput } from '@/utils/vueMetaSetting'

vueMetaInput('完成訂單，歡迎再購 | 購物車 -【寐 . 力】Sleep Power')

fire()

const usePaymentList = usePaymentStore()
usePaymentList.paymentStep.progress = 100

const { toClipboard } = useClipboard()
const toast = useToast()

// 複製訂單編號
const copyAction = async () => {
  try {
    await toClipboard('455rf')
    toast.warning('已複製訂單編號')
  } catch (e) {
    console.log(e)
    toast.error('訂單編號複製失敗，請稍後重試')
  }
} 
</script>

<template>
      <section class="mt-4">
    <div class="total_list">
      <div class="container px-2 px-lg-4">
        <h3 class="">完成訂單</h3>
        <div class="row mt-4 g-3">
          <div class="col-lg-6 m-auto">
            <h4>
              <font-awesome-icon class=" text-success" icon="fa-solid fa-circle-check"  />
              感謝您的訂購！</h4>
            <p>您的訂單編號為：
              <span><ins> 455rf</ins></span>
              <button @click="copyAction" class="btn btn-outline-dark btn-sm mb-1 ms-2">複製</button>
            </p>
            <p>您的商品會儘快出貨， 敬請留意電郵。期待您的下次訂購!</p>
            <div class="d-flex justify-content-evenly mt-4">
              <router-link to="/" class="btn btn-outline-primary">回到首頁</router-link>
              <router-link to="/productList" class="btn btn-primary">繼續購物</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>