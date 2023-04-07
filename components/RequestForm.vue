<script>
export default {
  props: ["modal"],
  emit: ["end"],
  data() {
    return {
      name: '',
      email: '',
      phone: '',
      agreement: false,
      loading: false,
      end: false,
      error: {
        name: '',
        email: '',
        phone: '',
        agreement: '',
      }
    }
  },
  watch: {
    name() {
      this.error.name = '';
    },
    email() {
      this.error.email = '';
    },
    phone() {
      this.error.phone = '';
    },
    agreement() {
      this.error.agreement = '';
    },
  },
  methods: {
    async sendRequest(e) {
      try {
        e.preventDefault();
        if (this.loading) return;

        if (!this.name) return this.error.name = 'Name error';
        if (!(this.phone && this.email)) {
          this.error.email = 'Email error';
          this.error.phone = 'Email error';
          return
        }
        if (!/^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(this.email)) return this.error.email = 'Email error';
        if (!this.agreement) return this.error.agreement = 'Agreement error';

        this.loading = true;

        const response = await fetch('/api/sendRequest', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ name: this.name, phone: this.phone, email: this.email, })
        });

        const data = await response.json();

        if (!data?.error) this.end = true;
      }
      catch (e) { }
      finally { this.loading = false; }
    }
  }
}
</script>
  
<template>
  <form class="form">
    <template v-if="!end">
      <h4 class="h h--4 form__h4">{{ $t("footerSubtitle2") }}</h4>
      <input class="input form__input" :class="{ error: error.name }" type="text" :placeholder="$t('name')"
        v-model="name">
      <input class="input form__input" :class="{ error: error.email }" type="email" :placeholder="'Email'"
        v-model="email" pattern="^[^ ]+@[^ ]+\.[a-z]{2,3}$">
      <input class="input form__input" :class="{ error: error.phone }" type="tel" :placeholder="$t('phone')"
        v-mask="'+7 (###) ###-##-##'" v-model="phone">
      <label class="checkbox">
        <span class="checkbox__item" :class="{ 'checkbox__item--active': agreement, error: error.agreement }">
          <input class="checkbox__input" type="checkbox" v-model="agreement">
        </span>
        <div class="checkbox__title" v-html="$t('agreement')"></div>
      </label>
      <button class="button form__btn" @click="sendRequest">{{ $t("sendBtn") }}</button>

      <div v-if="modal" class="form__contacts">
        <a class="form__links" href="tel:+77066368970">+ 7 706 636 89 70</a>
        <a class="form__links" href="mailto:info@cacg.kz">info@cacg.kz</a>
        <SocialIcons />
      </div>
    </template>
    <template v-else>
      <div class="form__result">
        <h4 class="h h--4 form__h4">{{ $t("proceedTitle") }}</h4>
        <p>{{ $t("proceedText") }}</p>
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

  &__btn {
    padding-top: 19px;
    padding-bottom: 19px;
    width: 100%;
    max-width: 360px;
    margin: 0 auto;
  }

  &__contacts {
    margin-top: 40px;
    padding-top: 40px;
    border-top: 1px solid #909090;
    display: flex;
    flex-direction: column;
  }

  &__links {
    font-size: 1.8rem;
    line-height: 1.5;
    color: #282828;
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

.checkbox {
  display: flex;
  margin-bottom: 40px;
  cursor: pointer;
  font-size: 1.4rem;
  line-height: 1.4;
  color: #909090;

  &__item {
    display: inline-block;
    width: 20px;
    height: 20px;
    border: 1px solid #909090;
    margin-right: 10px;

    &--active {
      background: url("~@/assets/icons/bird.svg") center center no-repeat;
    }
  }

  &__input {
    opacity: 0;
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

.error {
  border-color: red;
  color: red;
}

.error::placeholder {
  color: red;
}

@media screen and (max-width: 1024px) {
  .form {
    &__h4 {
      margin-bottom: 20px;
    }
  }
}

@media screen and (max-width: 768px) {
  .form {
    &__btn {
      max-width: 320px;
    }

    &__contacts {
      margin-top: 24px;
      padding-top: 23.86px;
      flex-direction: row;
      justify-content: center;
    }

    &__links {
      display: none;
    }
  }
}
</style>
  