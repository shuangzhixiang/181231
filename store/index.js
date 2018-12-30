import Vue from "vue"
import Vuex from "vuex"
import 'es6-promise/auto'  //兼容IE底版本 代码添加到你使用 Vuex 之前的一个地方
Vue.use(Vuex);  //使用VUEX 
import * as mutationTypes from "../store/mutationTypes"

//w创建并导出 vuex的 store
 
export default function(){
    const store = new Vuex.Store({
        state:{
            counts:10
        },
        mutations:{
            [mutationTypes.ADD](state, num){
                state.counts += num
            }
        }
    })
    return store;   // return 近回状态值
}