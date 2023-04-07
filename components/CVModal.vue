<script>
export default {
  data() {
    return {
      active: false,
      vacantion: []
    }
  }
}
</script>

<template>
  <div class="cv-modal">
    <button class="h h--5 cv-modal__link gs_reveal" @click="active = true">{{ $t("invitationBtn") }}</button>
    <button class="cv-modal__call button gs_reveal" @click="active = true">{{ $t("invitationBtn") }}</button>
    <div v-show="active" class="cv-modal__body" @click="active = false">
      <div class="cv-modal__inner" @click.stop="">
        <button class="cv-modal__close" @click="active = false"></button>
        <CVForm v-if="vacantion.length" :modal="true" @end="active = false" />
        <div class="not-vacantion">
          <div>{{ $t('notVacantion') }}</div>
          <button class="button" @click="active = false">{{ $t("proceed") }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cv-modal {
  &__link {
    position: relative;
    display: block;
    background: transparent;
    max-width: 279px;
    font-size: 1.7rem;
    line-height: 1.4;
    padding-right: 43px;
    padding-bottom: 4px;
    margin-top: 30px;
    border-bottom: 1px solid #282828;

    &:after {
      content: "";
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -4.5px;
      height: 9px;
      width: 19.5px;
      background: url("~@/assets/icons/arrow-line.svg") no-repeat center;
      background-size: contain;
    }
  }

  &>.button {
    display: none;
  }

  &__body {
    position: fixed;
    z-index: 10000;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      backdrop-filter: blur(5px);
      background: rgba(120, 120, 120, 0.35);
    }
  }

  &__inner {
    position: relative;
    z-index: 10;
    background: #ffffff;
    padding: 50px 30px;
    width: 100%;
    max-width: 420px;
    box-sizing: border-box;
  }

  &__close {
    position: absolute;
    top: 20px;
    right: 16.21px;
    width: 13.79px;
    height: 14.14px;
    background: url("~@/assets/images/close.svg") no-repeat center;
    background-size: contain;
    cursor: pointer;
    padding: 0;
    border: none;
  }

  .not-vacantion {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 600;
    line-height: 1.2;

    div {
      margin-bottom: 47px;
    }
  }
}

@media screen and (max-width: 768px) {
  .cv-modal {
    &__inner {
      max-width: 90%;
      padding: 50.14px 16px 23.86px;
    }

    &__link {
      display: none;
    }

    .button {
      display: block;
      margin: 0 auto;
      margin-top: 24px;
      padding: 17px 32px;
    }
  }
}
</style>