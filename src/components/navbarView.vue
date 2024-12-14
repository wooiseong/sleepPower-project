<script setup>
import { useCartStore } from '@/stores/modules/cart'
import { storeToRefs } from 'pinia'

const useCartList = useCartStore()
const { calculationList } = storeToRefs(useCartList)
</script>

<template>
  <!-- 導航區域 -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top px-4" style="box-shadow: 0 4px 8px 0 rgba(36,36,36,.2);">
   <div class="container-fluid">
    <button class="navbar-toggler fs-6" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <router-link to="/">
      <p class="logo_style mt-1">寐 . 力</p>
    </router-link>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav align-items-center text-nowrap fs-5">
          <li class="nav_button">
            <router-link to="/" class="nav-link nav_bold" aria-current="page">寐_首頁</router-link>
          </li>
          <li class="nav-button">
            <router-link to="/about" class="nav-link nav_bold">寐_理念</router-link>
          </li>
          <li class="nav-button">
            <router-link to="/productList" class="nav-link nav_bold">寐_產品</router-link>
          </li>
          <li class="nav-button">
            <a class="nav-link nav_bold text-dark fs-4 position-relative" data-bs-toggle="offcanvas" href="#offcanvas_cart" aria-controls="offcanvas_cart">
              <span v-if="calculationList.cartTotalPrice > 0" class="position-absolute top-0 start-50 ms-1 px-1 rounded-4 fs-6 bg-primary text-secondary">{{ calculationList.cartTotalItem }}</span>
              <font-awesome-icon icon="fa-solid fa-cart-shopping" />
            </a>
          </li>
        </ul>
      </div>
  </div>
</nav> 
  
</template>