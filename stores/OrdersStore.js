import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useOrdersStore = defineStore('ordersStore', () => {
  const products = ref([
    {
      id: '73868652-0001',
      title: 'New Balance',
      about: '2002 r protection pack sea salt',
      size: '42.5 EU',
      img: 'airMax',
      price: {
        OldPrice:  '38 500', price: '26 144'
      },
      sale: true,
      hot: true,
      paid: true,
      status: [
        {
          title: 'Заказ создан', 
          text: 'Заказ оплачен и ожидает обработки',
          status: true
        },
        {
          title: 'Принят в работу', 
          text: 'На данном этапе производится комплектация и упаковка товаров',
          status: true
        },
        {
          title: 'Передан в доставку', 
          text: 'Транспортировка товаров до пункта выдачи',
          status: false
        },
        {
          title: 'Доставлен', 
          text: '',
          status: false
        }
      ],
    },
    {
      id: '73868652-0002',
      title: 'Nike jacket',
      about: '2002 r protection pack sea salt',
      img: 'jacket',
      size: 'M',
      price: {
        OldPrice:  null, price: '13 566'
      },
      sale: false,
      hot: false,
      paid: false,
      status: [
        {
          title: 'Заказ создан', 
          text: 'Заказ оплачен и ожидает обработки',
          status: false
        },
        {
          title: 'Принят в работу', 
          text: 'На данном этапе производится комплектация и упаковка товаров',
          status: false
        },
        {
          title: 'Передан в доставку', 
          text: 'Транспортировка товаров до пункта выдачи',
          status: false
        },
        {
          title: 'Доставлен', 
          text: '',
          status: false
        }
      ],
    },
    {
      id: '73868652-0003',
      title: 'Jordan',
      about: '2002 r protection pack sea salt',
      size: '42.5 EU',
      img: 'jordan',
      price: {
        OldPrice:  '28 500', price: '20 144'
      },
      sale: true,
      hot: false,
      paid: true,
      status: [
        {
          title: 'Заказ создан', 
          text: 'Заказ оплачен и ожидает обработки',
          status: true
        },
        {
          title: 'Принят в работу', 
          text: 'На данном этапе производится комплектация и упаковка товаров',
          status: false
        },
        {
          title: 'Передан в доставку', 
          text: 'Транспортировка товаров до пункта выдачи',
          status: false
        },
        {
          title: 'Доставлен', 
          text: '',
          status: false
        }
      ],
    },
    {
      id: '73868652-0004',
      title: 'Nike dunk',
      about: 'Nike dunk mummy',
      img: 'nikeShose',
      size: '42 EU',
      price: {
        OldPrice:  '35 555', price: '13 566'
      },
      sale: true,
      hot: true,
      paid: false,
      status: [
        {
          title: 'Заказ создан', 
          text: 'Заказ оплачен и ожидает обработки',
          status: false
        },
        {
          title: 'Принят в работу', 
          text: 'На данном этапе производится комплектация и упаковка товаров',
          status: false
        },
        {
          title: 'Передан в доставку', 
          text: 'Транспортировка товаров до пункта выдачи',
          status: false
        },
        {
          title: 'Доставлен', 
          text: '',
          status: false
        }
      ],
    },
    {
      id: '73868652-0004',
      title: 'vans',
      about: 'Vans old school',
      img: 'vans',
      size: '42 EU',
      price: {
        OldPrice:  '10 555', price: '6 566'
      },
      sale: true,
      hot: false,
      paid: true,
      status: [
        {
          title: 'Заказ создан', 
          text: 'Заказ оплачен и ожидает обработки',
          status: true
        },
        {
          title: 'Принят в работу', 
          text: 'На данном этапе производится комплектация и упаковка товаров',
          status: true
        },
        {
          title: 'Передан в доставку', 
          text: 'Транспортировка товаров до пункта выдачи',
          status: true
        },
        {
          title: 'Доставлен', 
          text: '',
          status: false
        }
      ],
    },
  ])
  const activeTab = ref(null)

  const ORDER_PRODUCTS = computed(() => {
      return products.value
  })

  const SET_ACTIVE_TAB = (id) => {
   activeTab.value = id
  }
  return {
    products,
    activeTab,
    SET_ACTIVE_TAB,
    ORDER_PRODUCTS
  }
})