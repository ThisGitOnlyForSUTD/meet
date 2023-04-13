<template>
  <div class="header">
    <promo-line/>
    <mobile-header class="header__mobile"/>
    <desk-header class="header__desk"/>
  </div>
</template>

<script>
import MobileHeader from './MobileHeader/MobileHeader.vue';
import PromoLine from '../PromoLine.vue';
import DeskHeader from './DeskHeder/DeskHeader.vue'
export default {
  name: 'MeetAppHeader',
  components: {
    DeskHeader,
    PromoLine,
    MobileHeader
  },
};
</script>

<style lang="scss" scoped>
  .header{
    @media (max-width: 888px) {
      &__desk {
        display: none;
      }
    }
    @media (min-width: 888px) {
      &__mobile {
        display: none;
      }
    }
  }
</style>