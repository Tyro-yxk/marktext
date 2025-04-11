import { Menu } from 'electron'
import { minimizeWindow, toggleAlwaysOnTop, toggleFullScreen } from '../actions/window'
import { zoomIn, zoomOut } from '../../windows/utils'
import { isOsx } from '../../config'
import i18n from '../../i18n/i18nUtil'

export default function (keybindings) {
  const menu = {
    label: i18n.t('menu.window') + '(&w)',
    role: 'window',
    submenu: [{
      label: i18n.t('menu.window-minimize'),
      accelerator: keybindings.getAccelerator('window.minimize'),
      click (menuItem, browserWindow) {
        minimizeWindow(browserWindow)
      }
    }, {
      id: 'alwaysOnTopMenuItem',
      label: i18n.t('menu.window-toggle-always-on-top'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('window.toggle-always-on-top'),
      click (menuItem, browserWindow) {
        toggleAlwaysOnTop(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('menu.window-zoom-in'),
      accelerator: keybindings.getAccelerator('window.zoom-in'),
      click (menuItem, browserWindow) {
        zoomIn(browserWindow)
      }
    }, {
      label: i18n.t('menu.window-zoom-out'),
      accelerator: keybindings.getAccelerator('window.zoom-out'),
      click (menuItem, browserWindow) {
        zoomOut(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('menu.window-toggle-full-screen'),
      accelerator: keybindings.getAccelerator('window.toggle-full-screen'),
      click (item, browserWindow) {
        if (browserWindow) {
          toggleFullScreen(browserWindow)
        }
      }
    }]
  }

  if (isOsx) {
    menu.submenu.push({
      label: i18n.t('menu.window-arrangeInFront'),
      click () {
        Menu.sendActionToFirstResponder('arrangeInFront:')
      }
    })
  }
  return menu
}
