import Vue from 'vue'
import Vuex from 'vuex'
//import mutations from './module-example'
//import actions from './module-example/actions'
import getters from './module-example/getters'
import state from './module-example/state'
// import example from './module-example'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
/*    state:{
      msgvl:"Ssdfsdf",
      lotterywinners:[],
      trxhash:''
    },actions,getters,
    
  */state,
  actions:{
    addtxthash(context,msg){
      context.commit("settxthash",msg)
    }
  },mutations:{
    settxthash (state,msg) {
      state.trxhash=msg
   
  }
  }
  ,getters,
       modules: {      
      
      // example
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEV
  })

  return Store
}
