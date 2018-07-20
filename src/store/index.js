import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex);
import state from "./state"
import mutations from "./mutation"
export default new Vuex.Store({
  state,
  // actions:{
  //   changeCity(ctx,city){
  //     console.log(city);
  //     //acitons通过summit()将事件传递
  //     ctx.commit("changeCity",city);
  //   }
  // },
  mutations

})
