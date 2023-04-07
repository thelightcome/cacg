<template>
  <section class="section projects">
    <div class="container">
      <h1 class="h h--1 section__h gs_reveal">{{ $t("projectsTitle") }}</h1>
      <div>
        <div class="line-wrappers"><span class="line line-content gs_reveal" data-type="scaleX" data-gsapdelay="0.2"
            style="background: #909090;"></span></div>
        <TabLine class="gs_reveal">
          <template v-slot:title>
            <h4 class="h h--4 projects__title">{{ $t("projectsName1") }}</h4>
          </template>
          <template v-slot:body>
            <div class="projects__item" v-html="$t('projectsText1')"></div>
          </template>
        </TabLine>
        <div class="line-wrappers"><span class="line line-content gs_reveal" data-type="scaleX" data-gsapdelay="0.2"
            style="background: #909090;"></span></div>
        <TabLine class="gs_reveal">
          <template v-slot:title>
            <h4 class="h h--4 projects__title">{{ $t("projectsName2") }}</h4>
          </template>
          <template v-slot:body>
            <div class="projects__item" v-html="$t('projectsText2')"></div>
          </template>
        </TabLine>
        <div class="line-wrappers"><span class="line line-content gs_reveal" data-type="scaleX" data-gsapdelay="0.2"
            style="background: #909090;"></span></div>
        <TabLine class="gs_reveal">
          <template v-slot:title>
            <h4 class="h h--4 projects__title">{{ $t("projectsName3") }}</h4>
          </template>
          <template v-slot:body>
            <div class="projects__item" v-html="$t('projectsText3')"></div>
          </template>
        </TabLine>
        <div class="line-wrappers"><span class="line line-content gs_reveal" data-type="scaleX" data-gsapdelay="0.2"
            style="background: #909090;"></span></div>
      </div>
    </div>
  </section>
</template>
    
<style lang="scss" scoped>
.projects {
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
}

@media screen and (max-width: 1024px) {
  .projects {
    margin-bottom: 120px;

    &__title {
      padding: 18px 0;
    }

    &__item {
      font-size: 16px;
    }
  }
}

@media screen and (max-width: 768px) {
  .projects {
    margin-bottom: 60px;

    &__item {
      font-size: 14px;
    }
  }
}
</style>
    