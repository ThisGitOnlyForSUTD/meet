<template>
  <nav class="header-nav container">
    <button class="header-nav__btn">
      <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.25 2.34037C0.25 1.25252 1.06936 0.25 2.22222 0.25H21.7778C22.9306 0.25 23.75 1.25252 23.75 2.34037V15.7441C23.75 16.8319 22.9306 17.8344 21.7778 17.8344H7.53984C7.4519 17.8344 7.35666 17.8667 7.27095 17.9419L3.48036 21.2675C2.83142 21.8369 1.99604 21.8728 1.34306 21.5287C0.698862 21.1891 0.25 20.4955 0.25 19.6571V2.34037ZM2.22222 1.75C2.02505 1.75 1.75 1.94768 1.75 2.34037V19.6571C1.75 19.9426 1.89387 20.1234 2.04248 20.2017C2.1823 20.2754 2.33979 20.2727 2.49112 20.14L6.2817 16.8144C6.62943 16.5093 7.07272 16.3344 7.53984 16.3344H21.7778C21.9749 16.3344 22.25 16.1368 22.25 15.7441V2.34037C22.25 1.94768 21.9749 1.75 21.7778 1.75H2.22222Z" fill="#1A1D1F"/>
        <path d="M16.8889 9.23804H16.8909V9.24004H16.8889V9.23804Z" stroke="#1A1D1F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2 9.23799C11.2 8.79616 11.5582 8.43799 12 8.43799H12.002C12.4438 8.43799 12.802 8.79616 12.802 9.23799V9.23999C12.802 9.68182 12.4438 10.04 12.002 10.04H12C11.5582 10.04 11.2 9.68182 11.2 9.23999V9.23799Z" fill="#1A1D1F"/>
        <path d="M7.11108 9.23804H7.11308V9.24004H7.11108V9.23804Z" stroke="#1A1D1F" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <div class="header-nav__logo">
      <the-logo :width="172"/>
    </div>
    <app-search/>
  </nav>
</template>

<script>
import AppSearch from '@/components/Header/AppSearch'
import TheLogo from '../TheLogo.vue';
  export default {
    components: {
      TheLogo,
      AppSearch,
    }
  }
</script>

<style lang="scss" scoped>
.header-nav {
  padding: 7px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #EDEDED;
  margin-bottom: 20px;

  &__logo {
    max-width: 172px;
  }
}
</style>