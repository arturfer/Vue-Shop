import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [],
    productsInBag: []
  },
  mutations: {
    mutationLoad(state, prodList) {
      state.products = prodList
    },
    addToBag(state, item) {
      state.productsInBag.push(item)
      localStorage.setItem('productsInBag', JSON.stringify(state.productsInBag))
    },
    removeFromBag(state, itemId) {
      let updatedBag = state.productsInBag.filter(el=> el.id !== itemId);
      state.productsInBag = updatedBag;
    },
    loadBag(state, bag) {
      state.productsInBag = bag
    },

  },
  actions: {

    loadProducts({ commit }) {
      axios.get("https://fakestoreapi.com/products").then(res => {
        commit('mutationLoad', res.data)
      }) 
    },

    loadBag({ commit }) {
      if(localStorage.getItem('productsInBag',)){
        commit('loadBag', JSON.parse(localStorage.getItem("productsInBag")))
      }
    },

    addToBag({ commit }, item) {
      commit('addToBag', item)
    },
    removeFromBag({ commit }, itemId) {
      if(confirm('Você deseja realmente remover este item?')){
        commit('removeFromBag', itemId)
      }
    }

  },
  modules: {
  }
})
