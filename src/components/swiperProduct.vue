<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue' 
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useCartStore } from '@/stores/modules/cart'
import { useToast } from "vue-toastification"
import { getProductList } from '@/api/productURL'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const toast = useToast()
const modules = [Autoplay]

// 取得產品列表
const productList = ref([])
const promotionList = ref([])
const usePromotionList = async (type) => {
  const res = await getProductList(type)
  productList.value = res.data
  promotionList.value = productList.value.filter(item => item.promotion === 1)
}
usePromotionList()

// 點擊購物車icon
const useCartList = useCartStore()
const iconAddCart = (detailList) => {
  useCartList.addCart(detailList, 1)
  toast.info(`【${detailList.name}】    已經加入購物車~`)
}

//跳轉至商品詳情頁面
const router = useRouter()
const swiperProductDetail = (itemId) => {
  router.push({ path: '/detail' , query: {
    itemId
  } }) 
}
</script>

<template>
  <div class="swiperbox">
    <swiper
      :slidesPerView="1"
      :breakpoints="{
        768: {
          slidesPerView: '3',
          spaceBetween: 30,
        }
      }"
      :spaceBetween="20"
      :loop="true"
      :centeredSlides="true"
      :autoplay="{ delay: 2500, disableOnInteraction: false}"
      :modules="modules"
    >
    <swiper-slide v-for="(item) in promotionList" :key="item.itemId">
        <div class="card">
        <a href="#" @click="swiperProductDetail(item.itemId)" >
          <img loading="lazy" :src="item.image" class="card-img-top img-fluid" style="object-fit: cover;">
          <div class="img_tag text-white" :class="{  'bg-success': item.type === '床褥', 'bg-warning': item.type === '枕頭', 'bg-danger': item.type === '沙發'}">{{ item.type }}</div>
          <div class="card_tag">
            <div class="card_tag_text fs-4">商品資訊</div>
          </div>
        </a>
        <div class="card-body py-2 position-relative">
          <div class="card-text text-start ps-3">
              <span>{{ item.name }}</span>
              <p class="fs-6 m-auto">售價: NT {{ item.price }}</p>
          </div>
          <a @click="iconAddCart(item)" class="btn btn-outline-primary btn_effect position-absolute end-0 bottom-0 translate-middle me-2">
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
          </a>
        </div>
      </div>
    </swiper-slide>
    </swiper>
    
  </div>
</template>
