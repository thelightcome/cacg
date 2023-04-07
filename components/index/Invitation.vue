<template>
  <section id="vacantion" class="section invitation">
    <div class="container invitation__top">
      <div>
        <h1 class="h h--1 invitation__title gs_reveal">{{ $t("invitationTitle") }}</h1>
        <img class="invitation__image-mobile gs_reveal" :src="require('@/assets/images/our-img-1.jpg')" alt="">
      </div>
      <div class="invitation__info">
        <div class="gs_reveal">{{ $t("invitationText") }}</div>

        <CVModal />
      </div>
    </div>
    <div class="container gs_reveal">
      <img class="invitation__image" :src="require('@/assets/images/our-img-1.jpg')" alt="">
    </div>
  </section>
</template>
    
<style lang="scss" scoped>
.invitation {
  margin-bottom: 250px;

  &__image-mobile {
    display: none;
  }

  &__top {
    display: flex;
    justify-content: space-between;
    gap: 158px;
    margin-bottom: 40px;
  }

  &__info {
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.5;
    color: #535353;
  }

  &__image {
    width: 100%;
  }
}

@media screen and (max-width: 1024px) {
  .invitation {
    margin-bottom: 120px;

    &__top {
      gap: 100px;
      margin-bottom: 30px;
    }

    &__info {
      font-size: 1.6rem;
    }
  }
}

@media screen and (max-width: 768px) {
  .invitation {
    margin-bottom: 60px;

    &__top {
      flex-direction: column;
      gap: 24px;
      margin-bottom: 0px;
    }

    &__image-mobile {
      display: block;
      width: 100%;
      margin-top: 30px;
    }

    &__info {
      font-size: 1.4rem;
    }

    &__image {
      display: none;
    }
  }
}
</style>
    