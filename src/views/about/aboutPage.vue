<script setup>
import { vueMetaInput } from '@/utils/vueMetaSetting'

vueMetaInput('寐理念 | 我們的臥具因需求而生,經過層層研發找到臥具的完美比例 - 【寐 . 力】Sleep Power')
</script>

<template>
  <cursorEffect></cursorEffect>
  <navbarView></navbarView>
  <cartCanvas></cartCanvas>
  <navtoTop></navtoTop>
  
  <!-- 標題 -->
  <header>
      <div class="about_header mt-4">
        <div class="container-fluid">
          <div class="about_background position-relative">
            <div class="about_text position-absolute bottom-50 end-0 translate-middle-x text-end text-white fs-3">
              <p data-aos="fade-right" data-aos-delay="100">睡眠的品質</p>
              <p data-aos="fade-right" data-aos-delay="150">決定生活的素質</p>
            </div>
          </div>
          <div>
          </div>
        </div>
      </div>
  </header>

  <!-- 理念 -->
   <section>
    <div class="about_descrp">
      <div class="container px-2 px-md-4 mt-4 py-3">
        <h2 data-aos="fade-up" 
        ><mark>寐</mark>
          _理念</h2>
          <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb" class="pt-3" data-aos="fade-right">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><router-link to="/">寐_首頁</router-link></li>
              <li class="breadcrumb-item active" aria-current="page">寐_理念</li>
            </ol>
          </nav>
        <div class="row d-flex align-items-center">
          <div class="col-md-8" data-aos="fade-up">
            <img src="https://i.ibb.co/Yt4bsVW/sleeping-about3.jpg" width="100%" alt="sleeping-about3">
          </div>
          <div class="col-md-4 p-3 p-md-0">
            <h3 class="lh-lg title_style mb-3" data-aos="fade-down">緣起</h3>
            <div class=" text-start text_style mx-1" data-aos="fade-up" data-aos-delay="400">
              <p>「昨晚有睡和沒睡一樣」</p>
              <p class="text-end">「我的脖子好痛，床太硬了！」</p>
              <p class="mt-3">這些對話，就是我們的日常。</p>
              <p>我們開啓生活，只會想到午餐吃什麽，下班排隊買家樓下的咸酥鷄，卻很少想過怎麽樣改善睡眠質量  &mdash;&mdash; 寐力值。</p>
            </div>
          </div>
          <div class="col-md-6 p-3 p-md-0 mt-md-3">
            <h3 class="lh-lg title_style mb-3" data-aos="fade-down" data-aos-delay="500" data-aos-duration="1000">研發之路</h3>
            <div class=" text-start text_style mx-1"  data-aos="fade-up" data-aos-delay="600" data-aos-duration="1000">
              <p>因此，我們開始尋找一個能讓所有人睡得舒服的床墊。過程中的困難重重，特別是如何讓人躺上去，如“躺在雲端的舒適感”。</p>
              <p>在經過十年的不懈研發，我們終於找到了符合大多數人睡眠質量的床墊的
                <span class="text_effect fs-4">
                  完美比例
                </span>
                。</p>
            </div>
          </div>
          <div class="col-md-6">
            <img src="https://i.ibb.co/hWkjS0P/sleeping-about7.webp" class="py-2" width="100%" alt="sleeping-about7">
          </div>
      </div>
      <div class="row mt-5">
        <div class="col-md-12 p-3 p-md-0">
          <h3 class="lh-lg title_style mb-3" data-aos="fade-down" data-aos-delay="500">床的完美比例</h3>
          <div class=" text-start text_style mx-1" data-aos="fade-up" data-aos-delay="600">
            <p>我們發現，睡覺的床褥，硬度會影響睡眠的質量。</p>
            <p>所以，我們以8：2的比例混合泡沫棉和直筒棉，兼具了前者的彈性和後者的硬度。躺下去，就猶如躺在薄薄的棉花上。考量到床褥的溫度也會影響睡眠，我們以石墨烯專利技術，讓床墊的散熱速度比普通床褥提升20%。</p>
          </div>
        </div>
        <div class="col-md-6 mt-md-3" data-aos="fade-down" data-aos-delay="700">
          <img src="https://i.ibb.co/pLyJ7cB/sleeping-about9.webp" width="100%;" alt="sleeping-about9">
        </div>
        <div class="col-md-6 p-3 p-md-0">
          <h3 class="lh-lg title_style mb-3" data-aos="fade-down" data-aos-delay="800">「寐」的展望</h3>
          <div class=" text-start text_style mx-1" data-aos="fade-up" data-aos-delay="900">
            <p>我們為買家層層控管。床褥的品質，只以達到中華民國SGS國家安全標準的床褥送到你家。</p>
            <p>此外，我們的產品有三年的保固期。期間的任何破損都可以送到門市更換新的。</p>
            <p>爲了回應買家們的長遠支持，我們會持續研發更多的產品，為全臺的寐力值把關。</p>
          </div>
        </div>
      </div>
    </div>
    </div>
   </section>

   <!-- 聯係詳情 -->
   <section class="mt-5">
      <div class="about_contact" >
        <div class="container p-2 p-md-3 ">
          <div class="row">
            <div class="col-md-12">
              <h2 class=" border-bottom border-primary border-3 lh-lg text-primary">聯係我們</h2>
              <div class="fw-bold">
                <p>客服電話： 09-33227002</p>
                <p>客服電郵: wooiseongseong96@gmail.com</p>
                <p>住址： 臺北市信義區林口街109號2之1</p>
                <p>服務時間：09:00-1200 | 13:00-17:00</p>
              </div>
            </div>
            <div class="col-md-12">
              <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBTq9GM2iumAwq6_ZNHVsAPAAHRbye6izs&q=ChIJpwcdh_QEbjQRSealHm8pucw
              807台灣高雄市三民區建國二路318號" width="95%" height="400"  allowfullscreen="" style="border:0; "  loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
          </div>

        </div>
      </div>
   </section>

   <footerView></footerView>
</template>