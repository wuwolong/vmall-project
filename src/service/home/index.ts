import request from '../'
import { CategoryData } from '@/mock/type'
export function reqGetCategoryData(): Promise<{
  status: number
  dataList: CategoryData
}> {
  return request.get<{ status: number; dataList: CategoryData }>({
    url: '/getCategoryData',
  })
}
