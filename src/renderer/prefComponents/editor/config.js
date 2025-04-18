import { ENCODING_NAME_MAP } from 'common/encoding'
import { i18n } from '@/main'

export const tabSizeOptions = [{
  label: '1',
  value: 1
}, {
  label: '2',
  value: 2
}, {
  label: '3',
  value: 3
}, {
  label: '4',
  value: 4
}]

export const endOfLineOptions = [{
  label: 'Default',
  value: 'default'
}, {
  label: 'Carriage return and line feed (CRLF)',
  value: 'crlf'
}, {
  label: 'Line feed (LF)',
  value: 'lf'
}]

export const trimTrailingNewlineOptions = () => [{
  label: i18n.t('preferences.category.editor-option.trimTrailingNewlineOptions.trim-all-trailing'),
  value: 0
}, {
  label: i18n.t('preferences.category.editor-option.trimTrailingNewlineOptions.ensure-exactly-one-trailing'),
  value: 1
}, {
  label: i18n.t('preferences.category.editor-option.trimTrailingNewlineOptions.preserve-style-of-original-document'),
  value: 2
}, {
  label: i18n.t('preferences.category.editor-option.trimTrailingNewlineOptions.do-nothing'),
  value: 3
}]

export const textDirectionOptions = () => [{
  label: i18n.t('preferences.category.editor-option.textDirectionOptions.ltr'),
  value: 'ltr'
}, {
  label: i18n.t('preferences.category.editor-option.textDirectionOptions.rtl'),
  value: 'rtl'
}]

let defaultEncodingOptions = null
export const getDefaultEncodingOptions = () => {
  if (defaultEncodingOptions) {
    return defaultEncodingOptions
  }

  defaultEncodingOptions = []
  for (const [value, label] of Object.entries(ENCODING_NAME_MAP)) {
    defaultEncodingOptions.push({ label, value })
  }
  return defaultEncodingOptions
}
