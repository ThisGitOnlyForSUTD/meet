<template>
  <div class="bottom-menu">
    <div class="bottom-menu__inner container">
      <ul class="bottom-menu__list">
        <il class="bottom-menu__item">
          <nuxt-link to="/" class="bottom-menu__link">
            Обувь
          </nuxt-link>
        </il>
        <il class="bottom-menu__item">
          <nuxt-link to="/" class="bottom-menu__link">
            Одежда
          </nuxt-link>
        </il>
        <il class="bottom-menu__item">
          <nuxt-link to="/" class="bottom-menu__link">
            Аксессуары
          </nuxt-link>
        </il>
        <il class="bottom-menu__item">
          <nuxt-link to="/" class="bottom-menu__link">
            Распродажа
          </nuxt-link>
        </il>
      </ul>
      <ul class="bottom-menu__list">
        <il class="bottom-menu__item">
          <nuxt-link to="/" class="bottom-menu__link">
            <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1493 2.33926C9.98698 0.919896 8.38477 0 6.375 0C2.69063 0 0 2.93342 0 6.51178C0 10.5102 3.40391 13.2542 8.5434 17.3972C9.48627 18.1573 10.4876 18.9644 11.537 19.8351C11.8021 20.055 12.1979 20.055 12.463 19.835C13.5132 18.9638 14.5149 18.1562 15.4581 17.3959C20.6003 13.2506 24 10.5099 24 6.51178C24 2.934 21.3098 0 17.625 0C15.6152 0 14.013 0.919955 12.8507 2.33926C12.5343 2.72556 12.2505 3.14886 12 3.60067C11.7495 3.14885 11.4657 2.72556 11.1493 2.33926ZM12 18.4567C12.9279 17.6923 13.8028 16.9871 14.6232 16.3258C16.6857 14.6634 18.4042 13.2783 19.7566 11.9262C21.6859 9.99751 22.6 8.38541 22.6 6.51178C22.6 3.54645 20.4152 1.32741 17.625 1.32741C15.7441 1.32741 14.2506 2.39445 13.2392 4.21838L12 6.45312L10.7608 4.21839C9.74937 2.39433 8.2558 1.32741 6.375 1.32741C3.58509 1.32741 1.4 3.54601 1.4 6.51178C1.4 8.38543 2.3154 9.99878 4.24566 11.9283C5.59854 13.2807 7.31696 14.6657 9.37826 16.3271C10.1984 16.9881 11.0727 17.6929 12 18.4567Z" fill="#1A1D1F"/>
            </svg>              
          </nuxt-link>
        </il>
        <il class="bottom-menu__item">
          <nuxt-link to="/" class="bottom-menu__link">
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M9.88722 1.50178C5.25607 1.50178 1.50178 5.25607 1.50178 9.88722C1.50178 14.5184 5.25607 18.2727 9.88722 18.2727C14.5184 18.2727 18.2727 14.5184 18.2727 9.88722C18.2727 5.25607 14.5184 1.50178 9.88722 1.50178ZM0 9.88722C0 4.42666 4.42666 0 9.88722 0C15.3478 0 19.7744 4.42666 19.7744 9.88722C19.7744 15.3478 15.3478 19.7744 9.88722 19.7744C4.42666 19.7744 0 15.3478 0 9.88722Z" fill="#1A1D1F"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.7348 16.7348C16.8823 16.5874 17.1213 16.5874 17.2687 16.7348L20.4469 19.913C20.5944 20.0605 20.5944 20.2995 20.4469 20.4469C20.2995 20.5944 20.0605 20.5944 19.913 20.4469L16.7348 17.2687C16.5874 17.1213 16.5874 16.8823 16.7348 16.7348Z" fill="#1A1D1F"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M16.422 16.4221C16.7422 16.1018 17.2614 16.1018 17.5816 16.4221L20.7598 19.6002C21.0801 19.9205 21.0801 20.4397 20.7598 20.7599C20.4396 21.0802 19.9204 21.0802 19.6001 20.7599L16.422 17.5817C16.1017 17.2615 16.1017 16.7423 16.422 16.4221Z" fill="#1A1D1F"/>
            </svg>                          
          </nuxt-link>
        </il>
        <il class="bottom-menu__item">
          <nuxt-link to="/profile/orders" class="bottom-menu__link">
            Личный кабинет 
             
          </nuxt-link>
        </il>
        <il class="bottom-menu__item">
          <app-cart></app-cart>
        </il>
      </ul>
    </div>
  </div>
</template>

<script>
import AppCart from '@/components/Header/AppCart'
export default {
  components: {
    AppCart
  }
}
</script>

<style lang="scss" scoped>
.bottom-menu {
  background: #F8F8F8;
  padding: 23px 0;
  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__list {
    display: flex;
    gap: 0 32px;

    &:last-child {
      gap: 0 18px;
    }
  }

  &__link {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: $black-color;
    display: flex;
    align-items: center;

    &:hover {
      color: $grey-color;
      
      path {
        fill: $grey-color;
      }
    }
  }
}
</style>