<template>
  <div class="base-sale">
    <p class="base-sale__text">
      -40%
    </p>
  </div>
</template>

<style lang="scss" scoped>
  .base-sale {
    background-image: url('@/static/imgs/saleBg.svg');

    &__text {
      font-style: normal;
      font-weight: 600;
      font-size: 12px;
      line-height: 140%;
      color: $white-color;
      padding: 2px 3px 2px 5px;
      white-space: nowrap;

      @media (max-width: 517px) {
        display: none;
      }
    }
  }
</style>