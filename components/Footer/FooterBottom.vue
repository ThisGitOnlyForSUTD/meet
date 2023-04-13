<template>
  <div class="footer-bottom container">
    <p class="footer-bottom__text">
      ООО “Статус”, 2020. Все права защищены
    </p>
    <ul class="footer-bottom__cards">
      <li class="footer-bottom__card">
        <img src='@/static/cards/visa.png' class="footer-bottom__img">
      </li>
      <li class="footer-bottom__card">
        <img src='@/static/cards/maestro.png' class="footer-bottom__img">
      </li>
      <li class="footer-bottom__card">
        <img src='@/static/cards/mastercard.png' class="footer-bottom__img">
      </li>
      <li class="footer-bottom__card">
        <img src='@/static/cards/apple_pay.png' class="footer-bottom__img">
      </li>
      <li class="footer-bottom__card">
        <img src='@/static/cards/g_pay.png' class="footer-bottom__img">
      </li>
    </ul>
    <ul class="footer-bottom__list">
      <li class="footer-bottom__item">
        <vk-ico :link="'https://vk.com/'"/>
      </li>
      <li class="footer-bottom__item">
        <instagram-ico :link="'https://instagram.com/'"/>
      </li>
      <li class="footer-bottom__item">
        <telegram-ico :link="'https://telegram.com/'"/>
      </li>
    </ul>
  </div>
</template>

<script>
import instagramIco from '@/components/ui/icons/instagramIco.vue';
import telegramIco from '@/components/ui/icons/telegramIco.vue';
import vkIco from '@/components/ui/icons/vkIco.vue';

export default {
  setup () {
  return {
  cards: [
    'visa', 'maestro', 'mastercard', 'apple_pay', 'g_pay'
  ]
}
},
components: {
  instagramIco,
  telegramIco,
  vkIco
}
}
</script>

<style lang="scss" scoped>
  .footer-bottom {
    width: 100%;
    padding: 20px 0 26px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1161px) {
      flex-direction: column;
      justify-content: center;
      gap: 32px 0;
      padding: 32px 47px;
    }

    &__text {
      @media (max-width: 455px) {
        font-size: 14px;
      }
    }

    &__cards {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0 12px
    }

    &__list {
      display: flex;
      gap: 0 16px;
    }
  }
</style>