<script>
export default {
  props: ["trX"],
  methods: {
    enter(element) {
      element.style.height = "auto";
      const height = getComputedStyle(element).height;
      element.style.height = 0;
      requestAnimationFrame(() => {
        element.style.height = height;
        element.style.transform = `translateY(${this.trX || 0})`;
      });
    },
    afterEnter(element) {
      element.style.height = "auto";
    },
    leave(element) {
      const height = getComputedStyle(element).height;
      element.style.height = height;
      element.style.transform = "";
      requestAnimationFrame(() => {
        element.style.height = 0;
      });
    },
  }
}
</script>

<template>
  <transition name="expand" @enter="enter" @after-enter="afterEnter" @leave="leave">
    <slot></slot>
  </transition>
</template>

<style lang="scss" scoped>

</style>