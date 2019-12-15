import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

let store =  new Vuex.Store({
	state: {
		user: null
	},
	mutations: {
		setUser(state, value) {
			state.user = value
		}
	},
	getters: {

	}
})
export default store
