<script>
export default {
  data() {
    return {
      items: [
        require('@/assets/images/partners/ttc.png'),
        require('@/assets/images/partners/orleu.png'),
        require('@/assets/images/partners/invelon.png'),
        require('@/assets/images/partners/pico.png'),
        require('@/assets/images/partners/varwin.png'),
        require('@/assets/images/partners/teslasuit.png'),
        require('@/assets/images/partners/smartsApps.png'),
      ],
      slickOptions: {
        autoplay: true,
        adaptiveHeight: false,
        autoplaySpeed: 3000,
        draggable: false,
        slidesToShow: 3,
        arrows: false,
        rtl: true,
      }
    }
  },
  methods: {
    prev() {
      this.$refs.carousel.prev()
    },
    next() {
      this.$refs.carousel.next()
    }
  }
}
</script>
    
<template>
  <section class="section partners">
    <div class="container">
      <h1 class="h h--1 section__h partners__title">
        <span class="gs_reveal">{{ $t("partnersTitle") }}</span>
        <span class="partners__btn gs_reveal">
          <button class="prev" @click="prev"></button>
          <button class="next" @click="next"></button>
        </span>
      </h1>
    </div>
    <div class="container">
      <div class="slider gs_reveal">
        <VueSlickCarousel v-bind="slickOptions" ref="carousel">
          <div class="slider__item" v-for="(item, itemIndex) in items" :key="itemIndex"><img :src="item" alt="" /></div>
        </VueSlickCarousel>
      </div>
    </div>
  </section>
</template>
    
<style lang="scss" scoped>
.partners {
  margin-bottom: 250px;

  &__title {
    position: relative;
  }

  &__btn {
    position: absolute;
    top: 50%;
    margin-top: -4.5px;
    right: 0;
    display: flex;
    align-items: center;

    button {
      width: 40px;
      height: 9px;
      background: url("~@/assets/icons/arrow-line-2.svg") no-repeat center;
      background-position: center;
      transform-origin: center;
      cursor: pointer;

      &:first-child {
        transform: rotateZ(180deg);
        margin-right: 15px;
      }
    }
  }
}

.slider {
  width: 100%;
  height: 160px;
  overflow: hidden;

  &__item {
    height: 160px;
    line-height: 160px;
    text-align: center;

    img {
      max-width: 100%;
      vertical-align: middle;
    }
  }
}

@media screen and (max-width: 1024px) {
  .partners {
    margin-bottom: 120px;
  }
}

@media screen and (max-width: 768px) {
  .partners {
    margin-bottom: 60px;
  }

  .slider {
    height: 45.6px;

    &__item {
      height: 45.6px;
      line-height: 45.6px;
      text-align: center;

      img {
        max-height: 100%;
      }
    }
  }
}
</style>
    