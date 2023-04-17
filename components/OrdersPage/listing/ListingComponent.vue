<template>
  <div class="listing">
    <app-breadcrumb class="listing__breadcrumb" :title="'Узнать статус заказа'" />
    <h3 class="listing__title">
      Все заказы
    </h3>
    <orders-filter :activeTab="ordersStore.activeTab"/>
    <section class="listing__list" ref="scrollComponent">
      <orders-card v-for="(item) in sortProducts" :key="item.id" :product="item"/>
    </section>
  </div>
</template>
<script>
import { useOrdersStore } from '@/stores/OrdersStore'
import OrdersCard from '@/components/OrdersPage/OrdersCard/OrdersCard.vue'
import OrdersFilter from '@/components/OrdersPage/OrdersFilter'
import AppBreadcrumb from '@/components/AppBreadcrumb.vue';
import { computed } from 'vue';
import { pagination } from '@/use/pagination'
import { ref, onMounted, onUnmounted } from 'vue'
import { throttle } from "lodash";
  export default {
    components: {
      OrdersFilter,
      OrdersCard,
      AppBreadcrumb,
      onMounted
    },
    setup() {
    const ordersStore = useOrdersStore()
    const products = computed(()=> {
        return ordersStore.ORDER_PRODUCTS
    })
    const sortProducts = computed(()=> {
        if ( ordersStore.activeTab == 1) {
          return list.value.filter(el => el.paid == true)
        } 
        else if (ordersStore.activeTab == 2 ) {
          return list.value.filter(el => el.paid == false)
        } 
        else {
          return list.value
        }
    })
    const { list, loadItems, canLoadMore } = pagination(products)
    const scrollComponent = ref(null)

    const handleScroll = () => {
      const element = scrollComponent.value
      if ( element.getBoundingClientRect().bottom < window.innerHeight) {
        loadItems(true)
      }
    } 

    const throttledScrollHandler = throttle(handleScroll, 800);
    onMounted(() => {
      loadItems(true)
      window.addEventListener("scroll", throttledScrollHandler)
    })
    onUnmounted(() => {
      window.removeEventListener("scroll", throttledScrollHandler)
    })
    return {
      ordersStore,
      list,
      loadItems,
      canLoadMore,
      sortProducts,
      scrollComponent
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