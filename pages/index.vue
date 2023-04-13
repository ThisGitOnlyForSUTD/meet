<template>
  <div class="container main">
    <h1>
      Это пустая страница(. Чтобы перейти на страницу нажми на ссылку
    </h1>
    <nuxt-link to="/profile/orders" class="main__link">
      тык
    </nuxt-link>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
  .main {
    text-align: center;
    padding: 150px 0;

    h1 {
      font-size: 50px;
      margin-bottom: 50px;
    }

    &__link {
      font-size: 40px;
      color: blue;
    }
  }
</style>