<template>
  <div class="geo">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.61539 15L15 1L1 6.38462L7.46154 8.53846L9.61539 15Z" stroke="#1A1D1F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>      
    <p class="geo__city">
      {{ city }}
    </p>
    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L4.78462 4.90382C4.81224 4.93418 4.8456 4.95838 4.88265 4.97492C4.91969 4.99147 4.95963 5 5 5C5.04037 5 5.08031 4.99147 5.11735 4.97492C5.1544 4.95838 5.18776 4.93418 5.21538 4.90382L9 1" stroke="#1A1D1F" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: String,
      default: 'Москва и область',
      required: false
    }
  }
};
</script>

<style lang="scss" scoped>
  .geo {
    display: flex;
    gap: 0 7px;
    align-items: center;
    cursor: pointer;
  }
</style>