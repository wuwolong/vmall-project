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

Mock.mock('/api/getProductCategory', 'get', {
  status: 200,
  data: [
    {
      productId: uuidv4(),
      productName: '智慧办公',
      bgcUrl:
        'https://res.vmallres.com/cmscdn/CN/2023-08/53c32ea2aff7494c9252f470a6e54f20.png.webp',
    },
    {
      productId: uuidv4(),
      productName: '智慧家居',
      bgcUrl:
        'https://res.vmallres.com/cmscdn/CN/2023-08/459bb5bc07e841e0b31216f42aee0f99.png.webp',
    },
    {
      productId: uuidv4(),
      productName: 'ATO汽车',
      bgcUrl:
        'https://res.vmallres.com/cmscdn/CN/2023-08/d2f51644d1c34b42a27d046e0e6b591c.png.webp',
    },
    {
      productId: uuidv4(),
      productName: '智慧办公',
      bgcUrl:
        'https://res.vmallres.com/cmscdn/CN/2023-08/53c32ea2aff7494c9252f470a6e54f20.png.webp',
    },
    {
      productId: uuidv4(),
      productName: '智慧家居',
      bgcUrl:
        'https://res.vmallres.com/cmscdn/CN/2023-08/459bb5bc07e841e0b31216f42aee0f99.png.webp',
    },
    {
      productId: uuidv4(),
      productName: 'ATO汽车',
      bgcUrl:
        'https://res.vmallres.com/cmscdn/CN/2023-08/d2f51644d1c34b42a27d046e0e6b591c.png.webp',
    },
    {
      productId: uuidv4(),
      productName: '智慧办公',
      bgcUrl:
        'https://res.vmallres.com/cmscdn/CN/2023-08/53c32ea2aff7494c9252f470a6e54f20.png.webp',
    },
    {
      productId: uuidv4(),
      productName: '智慧家居',
      bgcUrl:
        'https://res.vmallres.com/cmscdn/CN/2023-08/459bb5bc07e841e0b31216f42aee0f99.png.webp',
    },
    {
      productId: uuidv4(),
      productName: 'ATO汽车',
      bgcUrl:
        'https://res.vmallres.com/cmscdn/CN/2023-08/d2f51644d1c34b42a27d046e0e6b591c.png.webp',
    },
    {
      productId: uuidv4(),
      productName: '智慧办公',
      bgcUrl:
        'https://res.vmallres.com/cmscdn/CN/2023-08/53c32ea2aff7494c9252f470a6e54f20.png.webp',
    },
    {
      productId: uuidv4(),
      productName: '智慧家居',
      bgcUrl:
        'https://res.vmallres.com/cmscdn/CN/2023-08/459bb5bc07e841e0b31216f42aee0f99.png.webp',
    },
    {
      productId: uuidv4(),
      productName: 'ATO汽车',
      bgcUrl:
        'https://res.vmallres.com/cmscdn/CN/2023-08/d2f51644d1c34b42a27d046e0e6b591c.png.webp',
    },
  ],
})
Mock.mock('/api/getRecommendData', 'get', {
  status: 200,
  data: [
    {
      goodId: uuidv4(),
      goodImgUrl:
        'https://res.vmallres.com/cmscdn/CN/2023-08/aa34be36c90a4fdc935806f5d473acbd.png',
      goodName: 'HUAWEI P60',
      desc: ['洛可可白 每一支都独一无二', 'XMAGE影像'],
      discount: ['预订优惠100元 '],
      newPrice: 4988,
    },
    {
      goodId: uuidv4(),
      goodImgUrl:
        'https://res.vmallres.com/cmscdn/CN/2023-08/be560051397c43bba258959736f64e56.png',
      goodName: 'HUAWEI MatePad Air',
      desc: ['144Hz高刷全面屏'],
      discount: ['秒杀省200', '3期0分期利息', '赠积分'],
      newPrice: 2699,
      oldPrice: 2899,
    },
    {
      goodId: uuidv4(),
      goodImgUrl:
        'https://res.vmallres.com/cmscdn/CN/2023-08/aa34be36c90a4fdc935806f5d473acbd.png',
      goodName: 'HUAWEI P60',
      desc: ['洛可可白 每一支都独一无二', 'XMAGE影像'],
      discount: ['预订优惠100元 '],
      newPrice: 4988,
    },
    {
      goodId: uuidv4(),
      goodImgUrl:
        'https://res.vmallres.com/cmscdn/CN/2023-08/be560051397c43bba258959736f64e56.png',
      goodName: 'HUAWEI MatePad Air',
      desc: ['144Hz高刷全面屏'],
      discount: ['秒杀省200', '3期0分期利息', '赠积分'],
      newPrice: 2699,
      oldPrice: 2899,
    },
  ],
})
