<script setup>
import { useCartStore } from '@/stores/modules/cart'
import { storeToRefs } from 'pinia'

const useCartList = useCartStore()
const { calculationList } = storeToRefs(useCartList)
</script>

<template>
  <div class="position-fixed me-2 mb-2" style="bottom: 0;right: 0; z-index:5;">
    <a href="#" class="btn btn-primary rounded-circle">
      <font-awesome-icon icon="arrow-up" />
    </a>
    <div class="bg-secondary rounded-3 me-1 mt-1 p-1">
      <a class="nav-link nav_bold text-dark fs-4 position-relative" data-bs-toggle="offcanvas" href="#offcanvas_cart" aria-controls="offcanvas_cart">
      <span v-if="calculationList.cartTotalPrice > 0" class="position-absolute top-0 start-50 ms-1 px-1 rounded-4 fs-6 bg-primary text-secondary">{{ calculationList.cartTotalItem }}</span>
      <font-awesome-icon icon="fa-solid fa-cart-shopping" />
      </a>
      </div>
  </div>
</template>