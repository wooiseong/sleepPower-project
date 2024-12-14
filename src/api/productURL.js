import request from '@/utils/request'

export const getProductList = () => request.get('list')

export const getProductType = (type) => request.get(`list?type=${type}`)

export const getProductInfo = (itemId) => request.get(`list?itemId=${itemId}`)  
