import request from '../'
import { CategoryData, ProductCategory } from '@/mock/type'
export function reqGetCategoryData(): Promise<{
  status: number
  dataList: CategoryData
}> {
  return request.get<{ status: number; dataList: CategoryData }>({
    url: '/getCategoryData',
  })
}

export function reqProductCategoryData(): Promise<{
  staus: number
  data: ProductCategory
}> {
  return request.get({ url: '/getProductCategory' })
}
