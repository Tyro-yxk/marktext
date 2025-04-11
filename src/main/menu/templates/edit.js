import * as actions from '../actions/edit'
import { isOsx } from '../../config'
import { COMMANDS } from '../../commands'
import i18n from '../../i18n/i18nUtil'

export default function (keybindings) {
  return {
    label: i18n.t('menu.edit') + '(&E)',
    submenu: [{
      label: i18n.t('menu.editor-undo'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_UNDO),
      click: (menuItem, browserWindow) => {
        actions.editorUndo(browserWindow)
      }
    }, {
      label: i18n.t('menu.editor-redo'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_REDO),
      click: (menuItem, browserWindow) => {
        actions.editorRedo(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('menu.editor-cut'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_CUT),
      click (menuItem, browserWindow) {
        actions.nativeCut(browserWindow)
      }
    }, {
      label: i18n.t('menu.editor-copy'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_COPY),
      click (menuItem, browserWindow) {
        actions.nativeCopy(browserWindow)
      }
    }, {
      label: i18n.t('menu.editor-paste'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_PASTE),
      click (menuItem, browserWindow) {
        actions.nativePaste(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('menu.editor-copy-as-markdown'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_COPY_AS_MARKDOWN),
      click (menuItem, browserWindow) {
        actions.editorCopyAsMarkdown(browserWindow)
      }
    }, {
      label: i18n.t('menu.editor-copy-as-html'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_COPY_AS_HTML),
      click (menuItem, browserWindow) {
        actions.editorCopyAsHtml(browserWindow)
      }
    }, {
      label: i18n.t('menu.editor-paste-as-plain-text'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_PASTE_AS_PLAINTEXT),
      click (menuItem, browserWindow) {
        actions.editorPasteAsPlainText(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('menu.editor-select-all'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_SELECT_ALL),
      click (menuItem, browserWindow) {
        actions.editorSelectAll(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('menu.editor-duplicate'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_DUPLICATE),
      click (menuItem, browserWindow) {
        actions.editorDuplicate(browserWindow)
      }
    }, {
      label: i18n.t('menu.editor-create-paragraph'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_CREATE_PARAGRAPH),
      click (menuItem, browserWindow) {
        actions.editorCreateParagraph(browserWindow)
      }
    }, {
      label: i18n.t('menu.editor-delete-paragraph'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_DELETE_PARAGRAPH),
      click (menuItem, browserWindow) {
        actions.editorDeleteParagraph(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('menu.editor-find'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_FIND),
      click (menuItem, browserWindow) {
        actions.editorFind(browserWindow)
      }
    }, {
      label: i18n.t('menu.editor-find-next'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_FIND_NEXT),
      click (menuItem, browserWindow) {
        actions.editorFindNext(browserWindow)
      }
    }, {
      label: i18n.t('menu.editor-find-previous'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_FIND_PREVIOUS),
      click (menuItem, browserWindow) {
        actions.editorFindPrevious(browserWindow)
      }
    }, {
      label: i18n.t('menu.editor-replace'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_REPLACE),
      click (menuItem, browserWindow) {
        actions.editorReplace(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('menu.editor-find-in-folder'),
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_FIND_IN_FOLDER),
      click (menuItem, browserWindow) {
        actions.findInFolder(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      label: i18n.t('menu.editor-screenshot'),
      id: 'screenshot',
      visible: isOsx,
      accelerator: keybindings.getAccelerator(COMMANDS.EDIT_SCREENSHOT),
      click (menuItem, browserWindow) {
        actions.screenshot(browserWindow)
      }
    }, {
      type: 'separator'
    }, {
      // TODO: Remove this menu entry and add it to the command palette (#1408).
      label: i18n.t('menu.editor-line-ending'),
      submenu: [{
        id: 'crlfLineEndingMenuEntry',
        label: i18n.t('menu.editor-line-ending-crlf'),
        type: 'radio',
        click (menuItem, browserWindow) {
          actions.lineEnding(browserWindow, 'crlf')
        }
      }, {
        id: 'lfLineEndingMenuEntry',
        label: i18n.t('menu.editor-line-ending-lf'),
        type: 'radio',
        click (menuItem, browserWindow) {
          actions.lineEnding(browserWindow, 'lf')
        }
      }]
    }]
  }
}
