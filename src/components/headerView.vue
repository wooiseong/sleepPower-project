<template>
    <header>
    <div class="container-fluid px-0 position-relative">
      <div class="carousel_area">
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item carousel_holder active" style="background-image: url('https://i.ibb.co/HK2QgFP/carou2.jpg');">
            </div>
            <div class="carousel-item carousel_holder" style="background-image: url('https://i.ibb.co/sbB5B00/carou1.jpg');">
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
     <div class="header_text position-absolute top-50 start-50 translate-middle z-1 text-white px-1 py-2 p-md-3 " style="background-color: rgba(0, 0, 0, 0.3);"
       data-aos="zoom-in" data-aos-duration="1500">
        <h1 data-aos="fade-right" data-aos-delay="100" data-aos-duration="1500">好床，是安眠的家</h1>
        <p class="fs-5" data-aos="fade-left" data-aos-delay="100" data-aos-duration="1500">讓我們一起做好夢！</p>
        <router-link to="/productList" class="btn btn-primary btn-lg btn_effect">前往商品</router-link>
     </div>
    </div>
   </header>
</template>