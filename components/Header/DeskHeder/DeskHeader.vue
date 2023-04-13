<template>
  <div class="desk-header">
    <top-menu></top-menu>
    <middle-menu></middle-menu>
    <bottom-menu></bottom-menu>
  </div>
</template>

<script>
import TopMenu from '@/components/header/DeskHeder/TopMenu'
import MiddleMenu from '@/components/header/DeskHeder/MiddleMenu'
import BottomMenu from '@/components/header/DeskHeder/BottomMenu'
export default {
  name: 'DeskHeader',

  components: {
    TopMenu,
    MiddleMenu,
    BottomMenu
  }
};
</script>

<style lang="scss" scoped>
  .desk-header {
    margin-bottom: 40px;
  }
</style>