<template lang="html">
  <div>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <Slider />
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <Breadcrumb />
        <Content />
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
  import Breadcrumb from '@/components/common/Breadcrumb'
  import Slider from '@/components/Slider'
  import Content from '@/components/Content'

  export default {
    data(){
      return {
      }
    },
    components: {
      Slider, Breadcrumb, Content
    }
  }
</script>

<style lang="css" scoped>

</style>