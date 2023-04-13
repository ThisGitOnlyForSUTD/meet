<template>
  <div class="middle-menu container">
    <ul class="middle-menu__list">
      <li class="middle-menu__item">
        <nuxt-link to="/" class="middle-menu__link">Мужчинам</nuxt-link>
      </li>
      <li class="middle-menu__item">
        <nuxt-link to="/" class="middle-menu__link">Женщинам</nuxt-link>

      </li>
      <li class="middle-menu__item">
        <nuxt-link to="/" class="middle-menu__link">Детям</nuxt-link>
      </li>
    </ul>
    <the-logo class="middle-menu__logo"/>
    <ul class="middle-menu__about-list">
      <li class="middle-menu__about-item">
        <nuxt-link to="/" class="middle-menu__about-link">Наш блог</nuxt-link>
      </li>
      <li class="middle-menu__about-item">
        <nuxt-link to="/" class="middle-menu__about-link">О Meet</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import TheLogo from '@/components/header/TheLogo'

export default {
  components: {
    TheLogo
  }
}
</script>

<style lang="scss" scoped>
  .middle-menu {
    padding: 26px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &__logo {
      margin-right: 70px;
    }

    &__list {
      display: flex;
      gap: 0 28px;
    }

    &__link {
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 150%;
      color: $black-color;
    }

    &__item {
      height: 30px;
      &:hover {
        border-bottom: 2px solid #668BFB;
      }
    }

    &__about-list {
      display: flex;
      gap: 0 30px;
    }

    &__about-link {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: $black-color;

      &:hover {
        color: #9a9fa5;
      }
    }
  }
</style>