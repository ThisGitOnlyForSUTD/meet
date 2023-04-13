<template>
  <nuxt-link class="telegram" to="">
    <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.22447 9.1474L6.95152 12.9166C7.34203 12.9166 7.51116 12.7519 7.71398 12.5541L9.54483 10.8362L13.3385 13.5639C14.0343 13.9446 14.5245 13.7441 14.7122 12.9355L17.2024 1.47944L17.2031 1.47877C17.4238 0.468973 16.8311 0.0740996 16.1532 0.321823L1.51602 5.82372C0.517054 6.20442 0.53218 6.75116 1.3462 6.99889L5.08835 8.14166L13.7806 2.80176C14.1897 2.53581 14.5616 2.68296 14.2557 2.94891L7.22447 9.1474Z" fill="white"/>
    </svg>      
  </nuxt-link>
</template>

<script>
export default {
  name: 'MeetTelegramIco',
  props: {
    link: {
      type: String,
      default: '/',   
    },
  }
};
</script>

<style lang="scss" scoped>
  .telegram {
    display: block;
    padding: 13.25px 12.75px 13.25px 9.75px;
    background: $black-color;
    border-radius: 4px;
    width: 40px;
    height: 40px;
    transition: .3s ease-in-out;

    &:hover {
      background: #313537;
    }
  }
</style>