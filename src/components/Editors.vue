<template lang="html">
  <div>
    <a-layout>
      <a-layout-content :style="{ margin: '12px 8px', padding: '20px', background: '#fff', minHeight: '280px' }">
        <div class="tabs">
          <a-radio-group v-model="editorType" :style="{ marginBottom: '8px' }">
            <a-radio-button value="markDown">MarkDown编辑器</a-radio-button>
            <a-radio-button value="editor">富文本编辑器</a-radio-button>
          </a-radio-group>
        </div>
        <div v-if="editorType=='markDown'">
          <mavon-editor v-model="value" />
        </div>
        <div v-if="editorType=='editor'">
          <Editor />
        </div>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
  import Editor from '@/components/common/Editor'
  export default {
    data(){
      return {
        value: '',
        editorType: 'markDown'
      }
    },
    components: {
      Editor
    },
    methods: {
      callback (key) {
        console.log(key)
      }
    }
  }
</script>

<style lang="css" scoped>

</style>