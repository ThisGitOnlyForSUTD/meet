<template>
<div class="profile">
  <span>
    Мой профиль
  <br>
  </span>
  <nuxt-link to="/profile/orders">
    вернуться обратно
  </nuxt-link>
</div>
</template>

<style lang="scss" scoped>
  .profile {
    display: block;
    color: $black-color;
    margin: 200px;
    font-size: 60px;

  }
</style>