import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useBannersStore = defineStore('bannersStore', () => {
  const banners = ref([
    {
      id: '1',
      title: 'Размер моей стопы',
      img: 'vansBg',
      size: 'EU: 42',
      link: '/some-path'
    },
    {
      id: '2',
      title: 'Размер одежды',
      img: 'adidasBg',
      size: 'EU: M',
      link: '/some-path'
    },
  ])
  return {
    banners
  }
})