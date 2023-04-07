<script>
if (process.client) {
  gsap.registerPlugin(ScrollTrigger);
}
export default {
  name: 'IndexPage',
  beforeMount() {
    let language = window.navigator ? (window.navigator.language ||
      window.navigator.systemLanguage ||
      window.navigator.userLanguage) : "en";
    language = language.substr(0, 2).toLowerCase();
    
    this.$_t.lang = this.$_t.langs(language) ? language : 'en';
  },
}
</script>

<template>
  <div class="app">
    <TheHeader />
    <Nuxt />
    <TheFooter />
  </div>
</template>

<style lang="scss">
$fontFamily1: "Inter";
$fontColor1: #282828;

.head {

  &--1 {
    font-family: $fontFamily1;
    font-weight: 600;
    font-size: 40px;
    line-height: 1.1;
    text-align: left;
    vertical-align: top;
    color: $fontColor1;
  }

  &--2 {
    font-family: $fontFamily1;
    font-weight: 600;
    font-size: 25px;
    line-height: 1.2;
    text-align: left;
    vertical-align: top;
    color: $fontColor1;
  }
}
</style>
