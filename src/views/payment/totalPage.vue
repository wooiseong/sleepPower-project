<script setup>
import { useCartStore } from '@/stores/modules/cart'
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import { useLoading } from 'vue-loading-overlay'
import { usePaymentStore } from '@/stores/modules/payment'
import { vueMetaInput } from '@/utils/vueMetaSetting'

vueMetaInput('確認清單 | 購物車 -【寐 . 力】Sleep Power')

const usePaymentList = usePaymentStore()
usePaymentList.paymentStep.progress = 2

const $loading = useLoading({
  color: '#0072E3',  
  width: 80,
  height: 80,         
  opacity: 0.5,                   
});

const useCartList = useCartStore()
const { calculationList } = storeToRefs(useCartList)

// 清除購物車
const clearCartAction = () => {
  const loader = $loading.show({
  })
  setTimeout(() => {
      loader.hide()
  }, 500)
  useCartList.clearCart()
}

onMounted(() => {
const loader = $loading.show({
  })
  setTimeout(() => {
      loader.hide()
  }, 500)
})
</script>

<template>
  <cursorEffect></cursorEffect>
   <section class="mt-4">
    <div class="total_list">
      <div class="container px-2 px-lg-4">
        <h3 class="">確認清單</h3>
        <div class="row mt-1 row-cols-1 row-cols-lg-2  row-cols-xl-2 g-3">
          <div v-if="useCartList.cartList.length < 1" class="col col-md-6 pb-3 pb-md-0 pt-0 pt-md-4">
            <emptyCart></emptyCart>
        </div>
          <div v-else class="col col-md-6">
            <div>
              <cartItem></cartItem>
            </div>
            <div class="d-flex justify-content-between pb-2">
              <router-link to="/productList" class="btn btn-outline-primary btn_hover">繼續購物</router-link>
              <div @click="clearCartAction" class="btn btn-outline-danger">清空列表</div>    
            </div>       
          </div>
          <div class=" col col-md-6">
            <div class="card w-75 m-auto">
              <h5 class="card-header bg-dark text-white py-1">訂單價格</h5>
              <div class="card-body  d-flex justify-content-evenly py-2">
                <div class="card-text" style="width: 90%;">
                  <p class="card-text d-flex justify-content-between ">
                    <span>商品總額</span>
                    <span>${{ calculationList.cartTotalPrice }}</span>
                  </p>
                  <p class="card-text d-flex justify-content-between">
                    <span class="">運費(總額5%)</span>
                    <span>${{ calculationList.transportFee }}</span>
                  </p>
                  <div class="">
                    <p class="fs-6 text-start border-bottom border-dark pb-2 text-danger">*消費滿$1000即可免去運費！</p>
                    <p class="card-text d-flex justify-content-between fw-bold fs-5">
                      <span class="">
                        應付金額</span>
                      <span class="" style="color: #0072E3; background-color:#FFE66F">
                       ${{ calculationList.priceAfterTransport }}  
                      </span>
                    </p>
                    <button :disabled="useCartList.cartList.length < 1" class="btn btn-primary mt-2">
                      <router-link to="/payment/information" class="text-white">前往結賬</router-link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>