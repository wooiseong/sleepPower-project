<script setup>
import { useCartStore } from '@/stores/modules/cart'
import { ref } from 'vue'
import { storeToRefs} from 'pinia'
import {useLoading} from 'vue-loading-overlay'

const useCartList = useCartStore()
const { calculationList } = storeToRefs(useCartList)

const currentCart = ref([])
currentCart.value = useCartList.cartList

// 等待loading
const formContainer = ref(null)
const $loading = useLoading({
  color: '#0072E3',  
  width: 70,
  height: 70,
  isFullPage: false,
  opacity: 1,
});

// 清除購物車
const clearCartAction = () => {
  const loader = $loading.show({
    container: formContainer.value
        });
        setTimeout(() => {
            loader.hide()
        }, 500)
  useCartList.clearCart()
}
</script>

<template>
  <section>
    <div>
    <div class="offcanvas offcanvas-end" ref="formContainer"  tabindex="-1" id="offcanvas_cart" aria-labelledby="offcanvas_cart">
      <div class="offcanvas-header" >
        <h5 class="offcanvas-title" id="offcanvasExampleLabel">購物車清單</h5>
        <button type="button" class="btn-close text-reset" style="opacity: 1;" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div v-if="useCartList.cartList.length < 1 " class="offcanvas-body mt-5">
        <emptyCart></emptyCart>
      </div>
      <div v-else class="offcanvas-body">
        <cartItem></cartItem> 
      <div class="text-end fw-bold fs-5 text-primary">總金額： 
          <span class="cart_total">$ {{ calculationList.cartTotalPrice  }}</span>
        </div>
        <div class="cart_action d-flex justify-content-center mt-3">
          <div @click="clearCartAction" class="btn btn-outline-danger me-3">清空列表</div>
          <div class="btn btn-primary btn_hover">
            <a href="/payment/total" class="text-white">前往結賬</a>
            </div>
        </div>
      </div>    
    </div>
  </div>
  </section>
</template>