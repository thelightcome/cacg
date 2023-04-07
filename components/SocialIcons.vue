<template>
  <div class="socials-icons" :class="{ active: show }">
    <a href="https://web.whatsapp.com/send?phone=+77074564573&text&app_absent=0" target="_blank" class="whatsapp"></a>
    <a href="https://t.me/cacg" target="_blank" class="telegram"></a>
    <a href="https://www.instagram.com/cacg.kz/" target="_blank" class="instagram"></a>
  </div>
</template>

<script>
export default {
  props: ['show']
}
</script>

<style lang="scss" scoped>
.socials-icons {
  display: none;
  margin-bottom: 14px;

  a {
    display: block;
    width: 24px;
    height: 24px;
    background-position: center;
    background-repeat: no-repeat;
    margin-right: 18px;

    &:last-child {
      margin-right: 0px;
    }
  }

  .whatsapp {
    background-image: url("~@/assets/images/w.svg");
  }

  .telegram {
    background-image: url("~@/assets/images/t.svg");
  }

  .instagram {
    background-image: url("~@/assets/images/i.svg");
  }
}

.socials-icons.active {
  display: flex;
}

@media screen and (max-width: 768px) {
  .socials-icons {
    display: flex;
  }
}
</style>