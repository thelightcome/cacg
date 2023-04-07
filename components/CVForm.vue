<script>
export default {
  emit: ["end"],
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      vacantion: '',
      fileName: '',
      loading: false,
      end: false,
      options: ["dvsd", "sdvsdv", "sdvsvsd"]
    }
  },
  methods: {
    fileChange() {
      console.log(this.$refs.fileInput.files)
      this.fileName = this.$refs.fileInput.files[0] ? this.$refs.fileInput.files[0].name : '';
    },
    async sendSummary(e) {
      try {
        e.preventDefault();

        if (!this.name || !this.phone || !this.email || !this.vacantion || this.loading) return;
        this.loading = true;

        const formData = new FormData()

        formData.append("name", this.name)
        formData.append("phone", this.phone)
        formData.append("email", this.email)
        formData.append("vacantion", this.vacantion)
        formData.append("file", this.$refs.fileInput.files[0], this.$refs.fileInput.files[0].name)

        const response = await fetch('/api/sendSummary', {
          method: 'POST',
          headers: {},
          body: formData
        });

        const data = await response.json();

        if (!data?.error) this.end = true;
      }
      catch (e) { }
      finally { this.loading = false; }
    },
  }
}
</script>
  
<template>
  <form class="form">
    <template v-if="!end">
      <h4 class="h h--4 form__h4">{{ $t("footerSubtitle2") }}</h4>
      <input class="input form__input" type="text" :placeholder="$t('name')" v-model="name">
      <input class="input form__input" type="tel" :placeholder="$t('phone')" v-mask="'+7 (###) ###-##-##'"
        v-model="phone">
      <input class="input form__input" type="text" :placeholder="'email'" v-model="email">

      <DefaultSelect class="form__select" :options="options" :value="vacantion" @click="(v) => vacantion = v" />

      <label class="file form__file">
        {{ fileName || $t("addFile") }}
        <input type="file" ref="fileInput"
          accept="application/msword, application/vnd.ms-excel, application/vnd.ms-powerpoint,
text/plain, application/pdf, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.openxmlformats-officedocument.presentationml.slideshow, application/vnd.openxmlformats-officedocument.presentationml.presentation"
          @change="fileChange">
      </label>

      <button class="button form__btn" @click="sendSummary">{{ $t("send") }}</button>
    </template>
    <template v-else>
      <div class="form__result">
        <h4 class="h h--4 form__h4">{{ $t("proceedTitle") }}</h4>
        <p>{{$t("proceedText")}}</p>
        <button class="button form__btn" @click="end = false, $emit('end')">{{ $t("proceed") }}</button>
      </div>
    </template>
  </form>
</template>
  
<style lang="scss" scoped>
.form {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;

  &__h4 {
    margin-bottom: 50px;
  }

  &__input {
    margin-bottom: 40px;

    &:first-child {
      margin-bottom: 20px;
    }
  }

  &__select {
    margin-bottom: 18px;
  }

  &__file {
    position: relative;
    box-sizing: border-box;
    padding-left: 36px;
    margin-bottom: 40px;
    font-size: 1.4rem;
    font-weight: 400;
    line-height: 1.5;

    &:after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 24px;
      height: 24px;
      background: url("~@/assets/icons/paperclip.svg") no-repeat center;
    }

    input {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      opacity: 0;
    }
  }

  &__btn {
    padding-top: 19px;
    padding-bottom: 19px;
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
  }

  &__result {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    font-size: 1.8rem;
    line-height: 1.5;

    p {
      margin: 0;
      margin-bottom: 40px;
    }

    h4 {
      margin-bottom: 10px;
    }
  }
}

.input {
  width: 100%;
  background: transparent;
  padding: 13px 0;
  border: none;
  border-bottom: 1px solid #909090;
  font-family: inherit;
  font-size: 1.1rem;
  font-weight: 700;
  line-height: 1.1;
  color: #282828;
  outline: none;
  transition: 0.3s;

  &::placeholder {
    font-family: inherit;
    font-size: 1.1rem;
    font-weight: 700;
    line-height: 1.1;
    color: #909090;
    text-transform: uppercase;
  }

  &:focus {
    border-bottom: 1px solid #282828;
  }
}

@media screen and (max-width: 1024px) {
  .form {
    &__h4 {
      margin-bottom: 20px;
    }

    &__btn {
      max-width: 320px;
    }
  }
}
</style>
  