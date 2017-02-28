define(function(require,exports,module) {
	require.async('../a',function(b)) {
		b.dosomething();
	}
	require.async(['../a','../b'],function(a,b) {
		a.dosomething();
		b.dosomething();
	})
})

define(function(require,exports,module) {
	
})