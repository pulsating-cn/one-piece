<template>
	<div class="poster">
		<v-layout align-center justify-center v-for="i of 20" :key="i">
			<v-img :src="'/image/poster/'+i+'.jpg'"></v-img>
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
				
			}
		},
		created() {
			
		},
		mounted() {
			
		},
		methods: {

		}
	}
</script>


<style>

</style>
