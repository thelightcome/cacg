<template>
  <section class="section technologies">
    <div class="container">
      <h1 class="h h--1 section__h gs_reveal">{{ $t("technologiesTitle") }}</h1>
      <div>
        <div class="line-wrappers"><span class="line line-content gs_reveal" data-type="scaleX" data-gsapdelay="0.2"
            style="background: #909090;"></span></div>
        <TabLine class="gs_reveal">
          <template v-slot:title>
            <h4 class="h h--4 technologies__title">{{ $t("technologiesSubtitle1") }}</h4>
          </template>
          <template v-slot:body>
            <div class="technologies__item">
              <div class="technologies__desc" v-html="$t('technologiesText1')"></div>
              <div class="technologies__info">
                <h5 class="h h--5">{{ $t("technologiesSubtitle") }}</h5>
                {{ $t("technologiesSubtext1") }}
              </div>
            </div>
          </template>
        </TabLine>
        <div class="line-wrappers"><span class="line line-content gs_reveal" data-type="scaleX" data-gsapdelay="0.2"
            style="background: #909090;"></span></div>
        <TabLine class="gs_reveal">
          <template v-slot:title>
            <h4 class="h h--4 technologies__title">{{ $t("technologiesSubtitle2") }}</h4>
          </template>
          <template v-slot:body>
            <div class="technologies__item">
              <div class="technologies__desc" v-html="$t('technologiesText2')"></div>
              <div class="technologies__info">
                <h5 class="h h--5">{{ $t("technologiesSubtitle") }}</h5>
                {{ $t("technologiesSubtext2") }}
              </div>
            </div>
          </template>
        </TabLine>
        <div class="line-wrappers"><span class="line line-content gs_reveal" data-type="scaleX" data-gsapdelay="0.2"
            style="background: #909090;"></span></div>
        <TabLine class="gs_reveal">
          <template v-slot:title>
            <h4 class="h h--4 technologies__title">{{ $t("technologiesSubtitle3") }}</h4>
          </template>
          <template v-slot:body>
            <div class="technologies__item">
              <div class="technologies__desc" v-html="$t('technologiesText3')"></div>
              <div class="technologies__info">
                <h5 class="h h--5">{{ $t("technologiesSubtitle") }}</h5>
                {{ $t("technologiesSubtext3") }}
              </div>
            </div>
          </template>
        </TabLine>
        <div class="line-wrappers"><span class="line line-content gs_reveal" data-type="scaleX" data-gsapdelay="0.2"
            style="background: #909090;"></span></div>
      </div>
    </div>
  </section>
</template>
    
<style lang="scss" scoped>
.technologies {
  margin-bottom: 250px;

  &__title {
    font-weight: 700;
    padding: 30px 0;
  }

  &__item {
    display: flex;
    font-size: 18px;
    font-weight: 400;
    line-height: 1.5;
    color: #282828;
  }

  &__desc {
    max-width: 570px;
    flex-grow: 1;
    margin-right: 63px;
  }
}

@media screen and (max-width: 1024px) {
  .technologies {
    margin-bottom: 140px;

    &__title {
      padding: 18px 0;
    }

    &__item {
      display: flex;
      font-size: 16px;
    }
  }
}

@media screen and (max-width: 768px) {
  .technologies {
    margin-bottom: 60px;

    &__item {
      flex-direction: column;
      font-size: 14px;
    }

    &__desc {
      margin-bottom: 10px;
      margin-right: 0px;
    }
  }
}
</style>
    