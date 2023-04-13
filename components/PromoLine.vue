<template>
  <div class="promo">
    <div 
    v-if="showPromo == true" 
    class="promo__inner container"
    >
      <nuxt-link class="promo__link" to="/">
        <p class="promo__text">
          Скидка 20% на все модели Yeezy по промокоду: PRIME20
        </p>
      </nuxt-link>
      <button class="promo__btn" @click="showPromo = !showPromo">
      <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4243 0.57576C10.6586 0.810075 10.6586 1.18997 10.4243 1.42429L1.42426 10.4243C1.18994 10.6586 0.810044 10.6586 0.57573 10.4243C0.341415 10.19 0.341415 9.81008 0.57573 9.57576L9.57573 0.57576C9.81005 0.341446 10.1899 0.341446 10.4243 0.57576Z" fill="white"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.57573 0.57576C0.810044 0.341446 1.18994 0.341446 1.42426 0.57576L10.4243 9.57576C10.6586 9.81008 10.6586 10.19 10.4243 10.4243C10.1899 10.6586 9.81005 10.6586 9.57573 10.4243L0.57573 1.42429C0.341415 1.18997 0.341415 0.810075 0.57573 0.57576Z" fill="white"/>
      </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'promoLine',
  setup () {
    const showPromo = ref(true)
    return {
      showPromo
    }
  }
};
</script>

<style lang="scss" scoped>
  .promo {
    background-color: $blue-color;
    background-image: url(@/static/imgs/promoBg.svg);
    background-repeat: no-repeat;
    width: 100%;
    padding: 0 15px;

    &__inner {
      display: flex;
      justify-content: center;
      text-align: center;
      padding: 14px 0;

      @media (max-width: 1161px) {
        padding: 8px 62px;
      }
    }
    &__link {
      width: 100%;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: $white-color;
    }
    &__btn {
      @media (max-width: 1161px) {
        display: none;
      }
    }
  }
</style>