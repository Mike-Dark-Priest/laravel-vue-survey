import {createStore} from "vuex";

const store = createStore( {
  state:{
    user: {
      data: {},
      token: null    }
  },
  getter:{},
  actions:{},
  mutations:{
    logout: state => {
      state.user.data = {},
      state.user.token = null;
    }
  },
  modules:{}
} )

export default store;
