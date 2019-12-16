<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		onError: function(err) {
			console.error('App onError',err)
		},
		onUniNViewMessage: function() {
			console.log('App onUniNViewMessage')
		},
		globalData: {
			test: 'asd'
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
