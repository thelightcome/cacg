import {
  reactive
} from 'vue'

import dictionary from '~/data/dictionaryData.js'

export default ({ app }, inject) => {
  if (!dictionary) throw new Error(`You did not pass the dictionary object when installing the plugin`)

  let _langs = Object.freeze([...Object.keys(dictionary).filter(l => l)])

  if (!_langs.length) throw new Error(`Your dictionary contains no data`)

  let _lang = (process.client && localStorage.getItem("lang")) || _langs[0]

  const dictionaryObj = Object.freeze(dictionary)

  const dict = reactive({
    currentLang: dictionaryObj[_lang]
  })

  const $_t = {
    get langsList() {
      return _langs
    },
    get lang() {
      return _lang
    },
    set lang(lang) {
      if (Object.keys(dictionaryObj).indexOf(lang) !== -1) {
        _lang = lang

        process.client && localStorage.setItem("lang", lang)

        dict.currentLang = dictionaryObj[_lang]
      } else throw new Error(`There is no language in your dictionary ${lang} `)
    },
    get dict() {
      return dict.currentLang
    },
    langs(lang) {
      if (Object.keys(dictionaryObj).indexOf(lang) !== -1) return dictionaryObj[lang]
      else throw new Error(`There is no language in your dictionary ${lang} `)
    }
  }

  const $t = (word) => {
    return dict.currentLang[word]
  }

  inject('t', $t)
  inject('_t', $_t)
}