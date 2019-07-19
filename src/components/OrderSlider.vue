<template lang="html">
  <div>
    <a-menu
      :defaultSelectedKeys="[curPath]"
      :defaultOpenKeys="['sub1']"
      mode="inline"
      theme="dark"
      :inlineCollapsed="collapsed"
    >
      <a-menu-item key="searchForm" @click="menuClick">
        <a-icon type="pie-chart" />
        <span>查询表单</span>
      </a-menu-item>
      <a-menu-item key="searchForm2" @click="menuClick">
        <a-icon type="desktop" />
        <span>查询表单2</span>
      </a-menu-item>
      <a-menu-item key="searchForm3" @click="menuClick">
        <a-icon type="inbox" />
        <span>查询表单3</span>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        collapsed: false,
        curPath: 'searchForm'
      }
    },
    created(){
      console.log(this.$router);
      console.log('this:',this)
      this.curPath = this.$router.currentRoute.name;
    },
    methods: {
      toggleCollapsed () {
        this.collapsed = !this.collapsed
      },
      menuClick(item){
        console.log(item);
        this.$router.push({name:item.key});
      }
    }
  }
</script>

<style lang="css" scoped>

</style>