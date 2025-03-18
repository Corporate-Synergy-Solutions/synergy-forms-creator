<template>
  <SurveyCreatorComponent :model="creator" />
</template>
<script setup>
import { onMounted } from 'vue'
import { SurveyCreatorModel } from 'survey-creator-core'
import { SurveyCreatorComponent } from 'survey-creator-vue'
import 'survey-core/survey-core.min.css'
import 'survey-creator-core/survey-creator-core.min.css'
import SurveyCreatorTheme from 'survey-creator-core/themes'
import { registerCreatorTheme } from 'survey-creator-core'
import { setLicenseKey } from 'survey-core'

registerCreatorTheme(SurveyCreatorTheme) // Add predefined Survey Creator UI themes

const emits = defineEmits(['save'])
const props = defineProps({
  componentBind: { type: String },
  licenseKey: { type: String },
})

setLicenseKey(props.licenseKey)

class SurveyTemplatesTabPlugin {
  constructor(creator) {
    this.model = creator
  }

  // Do nothing when the tab is activated or deactivated
  activate() { }
  deactivate() {
    return true
  }
}

const options = {
  showLogicTab: true,
  showJSONEditorTab: true,
  showThemeTab: true,
}
const creator = new SurveyCreatorModel(options)
new SurveyTemplatesTabPlugin(creator)

creator.saveSurveyFunc = function (saveNo, callback) {
  emits('save', JSON.parse(creator.text))
  callback(saveNo, true)
}

onMounted(() => {
  const json = typeof props.componentBind === 'string' ? props.componentBind : JSON.stringify(props.componentBind);
  creator.text = json
})

</script>
