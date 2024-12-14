<script setup>
import { useCartStore } from '@/stores/modules/cart'
import { ref } from 'vue'

const cartListMount = ref([])
const useCartList = useCartStore()
cartListMount.value = useCartList.cartList

// 刪單一商品
const deleteCartItem = (deleteItemId) => {
  useCartList.deleteCartItem(deleteItemId)
}
const reCountTotal = () => {
  useCartList.totalPrice(cartListMount)
}
</script>

<template>
  <div>
    <ul v-for="(item, index) in useCartList.cartList" :key="index" class="total_goods px-0">
       <li class="position-relative py-2 mb-2" style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; background-color: #F0F8FF;">
          <button @click="deleteCartItem(item.itemId)" type="button" class="btn-close text-reset position-absolute top-0 end-0"  aria-label="Close"></button>
          <div class="row cart_body align-items-center">
            <div class="cart_img col-6">
              <img :src=item.image class="ps-1" alt="" style="max-width: 70%;">
            </div>
            <div class="cart_info col-6 text-start">
              <p @click="cartItemProductDetail(item.itemId)" class="fw-bold fs-5">{{ item.name }}</p>
              <p class="fs-6">單價： ${{ item.price }}</p>
              <div class="input-group" style="width: 100%;">
                <button @click="item.quantityChange--, reCountTotal() "  :disabled="item.quantityChange <= 1" class="btn btn-info btn-sm">
                  <font-awesome-icon  icon="fa-solid fa-minus" />
                </button>
                <input type="text" v-model.number="item.quantityChange" @input="reCountTotal()" class="form-control text-center " style="max-width: 30%;" placeholder="1" aria-label="Username" aria-describedby="basic-addon1">
                <button  @click="item.quantityChange++, reCountTotal()"  class="btn btn-info btn-sm">
                  <font-awesome-icon icon="fa-solid fa-plus" />
                </button>
              </div>
              <p class="mb-0 mt-2">小計：
                <span class="fw-bold"> ${{ item.price * item.quantityChange }}</span>
               </p>
            </div>
          </div>
        </li>
    </ul>
  </div>
</template>