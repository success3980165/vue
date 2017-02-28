Vue.component('one',{
	template:'<div>vue for everyone</div>'
})

Vue.component('two',{
	template:'<div>{{ listItem.name }}</div>',
	data :function() {
		return {
			listItem: window.games[0]
		}
	}
})

Vue.component('three',{
	props:['userName'],
	template:'<div>{{ upperName }}</div>',
	computed:{
		upperName:function() {
			return this.userName.trim().toUpperCase()
		}
	}

})
var app = new Vue({
	el:'#app',
	data:{
		userInput:''
	}
})