import * as actions from '../actions/paragraph'
import i18n from '../../i18n/i18nUtil'

export default function (keybindings) {
  return {
    id: 'paragraphMenuEntry',
    label: i18n.t('menu.paragraph') + '(&P)',
    submenu: [{
      id: 'heading1MenuItem',
      label: i18n.t('menu.heading') + ' 1',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.heading-1'),
      click (menuItem, focusedWindow) {
        actions.heading1(focusedWindow)
      }
    }, {
      id: 'heading2MenuItem',
      label: i18n.t('menu.heading') + ' 2',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.heading-2'),
      click (menuItem, focusedWindow) {
        actions.heading2(focusedWindow)
      }
    }, {
      id: 'heading3MenuItem',
      label: i18n.t('menu.heading') + ' 3',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.heading-3'),
      click (menuItem, focusedWindow) {
        actions.heading3(focusedWindow)
      }
    }, {
      id: 'heading4MenuItem',
      label: i18n.t('menu.heading') + ' 4',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.heading-4'),
      click (menuItem, focusedWindow) {
        actions.heading4(focusedWindow)
      }
    }, {
      id: 'heading5MenuItem',
      label: i18n.t('menu.heading') + ' 5',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.heading-5'),
      click (menuItem, focusedWindow) {
        actions.heading5(focusedWindow)
      }
    }, {
      id: 'heading6MenuItem',
      label: i18n.t('menu.heading') + ' 6',
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.heading-6'),
      click (menuItem, focusedWindow) {
        actions.heading6(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      id: 'upgradeHeadingMenuItem',
      label: i18n.t('menu.promote-heading'),
      accelerator: keybindings.getAccelerator('paragraph.upgrade-heading'),
      click (menuItem, focusedWindow) {
        actions.increaseHeading(focusedWindow)
      }
    }, {
      id: 'degradeHeadingMenuItem',
      label: i18n.t('menu.demote-heading'),
      accelerator: keybindings.getAccelerator('paragraph.degrade-heading'),
      click (menuItem, focusedWindow) {
        actions.degradeHeading(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      id: 'tableMenuItem',
      label: i18n.t('menu.table'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.table'),
      click (menuItem, focusedWindow) {
        actions.table(focusedWindow)
      }
    }, {
      id: 'codeFencesMenuItem',
      label: i18n.t('menu.code-fences'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.code-fence'),
      click (menuItem, focusedWindow) {
        actions.codeFence(focusedWindow)
      }
    }, {
      id: 'quoteBlockMenuItem',
      label: i18n.t('menu.quote-block'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.quote-block'),
      click (menuItem, focusedWindow) {
        actions.quoteBlock(focusedWindow)
      }
    }, {
      id: 'mathBlockMenuItem',
      label: i18n.t('menu.math-formula'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.math-formula'),
      click (menuItem, focusedWindow) {
        actions.mathFormula(focusedWindow)
      }
    }, {
      id: 'htmlBlockMenuItem',
      label: i18n.t('menu.paragraph-html-block'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.html-block'),
      click (menuItem, focusedWindow) {
        actions.htmlBlock(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      id: 'orderListMenuItem',
      label: i18n.t('menu.paragraph-order-list'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.order-list'),
      click (menuItem, focusedWindow) {
        actions.orderedList(focusedWindow)
      }
    }, {
      id: 'bulletListMenuItem',
      label: i18n.t('menu.paragraph-bullet-list'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.bullet-list'),
      click (menuItem, focusedWindow) {
        actions.bulletList(focusedWindow)
      }
    }, {
      id: 'taskListMenuItem',
      label: i18n.t('menu.paragraph-task-list'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.task-list'),
      click (menuItem, focusedWindow) {
        actions.taskList(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      id: 'looseListItemMenuItem',
      label: i18n.t('menu.paragraph-loose-list-item'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.loose-list-item'),
      click (menuItem, focusedWindow) {
        actions.looseListItem(focusedWindow)
      }
    }, {
      type: 'separator'
    }, {
      id: 'paragraphMenuItem',
      label: i18n.t('menu.paragraph-paragraph'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.paragraph'),
      click (menuItem, focusedWindow) {
        actions.paragraph(focusedWindow)
      }
    }, {
      id: 'horizontalLineMenuItem',
      label: i18n.t('menu.paragraph-horizontal-line'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.horizontal-line'),
      click (menuItem, focusedWindow) {
        actions.horizontalLine(focusedWindow)
      }
    }, {
      id: 'frontMatterMenuItem',
      label: i18n.t('menu.paragraph-front-matter'),
      type: 'checkbox',
      accelerator: keybindings.getAccelerator('paragraph.front-matter'),
      click (menuItem, focusedWindow) {
        actions.frontMatter(focusedWindow)
      }
    }]
  }
}
