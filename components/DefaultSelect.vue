<script>
export default {
  props: ["value", "options"],
  emits: ["click"],
  data() {
    return {
      active: false,
    }
  },
  methods: {
    select(val) {
      this.$emit("click", val);
      this.active = false;
    }
  }
}
</script>

<template>
  <div class="select">
    <div class="select__current" @click="active = !active">{{ value ||$t('openVacantion') }}</div>
    <div v-show="active" class="select__options">
      <div class="select__option" v-for="(option, optionsId) in options" :key="optionsId" @click="select(option)">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.select {
  position: relative;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.1;
  color: #909090;

  &__current {
    position: relative;
    padding: 13px 20px 13px 0px;
    border-bottom: 1px solid #909090;
    text-transform: uppercase;
    cursor: pointer;

    &:after {
      content: "";
      position: absolute;
      right: 0;
      top: 50%;
      width: 13px;
      height: 8px;
      margin-top: -4px;
      background: url("~@/assets/icons/arrow.svg") no-repeat center;
      background-size: cover;
    }
  }

  &__options {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    width: 100%;
    box-sizing: border-box;
    background: #ffffff;
    max-height: 100px;
    overflow-y: auto;
    z-index: 1000;
  }

  &__option {
    cursor: pointer;
    padding: 10px;
  }
}
</style>