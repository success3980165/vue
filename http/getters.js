const store = new Vuex.store({
	state:{
		todos:[
			{id:1,text:'',done:true},
			{id:2,text:'',done:false}
		]
	},
	getters: {
		doneTodos:state => {
			return state.store.filter(todo => todo.done)
		}
	}
})



