import * as actions from '../actions/theme'
import i18n from '../../i18n/i18nUtil'

export default function (userPreference) {
  const { theme } = userPreference.getAll()
  return {
    label: i18n.t('menu.theme') + '(&T)',
    id: 'themeMenu',
    submenu: [{
      label: i18n.t('menu.theme-cadmium-light'),
      type: 'radio',
      id: 'light',
      checked: theme === 'light',
      click (menuItem, browserWindow) {
        actions.selectTheme('light')
      }
    }, {
      label: i18n.t('menu.theme-dark'),
      type: 'radio',
      id: 'dark',
      checked: theme === 'dark',
      click (menuItem, browserWindow) {
        actions.selectTheme('dark')
      }
    }, {
      label: i18n.t('menu.theme-graphite-light'),
      type: 'radio',
      id: 'graphite',
      checked: theme === 'graphite',
      click (menuItem, browserWindow) {
        actions.selectTheme('graphite')
      }
    }, {
      label: i18n.t('menu.theme-material-dark'),
      type: 'radio',
      id: 'material-dark',
      checked: theme === 'material-dark',
      click (menuItem, browserWindow) {
        actions.selectTheme('material-dark')
      }
    }, {
      label: i18n.t('menu.theme-one-dark'),
      type: 'radio',
      id: 'one-dark',
      checked: theme === 'one-dark',
      click (menuItem, browserWindow) {
        actions.selectTheme('one-dark')
      }
    }, {
      label: i18n.t('menu.theme-ulysses'),
      type: 'radio',
      id: 'ulysses',
      checked: theme === 'ulysses',
      click (menuItem, browserWindow) {
        actions.selectTheme('ulysses')
      }
    }]
  }
}
