import {computed, ref, watch} from "vue";

export function pagination(arr, step = 2) {
  const getEndPosition = (start) => {
    return arr.value.length >= start + step
      ? start + step
      : arr.value.length
  }
  const list = ref([])
  const canLoadMore = computed(() => arr.value.length > list.value.length)

  const getChunk = (start) => {
    return arr.value.slice(start , getEndPosition(start))
  }

  const loadItems = () => {
    console.log('add items')
    const start = list.value.length
    list.value = list.value.concat(getChunk(start))
  }

  watch(arr,() => {
    loadItems(true)
  })

  return {
    list,
    canLoadMore,
    loadItems,
  }
}
