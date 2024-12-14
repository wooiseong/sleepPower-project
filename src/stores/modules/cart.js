import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const cartList = ref([])
  const storeList = ref([])
  const addCart = (detailList, quantityChange) => {
    storeList.value = { ...detailList, quantityChange }
    const result = cartList.value.find(item => item.itemId === storeList.value.itemId )
    if (result) {
      result.quantityChange += storeList.value.quantityChange
     }  else {
       cartList.value.push(storeList.value)
     }
    totalPrice(cartList)
    }
  const calculationList = ref(
    {
      cartTotalPrice: 0,
      cartTotalItem: 0,
      transportFee: 0,
      priceAfterTransport: 0,
    }
  )
  const totalPrice = (itemList) => {
    let eachPrice = 0
    let totalPrice = 0
    for (let i = 0; i < itemList.value.length ; i++ ) {
        eachPrice = itemList.value[i].price * itemList.value[i].quantityChange
        totalPrice += eachPrice
     }
     calculationList.value.cartTotalPrice = totalPrice
     calculationList.value.cartTotalItem = itemList.value.length
     calculationList.value.transportFee = parseInt(calculationList.value.cartTotalPrice * 0.05)
     
     if (totalPrice > 1000 ){
      calculationList.value.priceAfterTransport = calculationList.value.cartTotalPrice
     } else {
      calculationList.value.priceAfterTransport = calculationList.value.cartTotalPrice + calculationList.value.transportFee
     }
    }
  const clearCart = () => {
      cartList.value = []
      totalPrice(cartList)
    }
  const deleteCartItem =  (deleteItemId) => {
    let index = cartList.value.findIndex(item => item.itemId === deleteItemId)
    cartList.value.splice(index, 1);
    totalPrice(cartList)
  }
  return {
    cartList, 
    addCart,
    totalPrice,
    clearCart,
    deleteCartItem,
    calculationList 
  }
}
, {
  persist: true
}
)
