<template>
  <footer class="footer">
    <div class="footer__geo">
      <app-geo/>
    </div>
    <div class="footer__main">
      <ul class="footer__list">
        <li class="footer__item">
          <footer-list :list="category" /> 
        </li>
        <li class="footer__item">
          <footer-list :list="collections" /> 
        </li>
        <li class="footer__item">
          <footer-list :list="shop" /> 
        </li>
        <li class="footer__item">
          <footer-list :list="about" /> 
        </li>
      </ul>
      <app-form/>
    </div>
    <footer-bottom/>
  </footer>
</template>

<script>
import FooterBottom from '@/components/Footer/FooterBottom.vue';
import AppForm from '@/components/AppForm.vue';
import FooterList from './FooterList.vue';
export default {
  components: {
  FooterBottom,
  AppForm,
  FooterList
},
setup() {
  return {
    // footerNav: [
    //   {
    //     category: {
    //   title: 'Категории',
    //   links: [
    //     { link: '/', name: 'Air Jordan 1 High' },
    //     { link: '/', name: 'Air Jordan 1 Mid' },
    //     { link: '/', name: 'Air Jordan 1 Low' },
    //     { link: '/', name: 'Nike Air Force' },
    //     { link: '/', name: 'Adidas' },
    //     { link: '/', name: 'Yeezy' },
    //     { link: '/', name: 'Nike Dunk' },
        
    //   ]
    // },
    //   },
    //   {
    //     collections: {
    //   title: 'Подборки',
    //   links: [
    //     { link: '/', name: 'Популярные' },
    //     { link: '/', name: 'Экспресс-доставка' },
    //     { link: '/', name: 'Новинки' },
    //     { link: '/', name: 'Black&White' },
    //     { link: '/', name: 'Зима' },
    //     { link: '/', name: 'Подборка Light' }, 
    //   ]
    // },
    //   },
    //   {
    //     shop: {
    //   title: 'Магазин',
    //   links: [
    //     { link: '/', name: 'Обувь' },
    //     { link: '/', name: 'Одежда' },
    //     { link: '/', name: 'Аксессуары' },
    //   ]
    // },
    //   },
    //   {
    //     about: {
    //   title: 'О нас',
    //   links: [
    //     { link: '/', name: 'О Meet-market' },
    //     { link: '/', name: 'Доставка' },
    //     { link: '/', name: 'Цена и оплата' },
    //     { link: '/', name: 'Контакты' },
    //     { link: '/', name: 'Гайды для одежды' },
    //     { link: '/', name: 'Наш блог' },
    //     { link: '/', name: 'Оферта' },
    //     // { link: '/', name: 'Политика конфиденциальности' },
    //   ]
    // },
    //   }
    // ],
    category: {
      title: 'Категории',
      links: [
        { link: '/', name: 'Air Jordan 1 High' },
        { link: '/', name: 'Air Jordan 1 Mid' },
        { link: '/', name: 'Air Jordan 1 Low' },
        { link: '/', name: 'Nike Air Force' },
        { link: '/', name: 'Adidas' },
        { link: '/', name: 'Yeezy' },
        { link: '/', name: 'Nike Dunk' },
        
      ]
    },
    collections: {
      title: 'Подборки',
      links: [
        { link: '/', name: 'Популярные' },
        { link: '/', name: 'Экспресс-доставка' },
        { link: '/', name: 'Новинки' },
        { link: '/', name: 'Black&White' },
        { link: '/', name: 'Зима' },
        { link: '/', name: 'Подборка Light' }, 
      ]
    },
    shop: {
      title: 'Магазин',
      links: [
        { link: '/', name: 'Обувь' },
        { link: '/', name: 'Одежда' },
        { link: '/', name: 'Аксессуары' },
      ]
    },
    about: {
      title: 'О нас',
      links: [
        { link: '/', name: 'О Meet-market' },
        { link: '/', name: 'Доставка' },
        { link: '/', name: 'Цена и оплата' },
        { link: '/', name: 'Контакты' },
        { link: '/', name: 'Гайды для одежды' },
        { link: '/', name: 'Наш блог' },
        { link: '/', name: 'Оферта' },
        // { link: '/', name: 'Политика конфиденциальности' },
      ]
    },
  }
}
}
</script>

<style lang="scss" scoped>
  .footer {
    margin-top: 80px;
    background: #F8F8F8;

    &__geo {
      display: none;
      @media (max-width: 550px) {
        display: flex;
        justify-content: center;
        padding: 26px 0;
        border-bottom: 1px solid #EDEDED;
      }
    }

    &__list {
      display: flex;
      gap: 32px 160px;
      flex-wrap: wrap;

      @media (max-width: 1161px) {
        justify-content: space-around;
        gap: 32px 64px;
      }
      @media (max-width: 375px) {
        gap: 32px 54px;
      }
    }

    &__main {
      padding: 60px 148px 98px 148px;
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #EDEDED;
      @media (max-width: 1161px) {
        flex-direction: column;
        gap: 32px 0;
        padding: 32px 20px;
      }
    }
  }
</style>