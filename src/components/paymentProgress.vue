<template>
  <section class="mt-5 py-3">
  <div class="total_detail">
    <div class="container px-2 px-lg-4">
      <div class="row">
        <div class="col-12 position-relative m-auto">
          <div class="total_steps d-flex justify-content-between">
            <div class="each_step step_active step1">
              <font-awesome-icon icon="fa-solid fa-clipboard-list" />  
              <p>確認清单</p>
            </div>
            <div class="each_step step_active step2">
              <font-awesome-icon icon="fa-solid fa-rectangle-list" />
              <p>填寫資料</p>
            </div>
            <div class="each_step step3">
              <font-awesome-icon icon="fa-solid fa-credit-card" />
              <p>确认付款</p>
            </div>
            <div class="each_step step4">
              <font-awesome-icon icon="fa-solid fa-envelope-open-text" />
              <p>完成訂單</p>
            </div>            
          </div>
          <div class="progress position-absolute top-50 start-50 translate-middle" style="width: 90%; height: 10px;">
            <div class="progress-bar" role="progressbar" style="width: 35%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" ></div>
          </div> 
        </div>
      </div>
    </div>
  </div>
  </section>
</template>