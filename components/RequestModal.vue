<script>
export default {
  props: ["type"],
  data() {
    return {
      active: false
    }
  }
}
</script>

<template>
  <div class="request-modal">
    <button v-if="type === 'icon'" class="request-modal__call gs_reveal" data-type="opacity" data-gsapdelay="1.2"
      @click="active = true"></button>
    <button v-if="type === 'button'" class="button request-modal__button gs_reveal" data-type="opacity"
      data-gsapdelay="1.2" @click="active = true">
      {{ $t("contactBtn") }}
    </button>
    <div v-show="active" class="request-modal__body" @click="active = false">
      <div class="request-modal__inner" @click.stop="">
        <button class="request-modal__close" @click="active = false"></button>
        <RequestForm :modal="true" @end="active = false" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.request-modal {
  &__call {
    display: none;
    margin-right: 18px;
    width: 24px;
    height: 24px;
    background: url("~@/assets/images/call.svg") no-repeat center;
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
      backdrop-filter: blur(9px);
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
}

@media screen and (max-width: 1024px) {
  .request-modal {
    &__call {
      display: block;
    }
  }
}

@media screen and (max-width: 768px) {
  .request-modal {
    &__inner {
      max-width: 90%;
      padding: 50.14px 16px 23.86px;
    }
  }
}
</style>

<style lang="scss">
@media screen and (max-width: 768px) {
  .request-modal {
    .socials-icons {
      display: flex !important;

      a:not(:last-child) {
        margin-right: 24px !important;
      }
    }
  }
}
</style>