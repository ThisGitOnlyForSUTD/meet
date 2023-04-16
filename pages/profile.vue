<template>
  <div class="profile container">
    <div class="profile__wrapper">
      <orders-nav/>
      <nuxt-page/>
    </div>
    <sidebar-component/>
  </div>
</template>

<script>
import SidebarComponent from '@/components/Sidebar/SidebarComponent.vue'
import ListingComponent from '@/components/OrdersPage/listing/ListingComponent.vue'
import OrdersNav from '@/components/OrdersPage/OrdersNav.vue'

export default {
  name: 'profile',
  components: {
    OrdersNav,
    ListingComponent,
    SidebarComponent
  },
};
</script>

<style lang="scss" scoped>
.profile {
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