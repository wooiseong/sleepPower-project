<script setup>
import { storeToRefs } from 'pinia'
import { usePersonalStore } from '@/stores/modules/personal'
import { useRouter } from 'vue-router'
import { usePaymentStore } from '@/stores/modules/payment'
import { useCartStore } from '@/stores/modules/cart'
import { vueMetaInput } from '@/utils/vueMetaSetting'

vueMetaInput('確認付款 | 購物車 -【寐 . 力】Sleep Power')

const usePaymentList = usePaymentStore()
usePaymentList.paymentStep.progress = 70

import Swal from 'sweetalert2'
const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: "btn btn-success",
    cancelButton: "btn btn-danger"
  },
  buttonsStyling: false
});

const personalStore = usePersonalStore()
const { personalList } = storeToRefs(personalStore) 

const useCartList =  useCartStore()

const router = useRouter()
const routeDirect = () => {
  swalWithBootstrapButtons.fire({
  title: "確定要付款嗎？",
  text: "付款了不能取消訂單喲！",
  icon: "warning",
  showCancelButton: true,
  confirmButtonText: "確認",
  cancelButtonText: "取消",
  reverseButtons: true
}).then((result) => {
  if (result.isConfirmed) {
    swalWithBootstrapButtons.fire({
      title: "付款完成！",
      text: "謝謝您的惠顧",
      showConfirmButton: false,
      icon: "success",
    });
    setTimeout(() => {
    Swal.close()
    useCartList.clearCart()
  } ,3000)
  router.push('/payment/success')
  } else if (
    result.dismiss === Swal.DismissReason.cancel
  ) 
  {
    swalWithBootstrapButtons.fire({
      title: "取消付款",
      text: "逛完再來付款吧！",
      iconHtml: '$'
    })
  }
})
}
</script>

<template>
  <section class="mt-4">
    <div class="total_list">
      <div class="container px-2 px-lg-4">
        <h3 class="">確認付款</h3>
        <div class="row mt-1 row-cols-1 row-cols-md-2 g-3">
          <div class="col">
            <div class="card w-100 py-2 border border-primary border-4 ">
              <div class="card-body d-flex justify-content-evenly">
                <div class="card-text" style="width: 90%;">
                  <h5 class="card-title border-bottom border-primary border-3 lh-lg  fw-bold text-primary">收件資訊</h5>
                  <table class="table text-start">
                    <tbody  style="word-break:break-all; word-wrap:break-word;">
                      <tr>
                        <td width="25%">訂單時間</td>
                        <td width="75%">2024/10/14</td>
                      </tr>
                      <tr>
                        <td>訂單編號</td>
                        <td>345</td>
                      </tr>
                      <tr>
                        <td>電子郵件</td>
                        <td>{{ personalList.email }}</td>
                      </tr>
                      <tr>
                        <td>收件人名</td>
                        <td>{{ personalList.name }}</td>
                      </tr>
                      <tr>
                        <td>聯絡電話</td>
                        <td>{{ personalList.phone }}</td>
                      </tr>
                      <tr>
                        <td>收貨地址</td>
                        <td >{{personalList.address }}</td>
                      </tr>
                      <tr>
                        <td>付款方式</td>
                        <td>{{ personalList.payment }}</td>
                      </tr>
                      <tr>
                        <td>備注</td>
                        <td>{{ personalList.message }}</td>
                      </tr>
                      <tr>
                        <td>付款狀態</td>
                        <td class="text-danger fw-bold">未付款</td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="d-grid">
                    <button  @click="routeDirect" :disabled="useCartList.cartList.length < 1" class="btn btn-primary">確認付款</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <orderCartDetails></orderCartDetails>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>