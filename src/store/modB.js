export default {
  state: {
    str: 'store_b'
  },
  mutations: {
    'mod_b.setStr': function(state,s){
      state.str = s;
    }
  },
  actions: {
    'mod_b.setStr': function({commit},s){
      commit('mod_b.setStr',s);
    }
  }
}