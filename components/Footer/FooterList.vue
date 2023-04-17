<template>
  <div class="footer-list">
    <h4 class="footer-list__title">
      {{ list.title }}
    </h4>
      <ul class="footer-list__list">
        <li class="footer-list__item" v-for="item in list.links" :key="item">
          <nuxt-link :to="item.link" class="footer-list__link">
            {{ item.name }}
          </nuxt-link>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Object,
      default: (()=> {}),
      required: true
    }
  } 
}
</script>


<style lang="scss" scoped>
  .footer-list {
    display: flex;
    flex-direction: column;

    &__title {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 150%;
      color: #1A1D1F;
      margin-bottom: 24px;
    }
    
    &__list {
      display: flex;
      flex-direction: column;
      gap: 16px 0;
    }

    &__link {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: $black-color;
        @media (max-width: 375px) {
          font-size: 14px;
        }
    }
  }
</style>