import { ref } from 'vue';
import { createStore } from 'vuex'

export default createStore({
  state: {
    count : 0,
    color : 'blue'
  },
  getters: {
    squareCount(state) {
        return state.count * state.count
      }
  },
  mutations: {
   increaseCount(state){
      state.count++
    },
   decreaseCount(state){
      state.count--
    }
  },
  actions: {
  },
  modules: {
  }
})
