<template>
  <section class="section banner">
    <div class="container banner__container">
      <h1 class="banner__title">
        <div class="gs_reveal" data-len="-60" data-gsapdelay="0.6"><span>Edtech</span> {{ $t("solutions") }}</div>
        <div class="gs_reveal" data-gsapdelay="0.6">{{ $t("bannerText1") }}</div>
      </h1>
    </div>
    <div class="video gs_reveal" data-type="opacity" data-gsapdelay="1">
      <div class="container">
        <video class="video__item" :src="require('@/assets/video/banner-video.mp4')" muted autoplay loop></video>
      </div>
    </div>
  </section>
</template>
    
<style lang="scss" scoped>
.banner {
  padding-top: 60px;

  &__container {
    display: flex;
    margin-bottom: 60px;
  }

  &__title {
    font-size: 7.2rem;
    line-height: 1;
    font-weight: 500;
    color: #282828;
    margin: 0;
    margin-right: 120px;

    span {
      color: #008024;
    }
  }
}

.video {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-sizing: border-box;
  background: #000;

  &__item {
    width: 100%;
    object-fit: contain;
  }
}

@media screen and (max-width: 1024px) {
  .banner {
    padding-top: 30px;

    &__container {
      margin-bottom: 30px;
    }

    &__title {
      font-size: 5rem;
      margin-right: 80px;
    }
  }
}

@media screen and (max-width: 768px) {
  .banner {
    padding-top: 16px;

    &__container {
      margin-bottom: 16px;
    }

    &__title {
      font-size: 2.8rem;
      margin-right: 0px;
    }

    &__text {
      display: none;
    }
  }

  .video {
    padding: 0px 10px;
  }
}
</style>
    