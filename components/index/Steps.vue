<template>
  <section class="section steps">
    <div class="container">
      <div class="steps__bantext gs_reveal" v-html="$t('stepsBannerText')"></div>
      <h1 class="h h--1 section__h steps__title gs_reveal">{{ $t("stepsTitle") }}</h1>
      <div class="steps__body">
        <div class="steps__desc gs_reveal">
          {{ $t("stepsText") }}
        </div>
        <div class="steps__list">
          <div class="steps__item gs_reveal">
            <h4 class="h h--4">Analysis</h4>
            <p>{{ $t("stepText1") }}</p>
          </div>
          <div class="line-wrappers"><span class="line line-content gs_reveal" data-type="scaleX" data-gsapdelay="0.2"
              style="background: #909090;"></span></div>
          <div class="steps__item gs_reveal">
            <h4 class="h h--4">Design</h4>
            <p>{{ $t("stepText2") }}</p>
          </div>
          <div class="line-wrappers"><span class="line line-content gs_reveal" data-type="scaleX" data-gsapdelay="0.2"
              style="background: #909090;"></span></div>
          <div class="steps__item gs_reveal">
            <h4 class="h h--4">Development </h4>
            <p>{{ $t("stepText3") }}</p>
          </div>
          <div class="line-wrappers"><span class="line line-content gs_reveal" data-type="scaleX" data-gsapdelay="0.2"
              style="background: #909090;"></span></div>
          <div class="steps__item gs_reveal">
            <h4 class="h h--4">Implementation</h4>
            <p>{{ $t("stepText4") }}</p>
          </div>
          <div class="line-wrappers"><span class="line line-content gs_reveal" data-type="scaleX" data-gsapdelay="0.2"
              style="background: #909090;"></span></div>
          <div class="steps__item gs_reveal">
            <h4 class="h h--4">Evaluation</h4>
            <p>{{ $t("stepText5") }}</p>
          </div>
        </div>
      </div>
      <div class="teams">
        <div class="teams__title">{{ $t("devteams") }}</div>
        <div class="teams__items">
          <div>{{ $t("pm") }}</div>
          <div>{{ $t("pd") }}</div>
          <div>{{ $t("design") }}</div>
          <div>{{ $t("devs") }}</div>
        </div>
      </div>
    </div>
  </section>
</template>
    
<style lang="scss" scoped>
.steps {
  margin-bottom: 250px;

  &__bantext {
    font-size: 7.2rem;
    font-weight: 500;
    line-height: 1;
    margin-bottom: 120px;
  }

  &__title {
    max-width: 469px;
  }

  &__body {
    display: flex;
    gap: 60px;
    margin-bottom: 80px;
  }

  &__desc {
    font-size: 1.8rem;
    line-height: 1.3;
    color: #909090;
    max-width: 360px;
    font-weight: 400;
  }

  &__list {
    flex-grow: 1;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    padding-bottom: 16px;
    font-size: 1.8rem;
    font-weight: 400;
    line-height: 1.5;
    color: #282828;

    &:last-child {
      margin-bottom: 0;
    }

    h4 {
      font-weight: 700;
    }

    p {
      max-width: 360px;
      flex-grow: 1;
    }
  }
}

.teams {
  display: flex;
  gap: 60px;

  &__title {
    font-size: 2.5rem;
    line-height: 1.2;
    color: #282828;
    width: 360px;
    font-weight: 700;
  }

  &__items {
    max-width: 763px;
    flex-grow: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.8rem;

    div:not(:first-child) {
      position: relative;
      padding-left: 20px;

      &:after {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        width: 5px;
        height: 5px;
        border-radius: 50%;
        background: #929292;
      }
    }
  }
}

.line-wrappers {
  margin-bottom: 16px;
}

@media screen and (max-width: 1280px) {
  .steps {
    &__bantext {
      font-size: 5.6rem;
      margin-bottom: 90px;
    }
  }

  .teams {
    &__title {
      font-size: 2rem;
    }

    &__items {
      font-size: 1.4rem;
      flex-direction: column;
      align-items: flex-start;

      div {
        position: relative;
        padding-left: 10px;
        flex-shrink: 0;
        margin-bottom: 10px;

        &:last-child {
          margin-bottom: 0px;
        }

        &:after {
          content: "";
          position: absolute;
          top: 50%;
          left: 0;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #929292;
        }
      }
    }
  }
}

@media screen and (max-width: 1024px) {
  .steps {
    margin-bottom: 120px;

    &__bantext {
      font-size: 4.4rem;
      margin-bottom: 60px;
    }

    &__body {
      gap: 30px;
    }

    &__desc {
      font-size: 1.6rem;
      max-width: 240px;
    }
  }

  .teams {
    gap: 10px;
    flex-direction: column;

    &__title {
      font-size: 1.8rem;
      width: unset;
    }

    &__items {
      max-width: none;

      div:not(:first-child) {
        padding-left: 14px;
      }
    }
  }

  .line-wrappers {
    margin-bottom: 20px;
  }
}

@media screen and (max-width: 768px) {
  .steps {
    margin-bottom: 60px;

    &__bantext {
      font-size: 2.4rem;
      font-weight: 600;
      margin-bottom: 36px;
    }

    &__title {
      margin-bottom: 14px;
    }

    &__body {
      flex-direction: column;
      gap: 24px;
      margin-bottom: 22px;
    }

    &__desc {
      font-size: 1.4rem;
      max-width: none;
    }

    &__item {
      flex-direction: column;
      padding-bottom: 14px;
      font-size: 1.4rem;

      h4 {
        margin-bottom: 10px;
      }

      p {
        max-width: none;
      }
    }
  }

  .teams {
    &__title {
      font-size: 1.8rem;
    }
  }

  .line-wrappers {
    margin-bottom: 14px;
  }
}
</style>
    