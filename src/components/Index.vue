<template>
  <div>
    <div>a: {{a}}</div>
    <div>b: {{b}}</div>
    <div>c: {{c}}</div>
    <div>count: {{count}}</div>
    <div>mod_a的str:{{str_a}}</div>
    <div>mod_b的str:{{str_b}}</div>
    <input type="button" value="a+5" @click="addA(5)">
    <input type="button" value="b+3" @click="addB(3)">
    <input type="button" value="Jack出现" @click="setOnline(3)">
    <input type="button" value="设置A" @click="set_a('aaa')">
    <input type="button" value="设置B" @click="set_b('bbb')"><br>
    <input type="button" value="显示隐藏" @click="showBox=!showBox">
    <transition name="fadeUp">
      <div class="box" v-if="showBox"></div>
    </transition>
    <transition-group name="bounce" tag="ul" class="list">
      <li v-for="item,index in listArr" :key="item">{{item}}<a href="#" @click="del2(index)">删除</a></li>
    </transition-group>
    <input type="button" value="添加一项" @click="listArr.push(Math.random())">
    <Table :fields="fields" :datas="onlineUsers" :parent="this"/>
    <Header />
  </div>
</template>

<script>

import Table from '@/components/common/Table'
import Cmp1 from '@/components/Cmp1'
import Header from '@/components/Header'
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'Index',
  data () {
    return {
      showBox: true,
      listArr: [12,32,36,11,78,90],
      fields: [
        {name: 'ID', text: 'ID'},
        {name: 'name', text: '姓名'},
        {name: 'age', text: '年龄'}
      ],
      datas: [
        {ID: 1,name: 'Jon',age: 18},
        {ID: 2,name: 'Tom',age: 28},
        {ID: 3,name: 'Jack',age: 38},
        {ID: 4,name: 'Jone',age: 22}
      ]
    }
  },
  created(){
    this.readUsers();
  },
  methods: {
    del(id){
      this.datas = this.datas.filter(data => data.ID != id);
    },
    del2(index){
      this.listArr.splice(index,1);
    },
    ...mapActions(['addA','addB','setOnline','readUsers']),
    ...mapActions({
      'set_a': 'mod_a.setStr',
      'set_b': 'mod_b.setStr'
    })
  },
  components: {
    Table,Cmp1,Header
  },
  computed: {
    ...mapState(['a','b','c','users']),
    ...mapGetters(['count','onlineUsers']),
    ...mapState({
      'str_a': state => state.mod_a.str,
      'str_b': state => state.mod_b.str
    })
    // count: {
    //   get(){
    //     return this.$store.getters.count;
    //   },
    //   set(){
    //     this.$store.dispatch('set_a', value-5);
    //     this.$store.dispatch('set_b', 5);
    //   }
    // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .box{
    background: #ccc;
    width: 100px;
    height: 100px;
    animation-duration: 1s;
  }
  .list{

  }
  .list li{
    width: 50px;
    height: 50px;
    list-style: none;
    background: #ccc;
    margin: 5px 0;
    animation-duration: 1s;
  }
</style>
