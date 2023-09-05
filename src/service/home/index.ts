import request from '../'
import { CategoryData, ProductCategory, RecommendData } from '@/mock/type'
export function reqGetCategoryData(): Promise<{
  status: number
  dataList: CategoryData
}> {
  return request.get<{ status: number; dataList: CategoryData }>({
    url: '/getCategoryData',
  })
}

export function reqProductCategoryData(): Promise<{
  status: number
  data: ProductCategory
}> {
  return request.get({ url: '/getProductCategory' })
}
export function reqRecommendData(): Promise<{
  status: number
  data: RecommendData
}> {
  return request.get({ url: '/getRecommendData' })
}
