<template>
  <div class="breadcrumb">
    <nuxt-link :to="main.link" class="breadcrumb__from">
    {{ main.text }}
    </nuxt-link>
    <svg width="5" height="7" viewBox="0 0 5 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 6.5L3.92787 3.66154C3.95064 3.64082 3.96879 3.6158 3.98119 3.58801C3.9936 3.56023 4 3.53028 4 3.5C4 3.46972 3.9936 3.43977 3.98119 3.41199C3.96879 3.3842 3.95064 3.35918 3.92787 3.33846L1 0.5" stroke="#9A9FA5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>    
    <p class="breadcrumb__to">
    {{ title }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'AppBreadcrumb',
  props: {
    main: {
      type: Object,
      default: {
        text: 'Главная',
        link: '/'
      },
      required: false
    },
    title: {
      type: String,
      default: '',
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.breadcrumb {
  display: flex;
  gap: 0 7px;
  align-items: center;

  &__from {
    color: $grey-color;
    font-size: 14px
  }
}
</style>