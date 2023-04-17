<template>
  <div class="base-lable" :style="!paid ? 'background: #EA7373;' : ''">
    <p class="base-lable__text" v-if="paid">
      Заказ оплачен
    </p>
    <p class="base-lable__text" v-else>
      Заказ не оплачен
    </p>
  </div>
</template>

<script>
export default {
  name: 'BaseLable',
  props: {
    paid: {
      type: Boolean,
      default: true,
      required: false
    }
  }

};
</script>

<style lang="scss" scoped>
  .base-lable {
    background: #83BF6E;
    border-radius: 4px;
    white-space: nowrap;
    width: min-content;

    &__text {
      padding: 5.5px 8px;
      font-style: normal;
      font-weight: 600;
      font-size: 14px;
      line-height: 120%;
      color: $white-color;
    }
  }
</style>