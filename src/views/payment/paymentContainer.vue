<script setup>
import { ref, onMounted, onUpdated } from 'vue'
import { usePaymentStore } from '@/stores/modules/payment'

const usePaymentList = usePaymentStore()

const progressBar = ref()
const progressBarMove = () => {
     progressBar.value.style.width = `${usePaymentList.paymentStep.progress}%`
  }
   onMounted( () => {
    progressBarMove()
   })
   onUpdated( () => {
    progressBarMove()
   })
</script>

<template>
  <div>
    <cursorEffect></cursorEffect>
    <navbarView></navbarView>
    <cartCanvas></cartCanvas>
    <navtoTop></navtoTop>
    <section class="mt-5 pt-3 pb-2">
      <div class="total_detail">
        <div class="container px-2 px-lg-4">
          <div class="row">
            <div class="col-12 position-relative m-auto">
              <div class="total_steps d-flex justify-content-between">
                <div class="each_step step1" :class="{ step_active : usePaymentList.paymentStep.progress >= 2 }">
                  <font-awesome-icon class="fs-3 pt-1  pb-2" icon="fa-solid fa-clipboard-list" />  
                  <p>確認清单</p>
                </div>
                <div class="each_step step2"  :class="{ step_active : usePaymentList.paymentStep.progress >= 30 }" >
                  <font-awesome-icon class="fs-3 pt-1  pb-2" icon="fa-solid fa-rectangle-list" />
                  <p>填寫資料</p>
                </div>
                <div class="each_step step3" :class="{ step_active : usePaymentList.paymentStep.progress >= 65 }" >
                  <font-awesome-icon class="fs-3 pt-1  pb-2" icon="fa-solid fa-credit-card" />
                  <p>确认付款</p>
                </div>
                <div class="each_step step4"  :class="{ step_active : usePaymentList.paymentStep.progress >= 100 }">
                  <font-awesome-icon class="fs-3 pt-1 pb-2" icon="fa-solid fa-envelope-open-text" />
                  <p>完成訂單</p>
                </div>            
              </div>
              <div class="progress position-absolute top-50 start-50 translate-middle" style="width: 90%; height: 10px;">
                <div ref="progressBar" class="progress-bar" role="progressbar" style="width: 5%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
              </div> 
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <router-view></router-view>
    <footerView></footerView>
  </div>
</template>
