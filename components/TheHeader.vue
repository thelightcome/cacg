<template>
  <header>
    <div class="container header__container">
      <a href="/" class="logotype gs_reveal" data-type="opacity" data-gsapdelay="0.2">
        <img :src="require('@/assets/images/logotype.svg')" alt="">
      </a>
      <TheNavigation class="header__navigation" />
      <div class="header__controls">
        <LangBtn class="header__lang-btn gs_reveal" data-type="opacity" data-gsapdelay="1" />
        <RequestModal type='button' />
      </div>
      <span class="line gs_reveal" data-type="scaleX" data-gsapdelay="0.2"></span>
    </div>
  </header>
</template>
    
<style lang="scss" scoped>
.header {
  &__container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 20px;
    padding-bottom: 20px;
    z-index: 1000;
  }

  &__controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-grow: 1;
    max-width: 294px;
  }
}

@media screen and (max-width: 1024px) {
  .header {
    &__container {
      padding-top: 13px;
      padding-bottom: 11px;
    }

    &__controls {
      display: none;
    }
  }
}
</style>
    