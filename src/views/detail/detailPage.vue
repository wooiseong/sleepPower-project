<script setup>
import swiperProduct from '@/components/swiperProduct.vue'
import { getProductInfo } from '@/api/productURL'
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { useCartStore } from '@/stores/modules/cart'
import { useToast } from "vue-toastification"
import { vueMetaInput } from '@/utils/vueMetaSetting'

vueMetaInput('寐產品 | 寐力補充倉庫，包含床褥，枕頭和沙發，任君挑選 - 【寐 . 力】Sleep Power')

const toast = useToast()
const detailList = ref([])
const keyWords = ref('')
const route = useRoute()
keyWords.value = route.query.itemId

const useProductInfo = async () => {
  const res = await getProductInfo(keyWords.value)
  detailList.value = res.data[0]
}
useProductInfo()

let n = ref(1)
let quantityChange = ref(1)
quantityChange.value = n

const useCartList = useCartStore()
const storeCart = (detailList, quantityChange) => {
  useCartList.addCart(detailList, quantityChange)
  toast.info(`【${ detailList.name }】    已經加入購物車~`)
}

const newID = ref()
watch(() => route.query.itemId, (newVal) => {
  newID.value = newVal
  keyWords.value = newVal
  useProductInfo()
})
</script>

<template>
  <cursorEffect></cursorEffect>
  <navbarView></navbarView>
  <cartCanvas></cartCanvas>
  <navtoTop></navtoTop>
  
  <section>
    <div class="product_detail mt-5">
      <div class="container px-2 px-lg-4 py-3">
        <h2 data-aos="fade-up" ><mark>寐</mark>
          _產品</h2>
         <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="pt-3" data-aos="fade-right">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link to="/">寐_首頁</router-link></li>
              <li class="breadcrumb-item"><router-link  to="/productList">寐_產品</router-link></li>
              <li class="breadcrumb-item active" aria-current="page">{{ detailList.type }}</li>
            </ol>
          </nav>
        <div class="product_descrp row d-flex align-items-center">
          <div class="col-md-6"  data-aos="zoom-in" data-aos-delay="200" data-aos-duration="800" data-aos-easing="ease-out-back">
            <img :src="detailList.image" alt="" width="100%">
          </div>
          <div class="col-md-6 text-start">
          <ul class="detail_list p-2">
            <li data-aos="fade-up">
              <div class="fw-bold mb-0 position-relative fs-4 d-inline">{{ detailList.name }}
                <span class="badge rounded-pill bg-primary fs-6 position-absolute top-0 start-100" 
                :class="{  'bg-success': detailList.type === '床褥', 'bg-warning': detailList.type === '枕頭', 'bg-danger': detailList.type === '沙發'}"
                >{{ detailList.type }}</span>
              </div> 
            </li>
            <li data-aos="fade-up">
              <span>尺寸(公分) :  {{ detailList.size }} </span>
            </li>
            <li data-aos="fade-up">
              <span>產品描述 : </span>
              <p class="display-6 mt-1 lh-lg">{{ detailList.description }}</p>
            </li>
            <li class="d-flex" data-aos="fade-up">
              <div class="input-group  mt-2" style="width: 100%;">
                <button @click="n--" :disabled="n <= 1 "  class="btn btn-info">
                  <font-awesome-icon icon="fa-solid fa-minus" />
                </button>
                <input type="text" v-model.number="quantityChange.value" class="form-control text-center" style="max-width: 30%;" placeholder="1" aria-label="Username" aria-describedby="basic-addon1">
                <button  @click="n++" class="btn btn-info">
                  <font-awesome-icon  icon="fa-solid fa-plus" />
                </button>
              </div>
              <div class="text-end" data-aos="fade-up">單價： 
                <span class="cart_total fs-5 fw-bold" style="color: #0072E3; background-color:#FFE66F">NT${{ detailList.price }}</span>
              </div>
            </li>
            <li>
              <div class="cart_action mt-4 d-flex align-items-end justify-content-end" data-aos="fade-up">
                <span class="me-2 " >小計：$ {{  detailList.price * n }}</span>
                <div @click="storeCart(detailList, quantityChange)" class="btn btn-primary btn_hover">加入購物車</div>
              </div>
            </li>
          </ul>
          </div>
        </div>
      </div>
      
    </div>
  </section>

  <!-- 商品細節展示 -->
  <section class="mt-4">
    <div class="detail_policy">
      <div class="container px-2 px-lg-4"  data-aos="fade-up">
        <nav>
          <div class="nav nav-tabs" id="nav-tab" role="tablist">
            <button class="nav-link active px-1 px-sm-2" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">購物須知</button>
            <button class="nav-link px-1 px-sm-2" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">退貨説明</button>
            <button class="nav-link px-1 px-sm-2" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">贈品詳情</button>
          </div>
        </nav>
        <div class="tab-content text-start py-2" id="nav-tabContent" style="background-color: #D2E9FF;">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <div class="px-2" style="white-space:pre-wrap">
              {{ detailList.information }} 
            </div>
          </div>
          <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
            <div class="px-2" style="white-space:pre-wrap">
              {{ detailList.refund }} 
            </div>
          </div>
          <div class="tab-pane fade"  id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
            <div class="px-2" style="white-space:pre-wrap">
              {{ detailList.gift }} 
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mt-5"> 
      <div class="promotion_area" >
        <div class="container">
          <h3 class="mb-4">
            猜你喜歡
          </h3>
          <swiperProduct></swiperProduct>
        </div>
      </div>
  </section>

  <footerView></footerView>
</template>