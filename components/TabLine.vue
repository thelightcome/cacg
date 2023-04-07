<script>
export default {
  data() {
    return {
      active: false,
      trX: '-20px'
    }
  },
  methods: {
    toggle() {
      this.active = !this.active;
    },
    resize() {
      if (window.innerWidth < 768) this.trX = "-10px";
      else this.trX = "-20px";
    }
  },
  mounted() {
    this.resize();
    window.addEventListener("resize", this.resize);
  },
  unmounted() {
    window.removeEventListener("resize", this.resize);
  }
}
</script>
    
<template>
  <div class="tab-line" :class="{'tab-line--active': active}">
    <div class="tab-line__title" @click="toggle">
      <slot name="title"></slot>
    </div>
    <ExpandTransition :trX="trX">
      <div v-show="active" class="tab-line__body">
        <slot name="body"></slot>
      </div>
    </ExpandTransition>
  </div>
</template>
    
<style lang="scss" scoped>
.tab-line {
  &__title {
    cursor: pointer;
    position: relative;
    padding-right: 20px;

    &:after {
      content: '';
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 14.14px;
      height: 14.14px;
      background: url("~@/assets/icons/x-btn.svg") no-repeat center;
      background-size: contain;
      transform-origin: center;
      transition: 0.3s;
    }
  }

  &--active &__title:after {
    transform: translateY(-50%) rotateZ(45deg);
  }

  &__body {
    padding-bottom: 10px;
    transition: 0.3s;
    overflow: hidden;
  }
}
</style>
    