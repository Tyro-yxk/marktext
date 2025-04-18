// NOTE: This are mutable fields that may change at runtime.

import i18n from '../../i18n/i18nUtil'

export const CUT = () => {
  return {
    label: i18n.t('menu.editor-cut'),
    id: 'cutMenuItem',
    role: 'cut'
  }
}

export const COPY = () => {
  return {
    label: i18n.t('menu.editor-copy'),
    id: 'copyMenuItem',
    role: 'copy'
  }
}

export const PASTE = () => {
  return {
    label: i18n.t('menu.editor-paste'),
    id: 'pasteMenuItem',
    role: 'paste'
  }
}

export const COPY_AS_MARKDOWN = () => {
  return {
    label: i18n.t('menu.editor-copy-as-markdown'),
    id: 'copyAsMarkdownMenuItem',
    click (menuItem, targetWindow) {
      targetWindow.webContents.send('mt::cm-copy-as-markdown')
    }
  }
}

export const COPY_AS_HTML = () => {
  return {
    label: i18n.t('menu.editor-copy-as-html'),
    id: 'copyAsHtmlMenuItem',
    click (menuItem, targetWindow) {
      targetWindow.webContents.send('mt::cm-copy-as-html')
    }
  }
}

export const PASTE_AS_PLAIN_TEXT = () => {
  return {
    label: i18n.t('menu.editor-paste-as-plain-text'),
    id: 'pasteAsPlainTextMenuItem',
    click (menuItem, targetWindow) {
      targetWindow.webContents.send('mt::cm-paste-as-plain-text')
    }
  }
}

export const INSERT_BEFORE = () => {
  return {
    label: i18n.t('menu.insert-paragraph-before'),
    id: 'insertParagraphBeforeMenuItem',
    click (menuItem, targetWindow) {
      targetWindow.webContents.send('mt::cm-insert-paragraph', 'before')
    }
  }
}

export const INSERT_AFTER = () => {
  return {
    label: i18n.t('menu.insert-paragraph-after'),
    id: 'insertParagraphAfterMenuItem',
    click (menuItem, targetWindow) {
      targetWindow.webContents.send('mt::cm-insert-paragraph', 'after')
    }
  }
}

export const SEPARATOR = {
  type: 'separator'
}
