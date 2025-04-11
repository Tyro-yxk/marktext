import enLocale from '../../locales/en.json'
import zhLocale from '../../locales/zh.json'
import i18n from 'i18next'

i18n
  .init({
    lng: 'en', // 默认语言
    resources: {
      en: { translation: enLocale },
      zh: { translation: zhLocale }
    },
    fallbackLng: 'en',
    debug: true
  })

export default i18n

export const switchLanguage = (type) => {
  i18n.changeLanguage(type)
}
