<template>
  <div>
    <!-- <desk-header/> -->
    <!-- <mobile-header/> -->
    <app-header/>
    <slot />
    <app-footer/>
  </div>
</template>

<script>
import MobileHeader from '~/components/Header/MobileHeader/MobileHeader.vue';
import DeskHeader from '~/components/Header/DeskHeder/DeskHeader.vue';
import AppFooter from '@/components/Footer/AppFooter.vue'
import AppHeader from '~/components/Header/AppHeader.vue';
export default {
  components: {
    AppFooter,
    AppHeader,
    DeskHeader,
    MobileHeader
  },
}
</script>