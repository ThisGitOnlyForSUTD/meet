<template>
  <form class="form" @submit.prevent>
    <h3 class="form__title">
      Подписывайтесь на новости Meet-market
    </h3>
    <label class="form__lable" for="username">Имя*</label>
    <input class="form__input" type="text" id="username" name="username" placeholder="Введите имя">
    <button class="form__btn">
      Подписаться
    </button>
    <span class="form__text">
      Подписываясь на рассылку, вы соглашаетесь с условиями оферты и  политики конфиденциальности
    </span>
  </form>
</template>

<style lang="scss" scoped>
.form {
  width: 100%;
  max-width: 360px;
  height: 360px;
  padding: 32px 20px 44px 20px;
  display: flex;
  flex-direction: column;
  background-color: rgba(114, 114, 138, 0.05);
  background-image: url('@/static/imgs/formbg.svg');
  background-position: bottom;
  background-repeat: no-repeat;
  border-radius: 4px;

  &__title {
    text-align: center;
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: $line-height-24;
    text-align: center;
    color: $black-color;
    margin-bottom: 16px;
  }

  &__lable {
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 120%;
    color: $black-color;
    margin-bottom: 8px;
  }

  &__input {
    background: $white-color;
    padding: 14px 0 14px 16px;
    width: 100%;
    max-width: 320px;
    border: none;
    border-radius: 4px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: $grey-color;
  }

  &__btn {
    margin: 16px 0;
    background: $black-color;
    border-radius: 4px;
    padding: 12px 112.5px;
    color: $white-color;
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    transition: .3s ease-in-out;

    &:hover {
      background: #313537;
    }
  }

  &__text {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    color: $black-color;
  }
}
</style>