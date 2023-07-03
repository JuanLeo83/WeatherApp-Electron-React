import esStrings from './assets/translations/es.json'
import enStrings from './assets/translations/en.json'

export const messages = {
  es: esStrings,
  en: enStrings
}

export const getText = (key, intl) => intl.formatMessage({ id: key })

