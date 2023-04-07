<script>
export default {
  data() {
    return {
      active: false
    }
  }
}
</script>
  
<template>
  <nav class="navigation">
    <RequestModal type='icon' />
    <button class="navigation__button" :class="{ active: active }" @click="active = !active"></button>
    <ul class="navigation__list" :class="{ active: active }">
      <li class="navigation__item gs_reveal" data-type="opacity" data-gsapdelay="0.4">
        <a href="/" class="navigation__link">{{ $t('navBtnMain') }}</a>
      </li>
      <li class="navigation__item gs_reveal" data-type="opacity" data-gsapdelay="0.6">
        <nuxt-link to="/#vacantion" class="navigation__link">{{ $t('navBtnVacantion') }}</nuxt-link>
      </li>
      <li class="navigation__item gs_reveal" data-type="opacity" data-gsapdelay="0.8">
        <a href="#footer" class="navigation__link">{{ $t('navBtnContacts') }}</a>
      </li>
    </ul>
    <ExpandTransition>
      <ul v-if="active" class="navigation-mobile__list" :class="{ active: active }">
        <li class="navigation-mobile__item gs_reveal" data-type="opacity" data-gsapdelay="0.4">
          <nuxt-link to="/" class="navigation-mobile__link navigation__link">{{ $t('navBtnMain') }}</nuxt-link>
        </li>
        <li class="navigation-mobile__item gs_reveal" data-type="opacity" data-gsapdelay="0.6">
          <nuxt-link to="/" class="navigation-mobile__link navigation__link">{{ $t('navBtnVacantion') }}</nuxt-link>
        </li>
        <li class="navigation-mobile__item gs_reveal" data-type="opacity" data-gsapdelay="0.8">
          <a href="#footer" class="navigation-mobile__link navigation__link">{{ $t('navBtnContacts') }}</a>
        </li>
        <li>
          <span class="navigation-mobile__line"></span>
          <ul class="lang">
            <li class="lang__option" v-for="lang in $_t.langsList" :key="lang" @click="$_t.lang = lang"
              :class="{ active: $_t.lang === lang }">
              {{ lang }}
            </li>
          </ul>
        </li>
      </ul>
    </ExpandTransition>
  </nav>
</template>
  
<style lang="scss" scoped>
.navigation {
  flex-grow: 1;
  max-width: 360px;

  &__call {
    display: none;
  }

  &__button {
    display: none;
  }

  &__list {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__link {
    position: relative;
    font-size: 1.8rem;
    line-height: 1.4;
    color: #000000;
    font-weight: 400;

    &::after {
      content: "";
      position: absolute;
      left: 50%;
      bottom: 0;
      height: 1px;
      background: #282828;
      width: 0%;
      transition: 0.3s;
      transform: translateX(-50%)
    }

    &:hover::after {
      width: 100%;
    }
  }
}

.navigation-mobile {
  &__list {
    display: none;
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    box-sizing: border-box;
    padding: 20px 10px 20px 10px;
    overflow: hidden;
    background: #ffffff;
    transition: 0.3s;
  }

  &__item {
    margin-bottom: 15px;

    &:last-child {
      margin-bottom: 0px;
    }
  }

  &__link {
    line-height: 1.4;
  }

  &__line {
    display: block;
    width: 100%;
    max-width: 137px;
    height: 1px;
    background: #D9D9D9;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}

.lang {
  display: flex;

  &__option {
    font-size: 18px;
    line-height: 1.4;
    color: #a5a5a5;
    text-transform: capitalize;
    margin-right: 20px;
    transition: 0.3s;

    &:hover,
    &.active {
      color: #000000;
    }

    &:last-child {
      margin-right: 0rem;
    }
  }
}

@media screen and (max-width: 1024px) {
  .navigation {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    &__call {
      display: block;
      width: 24px;
      height: 24px;
      background: url("~@/assets/images/call.svg") no-repeat center;
      margin-right: 18px;
    }

    &__button {
      display: block;
      padding: 0;
      margin: 0;
      border: 0;
      width: 24px;
      height: 24px;
      background: url("~@/assets/images/nav-btn.svg") no-repeat center;
      cursor: pointer;

      &.active {
        background: url("~@/assets/images/close.svg") no-repeat center;
      }
    }

    &__list {
      display: none;
    }

    &__link {
      font-size: 1.8rem;
      line-height: 1.4;
      color: #000000;
      font-weight: 400;
    }
  }

  .navigation-mobile__list {
    display: block;
  }
}
</style>
  