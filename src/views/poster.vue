<template>
	<div class="poster">
		<v-layout align-center justify-center>
			<v-img src="/image/poster/3bro.jpg"></v-img>
		</v-layout>
	</div>
</template>


<script>
	export default {
		name: 'poster',
		components: {

		},
		data() {
			return {
				// screenWidth: document.body.clientWidth,
			}
		},
		created() {
			console.log(this.screenWidth);
		},
		mounted() {
			// const that = this;
			// window.onresize = () => {
			// 	return (() => {
			// 		window.screenWidth = document.body.clientWidth;
			// 		that.screenWidth = window.screenWidth;
			// 		console.log(that.screenWidth);
			// 	})()
			// }
		},
		methods: {

		}
	}
</script>


<style>

</style>
