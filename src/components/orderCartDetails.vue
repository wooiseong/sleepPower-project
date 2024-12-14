<script setup>
import { useCartStore } from '@/stores/modules/cart'  
import { storeToRefs} from 'pinia' 

const useCartList = useCartStore()
const { calculationList } = storeToRefs(useCartList)
</script>

<template>
  <div class="card w-100 py-2">
    <div class="card-body d-flex justify-content-evenly">
      <div class="card-text" style="width: 90%;">
        <h5 class="card-title bg-dark text-white py-1">訂單詳情</h5>
        <table class="table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">產品</th>
              <th scope="col">數量</th>
              <th scope="col">價格($)</th>
            </tr>
          </thead>
          <tbody v-for="(item, index) in useCartList.cartList" :key="index">
            <tr>
              <th scope="row" class="fw-normal">{{ index + 1 }}</th>
              <td>{{ item.name }}</td>
              <td>{{ item.quantityChange }}</td>
              <td>{{ item.quantityChange * item.price }}</td>
            </tr>
          </tbody>
        </table>
        <div class="px-2">
          <p class="card-text d-flex justify-content-between">
            <span>商品總額</span>
            <span>${{ calculationList.cartTotalPrice }}</span>
          </p>
          <p class="card-text d-flex justify-content-between">
            <span>運費</span>
            <span>${{ calculationList.transportFee }}</span>
          </p>
          <div class="">
            <p class="fs-6 text-start border-bottom border-dark pb-2 text-danger">*滿$1000即可免去運費！</p>
            <p class="card-text d-flex justify-content-between fw-bold fs-5">
              <span class="">
                應付金額</span>
              <span class="" style="color: #0072E3; background-color:#FFE66F">
                ${{ calculationList.priceAfterTransport }}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>