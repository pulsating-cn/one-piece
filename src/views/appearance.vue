<template>
	<div class="appearance">
		<div class="character">
			<div class="description">

			</div>
			<img class="character-image" src="../assets/image/sort/7.jpg" />


		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		computed: {

		},
		methods: {
			
		},
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
