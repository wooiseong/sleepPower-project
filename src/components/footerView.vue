<template>
  <footer class="mt-5">
     <div class="contact_area text-white" style="background-color:	#0066CC">
      <div class="container pt-3">
        <div class="row align-items-center justify-content-around mb-2">
          <div class="col-md-4 px-4 px-md-0 px-lg-0 order-1 order-md-2">
            <router-link to="/">
              <p class="logo_style mt-1 text-white">寐 . 力</p>
             </router-link>
            <p class="fs-4">提升你的魅力</p>
          </div>
          <div class="col-md-4 fs-5 order-2 order-md-1" >
            <div class="footer_nav d-flex justify-content-around text-nowrap">
              <router-link to="/" >
                <span class="footer_link">&ensp;寐_首頁&ensp; </span>
              </router-link>
              <router-link to="/about">
                <span class="footer_link">&ensp;寐_理念&ensp;</span>
              </router-link>
              <router-link  to="/productList">
                <span class="footer_link">&ensp;寐_產品&ensp;</span>
              </router-link>
            </div>
            <div class="footer_contact mt-1 d-flex justify-content-around">
              <a class=" mx-md-4 fs-3">
                <font-awesome-icon icon="fa-brands fa-github" />
              </a>
              <a class="mx-md-2 fs-4">
                <font-awesome-icon icon="fa-brands fa-linkedin" />
              </a>
              <a href="mailto:wooiseongseong96@gmail.com" class="mx-md-4 fs-4">
                <font-awesome-icon icon="fa-solid fa-envelope" />
              </a>
            </div>
          </div>
          <div class="col-md-4 order-3 d-none d-lg-block">
            <div class="mx-3 py-3 rounded-3 text-nowrap d-flex-column " style= "background-color: #fff"> 
              <div class="mb-2">
                <router-link to="/productList" class="btn btn-primary btn_effect px-lg-4">馬上訂購</router-link>
              </div>
              <div>
                <a href="tel:+886-9-33227002" class="btn btn-outline-primary btn_effect px-lg-4">來電洽詢</a>
              </div>
            </div>
          </div>
        </div>
        <span class="fs-6">Copyright © 2024 Meili.All rights reserved. <br>
          作業練習使用，無商業用途</span>
      </div>
    </div>
  </footer>
</template>