<script setup>
import { ref, onMounted } from 'vue'
import { getProductList, getProductType } from '@/api/productURL'
import { useRoute, useRouter } from 'vue-router'
import { useCartStore } from '@/stores/modules/cart'
import { useToast } from "vue-toastification"
import { useLoading } from 'vue-loading-overlay'
import { vueMetaInput } from '@/utils/vueMetaSetting'

vueMetaInput('寐產品 | 寐力補充倉庫，包含床褥，枕頭和沙發，任君挑選 - 【寐 . 力】Sleep Power')

const $loading = useLoading({
  color: '#0072E3',  
  width: 80,
  height: 80,         
  opacity: 0.5,                   
})

const toast = useToast()
const keyWords = ref('')
const route = useRoute()
keyWords.value = route.query.type

//取得所有產品列表
const productList = ref([])
const useProductType = async (type) => {
  const res = await getProductType(type)
  productList.value = res.data
}

//取得特定種類產品
const useProductList = async () => {
  const res = await getProductList()
  productList.value = res.data
}

if (keyWords.value){
  useProductType(keyWords.value)
} else {
  useProductList()
} 

//點擊顯示該類別產品
const showProductType = (type) => {
  useProductType(type)
  const loader = $loading.show({
  });
  setTimeout(() => {
      loader.hide()
  }, 600)
  keyWords.value = type
} 

//跳轉至產品詳情頁面
const router = useRouter()
const getProductDetail = (itemId) => {
  router.push({ path: '/detail' , query: {
    itemId
  } }) 
}

const useCartList = useCartStore()
//點擊購物車icon下單
const iconAddCart = (detailList) => {
  useCartList.addCart(detailList, 1)
  toast.info(`【${detailList.name}】    已經加入購物車~`)
}

onMounted(() => {
  const loader = $loading.show({
  })
  setTimeout(() => {
    loader.hide()
  }, 1000)
})
</script>

<template>
  <cursorEffect></cursorEffect>
  <navbarView></navbarView>
  <cartCanvas></cartCanvas>
  <navtoTop></navtoTop>
  
  <!-- 商品展示區域 -->
  <section>
    <div class="about_descrp">
      <div class="container px-2 px-md-4 mt-5 py-3">
        <h2 data-aos="fade-up" ><mark>寐</mark>
          _產品</h2>
          <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="pt-3" data-aos="fade-right">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link to="/">寐_首頁</router-link></li>
              <li class="breadcrumb-item active" aria-current="page">寐_產品</li>
            </ol>
          </nav>
        <div class="row">
          <div class="col-md-2" data-aos="fade-down">
            <div class="list-group sticky_middle text-nowrap">
              <a  href="#"  @click="showProductType('')" :class="{ 'active': keyWords === undefined || keyWords === ''}" class="list-group-item list-group-item-action px-0">
                全部
              </a>
              <a href="#" @click="showProductType('床褥')" :class="{ 'active': keyWords === '床褥' }" class="list-group-item list-group-item-action px-0">床褥</a>
              <a href="#" @click="showProductType('枕頭')" :class="{ 'active': keyWords === '枕頭' }" class="list-group-item list-group-item-action px-0">枕頭</a>
              <a href="#" @click="showProductType('沙發')" :class="{ 'active': keyWords === '沙發' }" class="list-group-item list-group-item-action px-0">沙發</a>
            </div>
          </div>
          <div class="col-md-10 mt-3 mt-md-0" data-aos="fade-up" >
              <div class="row row-cols-1 row-cols-sm-2 row-cols-lg-3">
                <div v-for="(item) in productList" :key="item.itemId" class="col d-flex justify-content-center mb-3" >
                  <div class="card">
                    <a href="#" @click="getProductDetail(item.itemId)">
                      <img :src="item.image" class="card-img-top img-fluid" style="object-fit: cover;" alt="...">
                      <div class="img_tag text-white" :class="{  'bg-success': item.type === '床褥', 'bg-warning': item.type === '枕頭', 'bg-danger': item.type === '沙發'}">{{ item.type }}</div>
                      <div class="card_tag">
                        <div class="card_tag_text fs-4">商品資訊</div>
                      </div>
                    </a>
                    <div class="card-body py-2 position-relative">
                      <div class="card-text text-start ps-2">
                          <span>{{ item.name }}</span>
                          <p class="fs-6 m-auto">售價: NT {{ item.price }}</p>
                      </div>
                      <a  @click="iconAddCart(item)" class="btn btn-outline-primary btn_effect position-absolute end-0 bottom-0 translate-middle">
                        <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </div>
    </div>
    </div>
  </section>

  <footerView></footerView>
</template>