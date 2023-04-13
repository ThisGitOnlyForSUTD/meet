<template>
  <div class="product">
    <div class="product__img">
      <div class="product__icons">
        <hot-ico v-if="product.hot"/>
        <sale-ico v-if="product.sale"/>
      </div>
      <img 
      :src="`/_nuxt/static/products/${product.img}.jpg`" 
      class="product__img" alt=""
      >
    </div>
    <div class="product__description">
      <h5 class="product__title">
        {{ product.title }}
      </h5>
      <p class="product__about">
        {{ product.about }}
      </p>
      <span class="product__size">
        {{ product.size }}
      </span>
      <div class="product__prices">
        <span class="product__price">
          {{ product.price.price }} ₽
        </span>
        <span class="product__oldPrice" v-if="product.price.OldPrice">
          {{ product.price.OldPrice }} ₽
        </span>
        <base-sale class="product__sale" v-if="product.sale" />
      </div>
      <div class="product__lables">
        <base-delivery/>
      </div>
    </div>
  </div>
</template>

<script>
import BaseDelivery from '@/components/ui/BaseDelivery'
import BaseSale from '@/components/ui/BaseSale'
import hotIco from '@/components/ui/icons/hotIco.vue';
import saleIco from '@/components/ui/icons/saleIco'
export default {
  name: 'OrdersProduct',
  components: {
    BaseDelivery,
    BaseSale,
    hotIco,
    saleIco
  },
  props: {
    product: {
      type: Object,
      default: (()=>{})
    }
  }
};
</script>

<style lang="scss" scoped>
  .product {
    background: $white-color;
    display: flex;
    padding: 20px 76px 20px 20px;
    border: 1px solid #EDEDED;
    border-radius: 4px;
    gap: 0 16px;


    @media (max-width: 517px) {
      padding: 12px 20px 12px 12px;
      gap: 0 12px;
    }

    &__img {
      position: relative;
      display: block;

      @media (max-width: 517px) {
        max-width: 100px;
      }
    }

    &__icons {
      z-index: 1;
      top: 0;
      left: 0;
      position: absolute;
      display: flex;
      gap: 0 5.52px;
    }

    &__description {
      display: flex;
      flex-direction: column;
    }

    &__title {
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 150%;
      color: $black-color;

      @media (max-width: 517px) {
        font-size: 14px;
      }
    }

    &__about {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: $black-color;

      @media (max-width: 517px) {
        font-size: 12px;
      }
    }

    &__size {
      margin: 4px 0 8px 0;
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 150%;
      color: $grey-color;

      @media (max-width: 517px) {
        font-size: 12px;
      }
    }

    &__prices {
      display: flex;
      gap: 0 6px;
      align-items: center;
      margin-bottom: 8px;
    }

    &__price {
      font-style: normal;
      font-weight: 700;
      font-size: 18px;
      line-height: 150%;
      color: $black-color;
    }

    &__oldPrice {
      font-style: normal;
      font-weight: 400;
      font-size: 16px;
      line-height: 150%;
      color: $grey-color;
      text-decoration: line-through;

      @media (max-width: 517px) {
        display: none;
      }
    }

    &__lables {
      display: flex;
      gap: 0 4px;
    }
  }
</style>