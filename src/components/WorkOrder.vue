<template lang="html">
  <div>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <OrderSlider />
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <Breadcrumb />
        <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <Router-view></Router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </div>
</template>

<script>
  import OrderSlider from '@/components/OrderSlider'
  import Breadcrumb from '@/components/common/Breadcrumb'
  export default {
    data(){
      return {

      }
    },
    methods: {

    },
    components: {
      OrderSlider,Breadcrumb
    }
  }
</script>

<style lang="css" scoped>

</style>