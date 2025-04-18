<template>
  <div class="pref-general">
    <h4>{{$t('preferences.general')}}</h4>
    <compound>
      <template #head>
        <h6 class="title">{{$t('preferences.autosave')}}:</h6>
      </template>
      <template #children>
        <bool
          :description="$t('preferences.autosave-enable')"
          :bool="autoSave"
          :onChange="value => onSelectChange('autoSave', value)"
        ></bool>
        <range
          :description="$t('preferences.auto-save-delay-after-edit')"
          :value="autoSaveDelay"
          :min="1000"
          :max="10000"
          unit="ms"
          :step="100"
          :onChange="value => onSelectChange('autoSaveDelay', value)"
        ></range>
      </template>
    </compound>

    <compound>
      <template #head>
        <h6 class="title">{{$t('preferences.window')}}:</h6>
      </template>
      <template #children>
        <cur-select
          v-if="!isOsx"
          :description="$t('preferences.title-bar-style')"
          :notes="$t('preferences.requires-restart')"
          :value="titleBarStyle"
          :options="titleBarStyleOptions"
          :onChange="value => onSelectChange('titleBarStyle', value)"
        ></cur-select>
        <bool
          :description="$t('preferences.hide-scrollbars')"
          :bool="hideScrollbar"
          :onChange="value => onSelectChange('hideScrollbar', value)"
        ></bool>
        <bool
          :description="$t('preferences.open-files-in-new-window')"
          :bool="openFilesInNewWindow"
          :onChange="value => onSelectChange('openFilesInNewWindow', value)"
        ></bool>
        <bool
          :description="$t('preferences.open-folders-in-new-window')"
          :bool="openFolderInNewWindow"
          :onChange="value => onSelectChange('openFolderInNewWindow', value)"
        ></bool>
        <cur-select
          :description="$t('preferences.zoom')"
          :value="zoom"
          :options="zoomOptions"
          :onChange="value => onSelectChange('zoom', value)"
        ></cur-select>
      </template>
    </compound>

    <compound>
      <template #head>
        <h6 class="title">{{$t('preferences.sidebar')}}:</h6>
      </template>
      <template #children>
        <bool
          :description="$t('preferences.wrap-text-in-table-of-contents')"
          :bool="wordWrapInToc"
          :onChange="value => onSelectChange('wordWrapInToc', value)"
        ></bool>

        <!-- TODO: The description is very bad and the entry isn't used by the editor. -->
        <cur-select
          :description="$t('preferences.sort-field-for-files-in-open-folders')"
          :value="fileSortBy"
          :options="fileSortByOptions"
          :onChange="value => onSelectChange('fileSortBy', value)"
          :disable="true"
        ></cur-select>
      </template>
    </compound>

    <compound>
      <template #head>
        <h6 class="title">{{$t('preferences.action-on-startup')}}:</h6>
      </template>
      <template #children>
        <section class="startup-action-ctrl">
          <el-radio-group v-model="startUpAction">
            <!--
              Hide "lastState" for now (#2064).
            <el-radio class="ag-underdevelop" label="lastState">Restore last editor session</el-radio>
            -->
            <el-radio label="folder" style="margin-bottom: 10px;">{{$t('preferences.open-the-default-directory')}}<span>: {{defaultDirectoryToOpen}}</span></el-radio>
            <el-button size="small" @click="selectDefaultDirectoryToOpen">{{$t('preferences.select-folder')}}</el-button>
            <el-radio label="blank">{{$t('preferences.open-a-blank-page')}}</el-radio>
          </el-radio-group>
        </section>
      </template>
    </compound>

    <compound>
      <template #head>
        <h6 class="title">{{$t('preferences.misc')}}: </h6>
      </template>
      <template #children>
        <cur-select
          :description="$t('preferences.user-interface-language')"
          :value="language"
          :options="languageOptions"
          :onChange="value => onSelectChange('language', value)"
          :notes="$t('preferences.requires-restart')"
          :disable="false"
        ></cur-select>
      </template>
    </compound>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Compound from '../common/compound'
import Range from '../common/range'
import CurSelect from '../common/select'
import Bool from '../common/bool'
import Separator from '../common/separator'
import { isOsx } from '@/util'

import {
  titleBarStyleOptions,
  zoomOptions,
  fileSortByOptions,
  languageOptions
} from './config'
import store from '@/store'
// import { i18n } from '@/main'

export default {
  components: {
    Compound,
    Bool,
    Range,
    CurSelect,
    Separator
  },
  data () {
    this.titleBarStyleOptions = titleBarStyleOptions
    this.zoomOptions = zoomOptions
    this.fileSortByOptions = fileSortByOptions
    this.languageOptions = languageOptions
    this.isOsx = isOsx
    return {}
  },
  computed: {
    ...mapState({
      autoSave: state => state.preferences.autoSave,
      autoSaveDelay: state => state.preferences.autoSaveDelay,
      titleBarStyle: state => state.preferences.titleBarStyle,
      defaultDirectoryToOpen: state => state.preferences.defaultDirectoryToOpen,
      openFilesInNewWindow: state => state.preferences.openFilesInNewWindow,
      openFolderInNewWindow: state => state.preferences.openFolderInNewWindow,
      zoom: state => state.preferences.zoom,
      hideScrollbar: state => state.preferences.hideScrollbar,
      wordWrapInToc: state => state.preferences.wordWrapInToc,
      fileSortBy: state => state.preferences.fileSortBy,
      language: state => state.preferences.language
    }),
    lxmtext: {
      get: function () {
        return store.state.language
      }
    },
    startUpAction: {
      get: function () {
        return this.$store.state.preferences.startUpAction
      },
      set: function (value) {
        const type = 'startUpAction'
        this.$store.dispatch('SET_SINGLE_PREFERENCE', { type, value })
      }
    }
  },
  methods: {
    onSelectChange (type, value) {
      this.$store.dispatch('SET_SINGLE_PREFERENCE', { type, value })
    },
    selectDefaultDirectoryToOpen () {
      this.$store.dispatch('SELECT_DEFAULT_DIRECTORY_TO_OPEN')
    }
  }
}
</script>

<style scoped>
  .pref-general {
    & .startup-action-ctrl {
      font-size: 14px;
      user-select: none;
      color: var(--editorColor);
      & .el-button--small {
        margin-left: 25px;
      }
      & label {
        display: block;
        margin: 20px 0;
      }
    }
  }
</style>
