<script>
export default {
  data() {
    return {
      active: false,
    }
  },
  methods: {
    toggle() {
      this.active = !this.active;
    }
  }
}
</script>
  
<template>
  <div class="lang" :class="{ 'lang__active': active }" @click="toggle">
    <button class="lang__btn">{{ $_t.lang }}</button>
    <ul class="lang__options">
      <li class="lang__option" v-for="lang in $_t.langsList" :key="lang" @click="$_t.lang = lang"
        :class="{ active: $_t.lang === lang }">
        {{ lang }}
      </li>
    </ul>
  </div>
</template>
  
<style lang="scss" scoped>
.lang {
  position: relative;
  width: 40px;
  height: 25px;
  font-size: 1.8rem;
  line-height: 1.4;
  text-transform: capitalize;
  z-index: 5;

  &__btn {
    position: relative;
    background: transparent;
    width: 100%;
    height: 100%;
    font-size: inherit;
    text-align: left;
    text-transform: capitalize;

    &:after {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      margin-top: -2.5px;
      width: 10px;
      height: 5px;
      transform-origin: center;
      background: url("~@/assets/icons/arrow.svg") no-repeat center;
      background-size: contain;
      transition: 0.3s;
    }
  }

  &__active &__btn:after {
    transform: rotateZ(180deg);
  }

  &__options {
    background: #ffffff;
    pointer-events: none;
    opacity: 0;
    transform: translateY(30px);
    transition: 0.3s;
  }

  &__active &__options {
    pointer-events: unset;
    opacity: 1;
    transform: translateY(0px);
  }

  &__option {
    cursor: pointer;
  }
}
</style>
  