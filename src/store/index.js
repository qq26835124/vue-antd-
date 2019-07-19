import Vue from 'vue'
import Vuex from 'vuex'
import ModA from './modA'
import ModB from './modB'

//添加到Vue身上
Vue.use(Vuex)

export default new Vuex.Store({
  strict: process.env.NODE_ENV!='production',   //严格模式(防止直接去修改state)
  state: {
    a: 13,b:5,c:1,
    users: [
      {ID: 1,name: 'Jon',age: 18,online:true},
      {ID: 2,name: 'Tom',age: 28,online:true},
      {ID: 3,name: 'Jack',age: 38,online:false},
      {ID: 4,name: 'Jone',age: 22,online:true}
    ]
  },
  mutations: {
    addA(state,n){
      state.a += n;
    },
    addB(state,n){
      state.b += n;
    },
    setOnline(state,id){
      state.users.forEach(user => {
        if(user.ID == id){
          user.online = true;
        }
      })
    },
    setUsers(state,users){
      state.users = users;
    }
  },
  actions: {
    addA({commit},n){
      commit('addA',n);
    },
    addB({commit},n){
      commit('addB',n);
    },
    setOnline({commit},id){
      commit('setOnline',id);
    },
    async readUsers({commit}){
      let res = await fetch('http://localhost:8000/user.txt');
      let users = await res.json();

      console.log(users);
      commit('setUsers',users);
    }
  },
  getters: {
    count(state){
      return state.a + state.b;
    },
    onlineUsers(state){
      return state.users.filter(user => user.online);
    }
  },
  modules: {
    mod_a: ModA,
    mod_b: ModB
  }
})