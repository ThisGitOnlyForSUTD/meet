import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useOrdersStore = defineStore('ordersStore', () => {
  const products = ref([
    {
      id: '73868652-0005',
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
      id: '73868652-0004',
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
      id: '73868652-0005',
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
      id: '73868652-0004',
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
  ])
  const activeTab = ref(null)

  const ORDER_PRODUCTS = computed(() => {
    if ( activeTab.value == 1) {
      return products.value.filter(el => el.paid == true)
    } 
    else if (activeTab.value == 2 ) {
      return products.value.filter(el => el.paid == false)
    } 
    else {
      return products.value
    }
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