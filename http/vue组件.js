Vue.component('one',{
	template:'<div>vue 2 for everyone</div>'
})

Vue.component('two',{
	template:'<div>{{ listItem.name }}</div>',
	data:function() {
		return {
			listItem:window.games[0]
		}
	}
})


Vue.component('three',{
	template:'<div><slot></slot></div>'
})


Vue.component('four', {
	props:['userName'], //从user-name中拿到的jone  之前html中user-name='jone'
	template:'<div>{{ upperName }}</div>',
	computed: {
		upperName:function() {
			return this.userName.trim().toUpperCase()
		}
	}
})


Vue.component('five',{ //这里是conponent的嵌套
	template:
	'<ul> 
		<three v-for="game in games">{{ game.name }}</three>
	</ul>',
	data: function() {
		return{
			games: window.games
		}
	}
})

var app = new Vue({
	el:'#app',
	data: {
		userInput: ''
	}
})