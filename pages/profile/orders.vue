<template>
  <div class="orders container">
    <div class="orders__wrapper">
      <listing-component/>
    </div>
  </div>
</template>

<script>
import ListingComponent from '@/components/OrdersPage/listing/ListingComponent.vue'


export default {
  name: 'orders',
  components: {
    ListingComponent
  },
};
</script>

<style lang="scss" scoped>
  .orders {
    display: flex;
    justify-content: space-between;
    gap: 0 40px;
    @media (max-width:1130px) {
      gap: 0;
    }

    &__wrapper {
      width: 100%;
    }
  }
</style>