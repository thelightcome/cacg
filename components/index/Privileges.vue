<template>
  <section class="section privileges">
    <div class="container privileges__container">
      <div class="privileges__item gs_reveal" data-gsapdelay="0.2">
        <h5 class="h h--5 privileges__title">{{ $t("privilegesTitle1") }}</h5>
        <p>{{ $t("privilegesText1") }}</p>
      </div>
      <div class="privileges__item gs_reveal" data-gsapdelay="0.4">
        <h5 class="h h--5 privileges__title">{{ $t("privilegesTitle2") }}</h5>
        <p>{{ $t("privilegesText2") }}</p>
      </div>
      <div class="privileges__item gs_reveal" data-gsapdelay="0.6">
        <h5 class="h h--5 privileges__title">{{ $t("privilegesTitle3") }}</h5>
        <p>{{ $t("privilegesText3") }}</p>
      </div>
    </div>
  </section>
</template>
    
<style lang="scss" scoped>
.privileges {
  padding-top: 40px;
  margin-bottom: 250px;

  &__container {
    display: flex;
    justify-content: space-between;
    gap: 61px;
  }

  &__item {
    flex: 1 1 25%;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.5;
    color: #4a4a4a;
  }

  &__title {
    font-weight: 500;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
}

@media screen and (max-width: 768px) {
  .privileges {
    padding-top: 16px;
    margin-bottom: 60px;

    &__container {
      flex-direction: column;
      gap: 14px;
    }

    &__item {
      font-size: 1.2rem;
      line-height: 1.5;
    }

    &__title {
      font-size: 1.4rem;
      margin-bottom: 5px;
      line-height: 1.5;
    }
  }
}
</style>
    