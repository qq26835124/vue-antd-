<template lang="html">
  <div>
    <a-layout>
      <a-layout-content>
        <a-list
          :grid="{ gutter: 16, xs: 1, sm: 2, md: 4, lg: 4, xl: 6, xxl: 3 }"
          :dataSource="data"
        >
          <a-list-item slot="renderItem" slot-scope="item, index">
            <a-card :title="item.title">{{item.text}}</a-card>
          </a-list-item>
        </a-list>
      </a-layout-content>
    </a-layout>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data(){
      return {
        data: []
      }
    },
    async created(){

      try{
        let res = await axios.get('/api/data');
        this.data = res.data.list;
      }catch(e){

      }
    }
  }
</script>

<style lang="css" scoped>

</style>
