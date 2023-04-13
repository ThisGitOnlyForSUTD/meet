<template>
  <div class="top-menu">
    <div class="top-menu__inner container">
      <app-geo/>
      <ul class="top-menu__list">
        <li class="top-menu__item">
          <nuxt-link to="/" class="top-menu__link">
            Доставка и оплата
          </nuxt-link>
        </li>
        <li class="top-menu__item">
          <nuxt-link to="/" class="top-menu__link">
            Обмен и возврат
          </nuxt-link>
        </li>
        <li class="top-menu__item">
          <nuxt-link to="/" class="top-menu__link">
            Контакты
          </nuxt-link>
        </li>
        <li class="top-menu__item">
          <nuxt-link to="/" class="top-menu__link">
            Документация
          </nuxt-link>
        </li>
      </ul>
      <a href="#" class="top-menu__contacts">
        8 (924) 240-90-74
      </a>
    </div>
  </div>
</template>

<script>
import AppGeo from '@/components/AppGeo.vue';

export default {
  components: {
    AppGeo
  }
}
</script>

<style lang="scss" scoped>
  .top-menu {
    width: 100%;
    border-bottom: 1px solid #EDEDED;
    padding: 15px 0;
    margin: 0 auto;

    &__inner {
      display: flex;
      justify-content: space-between;
    }

    &__list {
      display: flex;
      gap: 0 32px;
    }

    &__link {
      color: $black-color;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;

    }

    &__contacts {
      color: $black-color;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
    }
  }
</style>

