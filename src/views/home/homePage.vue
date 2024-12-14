<script setup>
import swiperProduct from '@/components/swiperProduct.vue'
import { vueMetaInput } from '@/utils/vueMetaSetting'
vueMetaInput('【寐 . 力】Sleep Power 我們的高品質臥具，讓您補充寐力值')


</script>

<template>
<cursorEffect></cursorEffect>
<navbarView></navbarView>
<headerView></headerView>
<cartCanvas></cartCanvas>
<navtoTop></navtoTop>
   
<!-- 資訊欄-->
<section class="mt-5 pt-4">
  <div class="info_area" style="background-color:	#D2E9FF">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-6 img_overflow" data-aos="zoom-in" data-aos-delay="200" data-aos-duration="1500" data-aos-easing="ease-out-back">
          <img src="https://i.ibb.co/6wTQ8Wm/info1.jpg" alt="info1">
        </div>
        <div class="col-md-5 text-start p-3 mt-1" >
            <h3 class="bg-secondary rounded-pill text-center py-1" data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1500"> 「寐」的重要性</h3>
            <p class="lh-lg" data-aos="fade-up" data-aos-delay="300"  data-aos-duration="1500">睡眠舒緩我們日間纍積的疲勞。當睡眠不足，會開始感到精神受損和健忘。</p>
            <p class="lh-lg" data-aos="fade-up" data-aos-delay="600"  data-aos-duration="1500">在睡夢中，神經突觸鏈接會增加，讓大腦的創造力提升，進而提升解決問題的能力。</p>
        </div>
      </div>
    </div>
  </div>
  <div class="info_area mt-5" style="background-color: #C4E1FF">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-md-5 order-sm-5 order-md-1 text-sm-start text-md-end p-3 mt-1">
          <h3 class="bg-secondary rounded-pill text-center py-1" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500"> 「寐」的品質 </h3>
          <p class="lh-lg" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">根據2024睡眠日調查，
          影響睡眠品質的因素有：</p>
          <p data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">心理（68.7%），
            <span>環境(22.5%)</span>
            ，飲食(8.8%)</p>
          <p class="lh-lg fw-bold fs-5" data-aos="fade-up" data-aos-delay="100" data-aos-duration="1500">而環境中，臥具就占了
            <span class="fs-2 border-bottom border-primary border-5">90%！</span>
          </p>
          <p  data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500">可見臥具對睡眠品質影響深遠。</p>
      </div>
        <div class="col-md-6 order-sm-1 order-md-5 img_overflow" data-aos="zoom-in" data-aos-delay="100" data-aos-duration="1500" data-aos-easing="ease-out-back">
          <img src="https://i.ibb.co/FXGg59D/info2.jpg" alt="info2">
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 插畫 -->
<section class=" mt-5 pt-2 d-none d-md-block">
  <div class="illustration_area">
    <div class="container px-2 px-md-5">
      <div>別擔心，我們是臥具的專家！</div>
      <h2 class="fs-1 pt-2">補充你的
        <mark>寐</mark>
        力值</h2>
      <div class="progress_icon pt-5" style="height: 30px;">
        <img src="https://i.ibb.co/yBhV1Cq/pillow-icon.png" style="width: 10%;" alt="pillow-icon">
      </div>
      <div class="progress mb-3">
        <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>         
      </div>
      <div class="progress_img row">
        <div class="col-4 progress_item1">
          <img src="https://i.ibb.co/Y7tg27s/sleep-icon2.jpg" class="img-fluid rounded-4" alt="sleep-icon2">
        </div>
        <div class="col-4 offset-4 progress_item2">
          <img src="https://i.ibb.co/9VtVpzW/sleep-icon3.jpg" class="img-fluid rounded-4" alt="sleep-icon3">
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 理念 -->
<section class="mt-4">
  <div class="about_area" style="background-color: #f8f8f8;">
    <div class="container py-4">
      <h2 class="mb-4">
        <mark>寐</mark>
        _理念
      </h2>
      <div class="row align-items-center">
        <div class="col-md-6">
          <div class="about_img rounded-1">
            <img src="https://i.ibb.co/s6mR7hX/about2.jpg" class="img-fluid" style="width: 100%;" alt="about2">
          </div>
        </div>
        <div class="col-md-6 px-2 py-3 px-lg-5">
            <div class="text-start">
              <h3 class="pb-1" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800" >軟硬兼施，混合棉也</h3>
              <p data-aos="fade-up" data-aos-delay="250" data-aos-duration="800">依照東方人睡眠習慣，舒服的床墊應該兼具足以支撐人體結構和柔軟的觸感。</p>
              <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">我們混合軟Q的泡沫棉和硬度適中的直筒棉，身體重量，躺久了也不變形。</p>
              <div class="pt-2 text-center" data-aos="fade-up" data-aos-delay="350" data-aos-duration="800">
                <router-link to="/about" class="btn_custom">關於我們</router-link>
              </div>
            </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-6 order-1 order-md-5">
          <div class="about_img rounded-1">
            <img src="https://i.ibb.co/ZRQZT3m/about1.jpg" class="img-fluid" style="width: 100%;" alt="about1">
          </div>
        </div>
        <div class="col-md-6 px-2 py-3 px-lg-5 order-5 order-md-1">
            <div class="text-start">
              <h3 class="pb-1" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">散熱除濕，石墨烯墊</h3>
              <p data-aos="fade-up" data-aos-delay="250" data-aos-duration="800">我們的產品外層包覆5公分厚的意大利進口的石墨烯，</p>
              <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">可以幫助散熱和除濕，躺久了也不悶熱,並且石墨烯層也不會因為使用而變形，可以長久使用。</p>
              <div class="pt-2 text-center" data-aos="fade-up" data-aos-delay="350" data-aos-duration="800">
                <router-link to="/about" class="btn_custom">關於我們</router-link>
              </div>
            </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-md-6">
          <div class="about_img rounded-1">
            <img src="https://i.ibb.co/RcHDV6B/about5.jpg" class="img-fluid" style="width: 100%;" alt="about5">
          </div>
        </div>
        <div class="col-md-6 px-2 py-3 px-lg-5">
            <div class="text-start">
              <h3 class="pb-1" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
                直送快速，全臺跑透
              </h3>
              <p data-aos="fade-up" data-aos-delay="250" data-aos-duration="800">爲了讓您儘快享受與寐接觸的時光，我們有專業的運輸團隊，直送至全臺各地，可以以最快的速度，讓您收到商品。</p>
              <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">PS: 聽説最多只要5天  | : P</p>
              <div class="pt-2 text-center" data-aos="fade-up" data-aos-delay="350" data-aos-duration="800">
                <router-link to="/about" class="btn_custom">關於我們</router-link>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- 種類 -->
<section class="my-3">
  <div class="category_area">
    <div class="container py-3">
      <h2 class="mb-4">
        <mark>寐</mark>
        _種類</h2>
        <div class="row px-2 px-md-0">
          <div class="col-md-4"  data-aos="zoom-in" data-aos-delay="300" data-aos-duration="1000" data-aos-easing="ease-out-back" >
            <router-link :to="{ path: '/productList', query: { type: '床褥' }}">
              <div class="d-flex-column border border-dark mb-1  py-3 category_group" >
                <h3>床褥</h3>
                <p>舒服透氣，如入雲層</p>
                <router-link :to="{ path: '/productList', query: { type: '床褥' }}" class="btn_custom2">點擊查看</router-link>
              </div>
            </router-link>
          </div>
          <div class="col-md-4"  data-aos="zoom-in" data-aos-delay="600" data-aos-duration="1000" data-aos-easing="ease-out-back">
            <router-link  :to="{ path: '/productList', query: { type: '枕頭' }}">
              <div class="d-flex-column border border-dark mb-1 py-3 category_group">
                <h3>枕頭</h3>
                <p>符合人工，護頸保椎</p>
                <router-link :to="{ path: '/productList', query: { type: '枕頭' }}" class="btn_custom2">點擊查看</router-link>
              </div>
            </router-link>
          </div>
          <div class="col-md-4"  data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1000" data-aos-easing="ease-out-back">
            <router-link  :to="{ path: '/productList', query: { type: '沙發' }}">
              <div class="d-flex-column border border-dark mb-1 py-3 category_group">
                <h3>沙發</h3>
                <p>軟硬適中，靠好靠滿</p>
                <router-link :to="{ path: '/productList', query: { type: '沙發' }}" class="btn_custom2">點擊查看</router-link>
              </div>
            </router-link>
          </div>
        </div>
    </div>
  </div>
</section>

<!-- 產品 -->
<section class="mt-5"> 
  <div class="promotion_area" >
    <div class="container">
      <h2 class="mb-4">
        <mark>寐</mark>
        _產品
      </h2>
      <div data-aos="fade-up" data-aos-delay="100">
        <swiperProduct></swiperProduct>
      </div>
    </div>
  </div>
</section>
    
<footerView></footerView>
</template>

