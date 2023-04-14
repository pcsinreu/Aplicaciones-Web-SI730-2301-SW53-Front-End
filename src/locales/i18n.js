import { createI18n } from 'vue-i18n'

const i18n = createI18n({
  locale:'en',
  messages:{
    en:{
      "username":'User',
      "clickme":'Click me!'
    },
    es:{
      "username":'Usuario',
      "clickme":'¡Haz click!'
    },
    fr:{
      "username":'Utilisateur',
      "clickme":'¡Cliquez sur!'
    }
  }
})

export  default  i18n;