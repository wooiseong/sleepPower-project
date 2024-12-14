<script setup>
import { useToast } from "vue-toastification"
import { usePersonalStore } from '@/stores/modules/personal'
import { useRouter } from 'vue-router'
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/yup';
import * as yup from 'yup';
import { zhtw } from 'yup-locales';
import { setLocale } from 'yup';
import { usePaymentStore } from '@/stores/modules/payment'
import { useCartStore } from '@/stores/modules/cart'
import { vueMetaInput } from '@/utils/vueMetaSetting'

vueMetaInput('填寫資料 | 購物車 -【寐 . 力】Sleep Power')

const usePaymentList = usePaymentStore()
usePaymentList.paymentStep.progress = 30

const useCartList = useCartStore()
const toast = useToast()
const personalStore = usePersonalStore()
const router = useRouter()

setLocale(zhtw);
const phoneReg = /^09[0-9]{8}$/
const { errors, defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(
    yup.object({
      email: yup.string().email().required(),
      name: yup.string().required(),
      phone: yup.string().matches(phoneReg, '手機格式不正確').required(),
      address: yup.string().required(),
      payment: yup.string().required(),
    }),
  ),
})

const [email, emailAttrs] = defineField('email')
const [name, nameAttrs] = defineField('name')
const [phone, phoneAttrs] = defineField('phone')
const [address, addressAttrs] = defineField('address')
const [payment, paymentAttrs] = defineField('payment')

const onSubmit = handleSubmit((data) => {
    personalStore.personalList = data
    toast.success('表單提交完成！', {
    onClose: () => {
      setTimeout(() => {
      router.push('/payment/confirm')
      },1000)
    }
  })
})
</script>

<template>
      <section class="mt-4">
    <div class="total_list">
      <div class="container px-2 px-lg-4">
        <h3 class="">填寫資料</h3>
        <div class="row row-cols-1 row-cols-md-2 mt-1 g-3">
          <div class="col">
            <form @submit="onSubmit" class="row g-3 needs-validation text-start" novalidate
            >
            <div class="col-md-12 position-relative">
                <label for="email" class="form-label">收件人電郵</label>
                <div class="input-group">
                  <input 
                  v-model="email" v-bind="emailAttrs"
                  type="text"  class="form-control  form_background email " id="email" name="email" aria-describedby="inputGroupPrepend"  placeholder="請輸入電郵地址"
                  >
                  <div class="error_msg position-absolute top-100 fs-6 ms-1">
                    <!-- 名字只能包含英文字母、數字、底線、中間線和點號。 -->
                    {{ errors.email }} 
                  </div>
                </div>
              </div>
              <div class="col-md-12 position-relative">
                <label for="name" class="form-label">收件人姓名</label>
                <div class="input-group">
                  <input 
                   v-model.trim="name" v-bind="nameAttrs"
                  type="text" class="form-control  form_background name " id="name" name="name" aria-describedby="inputGroupPrepend" placeholder="請輸入姓名"
                  >
                  <div class="error_msg position-absolute top-100 fs-6 ms-1">
                    <!-- 名字只能包含英文字母、數字、底線、中間線和點號。 -->
                    {{ errors.name }}
                  </div>
                </div>
              </div>
              <div class="col-md-12 position-relative">
                <label for="phone" class="form-label">收件人電話</label>
                <div class="input-group has-validation">
                  <input 
                   v-model="phone" v-bind="phoneAttrs"
                  type="text" class="form-control  form_background phone" id="phone" name="phone" aria-describedby="inputGroupPrepend" placeholder="請輸入電話號碼"
                  >
                  <div class="error_msg position-absolute top-100 fs-6 ms-1">
                    <!-- 名字只能包含英文字母、數字、底線、中間線和點號。 -->
                    {{ errors.phone }}
                  </div>
                </div>
              </div>
              <div class="col-md-12 position-relative">
                <label for="address" class="form-label">收件人地址</label>
                <div class="input-group has-validation">
                  <input 
                   v-model.trim="address" v-bind="addressAttrs"
                  type="text" class="form-control  form_background address" id="address" name="address" aria-describedby="inputGroupPrepend" placeholder="請輸入地址"
                  >
                  <div class="error_msg position-absolute top-100 fs-6 ms-1">
                    {{ errors.address }}
                  </div>
                </div>
              </div>
              <div class="col-md-12 position-relative">
                <label for="payment" class="form-label">付款方式</label>
                <select 
                v-model="payment" v-bind="paymentAttrs"
                id="payment" class="form-select form_background payment" name="payment"
                >
                  <option value="credit">信用卡/金融卡</option>
                  <option value="line">Line支付</option>
                  <option value="ATM">ATM轉賬</option>
                  <option value="store">超商取貨付款</option>
                </select>
                <div class="error_msg position-absolute top-100 fs-6 ms-1">
                    {{ errors.payment }}
                  </div>
              </div>
              <div class="col-12">
                <label for="userMessage" class="form-label">備注</label>
                <textarea id="message" class="form-control  form_background userMessage" name="userMessage" cols="30" rows="5"
                ></textarea>
              </div>
              <div class="col-12 d-flex justify-content-between">
                <router-link to="/payment/total" class="btn btn-outline-primary">&lt; 上一頁</router-link>
                <button :disabled="useCartList.cartList.length < 1" type="submit" class="btn btn-primary" >資料提交</button>
                <!-- disabled="disabled" -->
              </div>
            </form>
          </div>
          <div class="col">
            <orderCartDetails></orderCartDetails>
          </div>
        </div>
      </div>
    </div>
    </section>
</template>