// const store = new Vuex.store({
// 	state:{
// 		count : 0
// 	},
// 	mutation: {
// 		increment(state) {
// 			state.count++
// 		}
// 	}
// })

// store.commit('increment')
// console.log(store.state.count)

const store = new Vuex.store({
	state: {
		count:0
	},
	mutation: {
		increment(state) {
			state.count++
		}
	},
	actions: {
		increment(context) {
			context.commit('increment')
		}
	}
})