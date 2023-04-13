<template>
  <div class="listing">
    <app-breadcrumb class="listing__breadcrumb" :title="'Узнать статус заказа'" />
    <orders-nav/>
    <h3 class="listing__title" @click="filterProducts">
      Все заказы
    </h3>
    <orders-filter :activeTab="ordersStore.activeTab"/>
    <section class="listing__list">
      <orders-card v-for="(item, index) in ordersStore.ORDER_PRODUCTS" :key="item.id" :product="item"/>
    </section>
  </div>
</template>

<script>
import { useOrdersStore } from '@/stores/OrdersStore'
import OrdersCard from '@/components/OrdersPage/OrdersCard/OrdersCard.vue'
import OrdersNav from '@/components/OrdersPage/OrdersNav'
import OrdersFilter from '@/components/OrdersPage/OrdersFilter'
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';
import { ref } from 'vue'
  export default {
    components: {
      OrdersNav,
      OrdersFilter,
      OrdersCard,
      AppBreadcrumb
    },
    setup() {
    const ordersStore = useOrdersStore()
    return {
      ordersStore,
    }
  }

  }
</script>

<style lang="scss" scoped>
.listing {
  &__breadcrumb {
    @media (min-width: 888px) {
        display: none;
    }
  }

  &__title {
    margin: 40px 0 24px 0;
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 34px;
    color: $black-color;

    @media (max-width: 400px) {
      font-size: 22px;
      line-height: 32px;
    }
  }

  &__list {
    max-width: 1208px;
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 24px 0;
    padding-bottom: 40px;
    border-bottom: 1px solid #EDEDED;
  }
}
</style>