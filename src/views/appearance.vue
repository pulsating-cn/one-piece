<template>
	<div class="appearance">
		<div class="character">
			<div class="description">

			</div>
			<img class="character-image" :src="characterImage" />


		</div>
	</div>
</template>

<script>
	// const characterMap = {
	// 	1: {image: '/image/sort/1.jpg'},
	// 	2: {image: '/image/sort/2.jpg'},
	// 	3: {image: '/image/sort/3.jpg'},
	// 	4: {image: '/image/sort/4.jpg'},
	// }
	export default {
		data() {
			return {
				characterImage: ''
			}
		},
		watch: {
			
		},
		computed: {
			
		},
		methods: {
			
		},
		created() {
			let characterId = this.$bus.activeSideBarIndex;
			this.$bus.$on('activeCharecterChanged',res=> {
				characterId = this.$bus.activeSideBarIndex
				this.characterImage = '/image/sort/'+ characterId + '.jpg';
			})
			this.characterImage = '/image/sort/'+ characterId + '.jpg';
		},
		destroyed() {
			this.$bus.$off('activeCharecterChanged')
		}
	}
</script>

<style scoped>
	.appearance {
		display: flex;
		flex-direction: row;
	}

	.character {
		padding: 1rem;
		
		left: 30%;
		width: 70%;
		height: 100%;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.character-image {
		margin-right: 10rem;
		
		width: 40rem;
		height: 100%;
		border-radius: .5rem;
	}

	.description {
		/* flex: 2; */
		width: 40rem;
	}
</style>
