<template>
  <div class="card">
    <div class="card__header">
      <div class="card__block">
        <h4 class="card__title">
          Заказ № {{ product.id }}
        </h4>
        <p class="card__date">
          от 5 декабря 2022
        </p>
      </div>
      
      <div class="card__block">
        <p class="card__price">
          {{ product.price.price }} ₽
        </p>
        <base-lable style="display: block;" :paid="product.paid"/>
      </div>
    </div>
    <nuxt-link to="/" v-if="!product.paid" class="card__link">
      Оплатить заказ
    </nuxt-link>
    <div class="card__body">
      <div class="card__block">
        <h5 class="card__status">
          Сроки доставки будут доступны после оплаты
        </h5>
        <p class="card__text">
          Мы сообщим, когда покупки можно будет забирать. Фактический срок доставки может измениться.
        </p>
        <orders-delivery :list="product.status"/>
      </div>
      <orders-product :product="product"/>
    </div>
    <nuxt-link to="/" class="card__link">
      Подробнее о заказе
    </nuxt-link>
  </div>
</template>

<script>
import BaseLable from '@/components/ui/BaseLable.vue';

export default {
  name: 'OrdersCard',
  components: {
    BaseLable
  },

  setup () {
    const showModel = ref(false)
    return {
      showModel
    }
  },

  props: {
    product: {
      type: Object,
      default: (()=>{}),
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
  .card {
    width: 100%;
    max-width: 1308px;
    border: 1px solid #EDEDED;
    box-shadow: 0px 10px 40px rgba(26, 29, 31, 0.05);
    border-radius: 4px;
    background-image: url('@/static/imgs/cardBg.svg');
    background-repeat: no-repeat;
    background-position-x: right 60px;
    background-size: contain;
    padding: 32px 0;

    @media (max-width: 770px) {
    background-image: none;
    }

    @media (max-width: 771px) {
      padding: 20px;
      box-shadow: 0px 10px 40px rgba(26, 29, 31, 0.05);
    }

    &__header {
      display: flex;
      justify-content: space-between;

      @media (max-width: 770px) {
        flex-direction: column;
        justify-content: start;
      }
    }

    &__block {
      padding: 0 32px 0 32px;
      display: flex;
      flex-direction: column;
      @media (max-width: 770px) {
      padding: 0;
      margin-bottom: 16px;

      }
      @media (min-width: 770px) {
        &:nth-child(2) {
          align-items: end;
        }
      }
    }

    &__price,&__title {
      font-style: normal;
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      color: $black-color;
      margin-bottom: 8px;

    }

    &__date {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: $grey-color;
    }

    &__body {
      margin-top: 32px;
      border-top: 1px solid #EDEDED;
      padding: 32px 32px 0 0;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 770px) {
        flex-direction: column;
        justify-content: start;
        margin-bottom: 16px;
      }

      @media (max-width: 517px) {
        padding: 32px 0px 0 0;
      }
    }

    &__status {
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 150%;
      color: $black-color;
    }

    &__text {
      margin: 12px 0 24px 0;
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: $black-color;
      max-width: 400px;
      display: block;
    }

    &__link {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: $black-color;
      padding-bottom: 2px;
      border-bottom: 1px solid #EDEDED;
      white-space: nowrap;
      margin-left: 32px;

      @media (max-width: 517px) {
        margin-left: 0;
      }
    }
  }
</style>