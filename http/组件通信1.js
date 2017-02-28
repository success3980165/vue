var bus = new Vue() //这个是两个组件之间的通信，需要在同一个vue的实例下，所以才建一个bus的实例

Vue.component('toggle-btn',{ //first 组件先要通过点击button，调用emmitToggle的方法，在emmitToggle的方法中通过$emit发出信号到html的toogle-btn的标签中。之后通过v-on的属性完成监听返回到vue的实例去也就是app中
	template: '\
        <button \
            class="btn btn-info" \
            v-on:click="emmitToggle">Toggle Box</button>\
    ',
	methods: {
		emmitToggle:function() {
			//this.$emit('toggle-box')
			bus.$emit('anything-you-want','one','two')
		}
	}
})

Vue.component('listener',{   //俩个组件相互之间传值呢通过$emit发出信号。另个组件通过$on接受信号,$on后面可以有多个参数
	template:'<h5>sibling component</h5>',
	mounted: function() {
		bus.$on('anything-you-want',function(data1,data2) {
			// alert('listening in anything-you-want')
			console.log(data1)
			console.log(data2)
		})
	}
})

var app = new Vue({  //之后在vue中调用监听到的方法做出改变  
	el:'#app',        //总结：就是组件通过$emit发出信号，vue实例通过v-on接受信号改变内容
	data: {
		showBox: true
	},
	methods: {
		toggleBox:function() {
			this.showBox = !this.showBox
		}
	}
})