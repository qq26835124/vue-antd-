<template>
  <div class='tinymce'>
　　<!-- 富文本编辑组件 -->
    <Editor api-key="API_KEY" :init="{plugins: 'wordcount'}" v-model="content"></Editor>
  </div>
</template>

<script>
  import Editor from '@tinymce/tinymce-vue';
  export default {
    name: 'tinymce',
    data () {
      return {
        content: ''
      }
    },
    components: {Editor}
  }
</script>

<style lang="css" scoped>

</style>