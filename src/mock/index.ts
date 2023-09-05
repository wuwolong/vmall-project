import Mock from 'mockjs' //导入mockjs
import { v4 as uuidv4 } from 'uuid'
Mock.mock('/api/getCategoryData', 'get', {
  status: 200, //请求成功状态码
  dataList: [
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
    {
      categoryName: '穿戴',
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
    {
      categoryName: '平板',
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
    {
      categoryName: '电脑',
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
    {
      categoryName: '耳机音箱',
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
    {
      categoryName: '智慧屏',
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
    {
      categoryName: '门锁路由',
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
    {
      categoryName: '出行车品',
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
    {
      categoryName: '数码配件',
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
    {
      categoryName: '增值服务',
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
    {
      categoryName: '商用终端',
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
    {
      categoryName: '生态周边',
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
  ], //模拟的请
})
