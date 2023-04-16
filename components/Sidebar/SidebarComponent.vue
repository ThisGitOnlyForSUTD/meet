<template>
  <div class="sidebar">
    <ul class="sidebar__aside">
      <li class="sidebar__banner" v-for="(item, index) in bannersStore.banners" :key="item.id">
        <aside-size :banner="item"></aside-size>
      </li>
    </ul>
  </div>
</template>

<script>
import AsideSize from '@/components/Sidebar/AsideSize'
import { useBannersStore } from '@/stores/BannersStore'
  export default {
    setup() {
    const bannersStore = useBannersStore()

    return {
      bannersStore,

    }
  },

  components: {
    AsideSize
  },
  }
</script>

<style lang="scss" scoped>
.sidebar {

  &__aside {
    display: flex;
    flex-direction: column;
    gap: 40px 0;
    flex-wrap: nowrap;

    @media (max-width: 1129px) {
      display: none;
    }
  }
}
</style>