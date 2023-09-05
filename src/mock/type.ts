import { v4 as uuidv4 } from 'uuid'
const dataList = [
  {
    categoryName: '手机',
    category1Id: uuidv4(),
    category1ImgUrl: '',
    category2List: [
      {
        categoryName: 'Mate系列',
        category2Id: uuidv4(),
        category2ImgUrl:
          'https://res.vmallres.com/uomcdn/CN/cms/202210/C649534205C077EBE6B5DD31EB1216F2.png',
      },
      {
        categoryName: 'Mate系列',
        category2Id: uuidv4(),
        category2ImgUrl:
          'https://res.vmallres.com/uomcdn/CN/cms/202210/C649534205C077EBE6B5DD31EB1216F2.png',
      },
      {
        categoryName: 'Mate系列',
        category2Id: uuidv4(),
        category2ImgUrl:
          'https://res.vmallres.com/uomcdn/CN/cms/202210/C649534205C077EBE6B5DD31EB1216F2.png',
      },
      {
        categoryName: 'Mate系列',
        category2Id: uuidv4(),
        category2ImgUrl:
          'https://res.vmallres.com/uomcdn/CN/cms/202210/C649534205C077EBE6B5DD31EB1216F2.png',
      },
      {
        categoryName: 'Mate系列',
        category2Id: uuidv4(),
        category2ImgUrl:
          'https://res.vmallres.com/uomcdn/CN/cms/202210/C649534205C077EBE6B5DD31EB1216F2.png',
      },
      {
        categoryName: 'Mate系列',
        category2Id: uuidv4(),
        category2ImgUrl:
          'https://res.vmallres.com/uomcdn/CN/cms/202210/C649534205C077EBE6B5DD31EB1216F2.png',
      },
      {
        categoryName: 'Mate系列',
        category2Id: uuidv4(),
        category2ImgUrl:
          'https://res.vmallres.com/uomcdn/CN/cms/202210/C649534205C077EBE6B5DD31EB1216F2.png',
      },
      {
        categoryName: 'Mate系列',
        category2Id: uuidv4(),
        category2ImgUrl:
          'https://res.vmallres.com/uomcdn/CN/cms/202210/C649534205C077EBE6B5DD31EB1216F2.png',
      },
    ],
  },
]
const v1Data = {
  categoryName: '手机',
  category1Id: uuidv4(),
  category1ImgUrl: '',
  category2List: [
    {
      categoryName: 'Mate系列',
      category2Id: uuidv4(),
      category2ImgUrl:
        'https://res.vmallres.com/uomcdn/CN/cms/202210/C649534205C077EBE6B5DD31EB1216F2.png',
    },
    {
      categoryName: 'Mate系列',
      category2Id: uuidv4(),
      category2ImgUrl:
        'https://res.vmallres.com/uomcdn/CN/cms/202210/C649534205C077EBE6B5DD31EB1216F2.png',
    },
    {
      categoryName: 'Mate系列',
      category2Id: uuidv4(),
      category2ImgUrl:
        'https://res.vmallres.com/uomcdn/CN/cms/202210/C649534205C077EBE6B5DD31EB1216F2.png',
    },
    {
      categoryName: 'Mate系列',
      category2Id: uuidv4(),
      category2ImgUrl:
        'https://res.vmallres.com/uomcdn/CN/cms/202210/C649534205C077EBE6B5DD31EB1216F2.png',
    },
    {
      categoryName: 'Mate系列',
      category2Id: uuidv4(),
      category2ImgUrl:
        'https://res.vmallres.com/uomcdn/CN/cms/202210/C649534205C077EBE6B5DD31EB1216F2.png',
    },
    {
      categoryName: 'Mate系列',
      category2Id: uuidv4(),
      category2ImgUrl:
        'https://res.vmallres.com/uomcdn/CN/cms/202210/C649534205C077EBE6B5DD31EB1216F2.png',
    },
    {
      categoryName: 'Mate系列',
      category2Id: uuidv4(),
      category2ImgUrl:
        'https://res.vmallres.com/uomcdn/CN/cms/202210/C649534205C077EBE6B5DD31EB1216F2.png',
    },
    {
      categoryName: 'Mate系列',
      category2Id: uuidv4(),
      category2ImgUrl:
        'https://res.vmallres.com/uomcdn/CN/cms/202210/C649534205C077EBE6B5DD31EB1216F2.png',
    },
  ],
}
const v2Data = {
  categoryName: 'Mate系列',
  category2Id: uuidv4(),
  category2ImgUrl:
    'https://res.vmallres.com/uomcdn/CN/cms/202210/C649534205C077EBE6B5DD31EB1216F2.png',
}
export type CategoryV1Data = typeof v1Data
export type CategoryV2Data = typeof v2Data
export type CategoryData = typeof dataList
export interface ProductCategory {
  productId: string
  productName: string
  bgcUrl: string
}
