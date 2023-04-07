<script>
export default {
  mounted() {
    let map;

    DG.then(function () {
      map = DG.map('map', {
        center: [51.139295, 71.419445],
        zoom: 18
      });
      DG.marker([51.139295, 71.419445]).addTo(map)
    });
  }
}
</script>
    
<template>
  <footer class="footer" id="footer">
    <div class="container">
      <div class="footer__top">
        <h1 class="section__h h h--1 gs_reveal">{{ $t("footerTitle") }}</h1>

        <div class="map gs_reveal" id="map"></div>
      </div>
      <div class="footer__bottom">
        <div class="footer__contacts gs_reveal">
          <div>
            <h5 class="h h--5 footer__h5">{{ $t("footerSubtitle1") }}</h5>
            <p><a href="tel:+77066368970">+ 7 706 636 89 70</a></p>
            <p><a href="mailto:info@cacg.kz">info@cacg.kz</a></p>
          </div>
          <div class="footer__link footer__hublink" v-html="$t('astanaHub')(require('@/assets/images/astanahub.svg'))">
          </div>
        </div>
        <div class="footer__socials gs_reveal">
          <div class="socials-links">
            <h5 class="h h--5 footer__h5">{{ $t("footerSubtitle4") }}</h5>
            <SocialIcons :show="true" />
          </div>
          <SocialIcons />
          <a href="/policy.pdf" target="_blank" class="footer__link">{{ $t("politics") }}</a>
        </div>
        <div class="footer__request gs_reveal">
          <RequestForm />
        </div>
      </div>
    </div>
  </footer>
</template>
    
<style lang="scss" scoped>
.footer {
  padding-bottom: 140px;

  &__top {
    margin-bottom: 70px;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
  }

  &__h5 {
    margin-bottom: 12px;
  }

  p {
    margin-bottom: 6px;
  }

  &__contacts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p,
    p a {
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 1.5;
      color: #282828;
    }
  }

  &__socials {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    a {
      font-size: 1.8rem;
      font-weight: 400;
      line-height: 1.5;
      color: #909090;

      img {
        width: 2rem;
        height: 2rem;
      }
    }
  }

  &__request {
    width: 100%;
    max-width: 360px;
    min-height: 395px;
    display: flex;
    align-items: center;
  }

  &__link {
    height: 41px;
    line-height: 41px !important;
    font-size: 1.8rem;
    vertical-align: middle;
    color: #909090;
  }
}

.socials-links {}

.map {
  width: 100%;
  aspect-ratio: 2.5;
  overflow: hidden;
}

@media screen and (max-width: 1280px) {
  .footer {
    padding-bottom: 120px;

    &__request {
      max-width: 300px;
    }

    &__link {
      font-size: 1.4rem !important;
    }
  }
}

@media screen and (max-width: 1024px) {
  .footer {
    padding-bottom: 80px;

    &__top {
      margin-bottom: 40px;
    }

    &__h4 {
      margin-bottom: 20px;
    }

    &__h5 {
      font-size: 1.8rem;
    }

    &__request {
      display: none;
    }

    &__link {
      height: auto;
    }
  }
}

@media screen and (max-width: 768px) {
  .footer {
    padding-bottom: 40px;

    &__top {
      display: none;
    }

    &__bottom {
      flex-direction: column;
    }

    &__contacts {
      margin-bottom: 16.4px;

      &>div {
        display: flex;
        flex-direction: column;
      }

      p {
        order: 1;
      }

      p a {
        color: #00A3FF;
      }
    }

    &__hublink {
      display: none !important;
    }
  }

  .socials-links {
    display: none;
  }
}
</style>
    