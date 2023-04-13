import { defineStore } from 'pinia'
import { ref, watch } from 'vue'

export const useBannersStore = defineStore('bannersStore', () => {
  const { data } = useFetch(() => `/api/banners`)
  const banners = ref(data)
  return {
    banners
  }
})