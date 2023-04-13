<template>
  <div class="filter">
    <h3 class="filter__title">
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.0834 14.6666L7.33337 17.4166L4.58337 14.6666" stroke="#1A1D1F" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M11.9166 7.33337L14.6666 4.58337L17.4166 7.33337" stroke="#1A1D1F" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M14.6666 17.4167L14.6666 4.58337" stroke="#1A1D1F" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M7.33337 4.58337V17.4167" stroke="#1A1D1F" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      Сортировать:      
    </h3>
    <ul class="filter__list">
      <li class="filter__item" v-for="(item, index) in filterTabs" :key="index">
        <button class="filter__btn"
        :class="{active: ordersStore.activeTab === index}" 
        @click="setTub(index)">
          {{ item }}
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
import { useOrdersStore } from '@/stores/OrdersStore'

export default {
  setup () {
    const ordersStore = useOrdersStore()
    const setTub = (index) => {
      ordersStore.SET_ACTIVE_TAB(index)
    }
    return {
      ordersStore,
      setTub,
      filterTabs: [
        'Все заказы',
        'Оплаченные',
        'Не оплаченные'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

  .active {
    text-decoration: underline;
  }
  .filter {
    display: flex;
    align-items: center;

    &__title {
      display: flex;
      align-items: center;
      gap: 0 4px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: $black-color;
      margin-right: 16px;

      @media (max-width: 495px) {
        display: none;
      }
    }

    &__list {
      display: flex;
      justify-content: flex-start;
      gap: 0 12px;
    }

    &__btn {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: $grey-color;
      @media (max-width: 346px) {
        font-size: 80%;
      }
    }
  }
</style>