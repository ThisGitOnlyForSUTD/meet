<template>
    <ul class="orders-nav">
      <li class="orders-nav__item" v-for="(item, index) in tabList" :key="index">
        <nuxt-link :to="item.link" class="orders-nav__link">
          {{ item.text }}
        </nuxt-link>
      </li>
    </ul>
</template>

<script>
export default {
  name: 'OrdersNav',
  setup () {
    return {
      tabList: [
        {link: '/profile/user', text: 'Мой профиль'},
        {link: '/profile/orders', text: 'Заказы'},
        {link: '/profile/favortite', text: 'Избранное'}
      ]
    }
  }
};
</script>

<style lang="scss" scoped>
  .router-link-active {
    background: #000 !important;
    color: $white-color !important;
  }
  .orders-nav {
    display: flex;
    justify-content: start;
    gap: 0 8px;
    margin: 20px 0;

    &__link {
      background: #F8F8F8;
      border-radius: 32px;
      padding: 13px 24px;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: $black-color;

      @media (max-width: 450px) {
        padding: 9.5px 16px;
        font-size: 80%;
      }
    }
  }
</style>