<template lang="html">
  <div>
    <a-layout-header class="header">
      <div class="logo" />
      <a-menu
        theme="dark"
        mode="horizontal"
        :defaultSelectedKeys="[curPath]"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="home" @click="menuClick">首页</a-menu-item>
        <a-menu-item key="workbench" @click="menuClick">工作台</a-menu-item>
        <a-menu-item key="workOrder" @click="menuClick">工单</a-menu-item>
        <a-menu-item key="editors" @click="menuClick">编辑器</a-menu-item>
      </a-menu>
    </a-layout-header>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        curPath: 'home'
      }
    },
    created(){
      console.log(this.$router);
      console.log('this:',this)
      this.curPath = this.$router.currentRoute.matched[0].name;
    },
    methods: {
      menuClick(item){
        console.log(item);
        this.$router.push({name: item.key});
      }
    }
  }
</script>

<style lang="css" scoped>

</style>