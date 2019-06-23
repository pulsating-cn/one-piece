<template>
	<div class="appearance">
		<div class="side-bar">
			<div class="bar-area">
				<a class="a-bar" :class="{active: activeBar == bar.id}" @click="change_choose(bar.id)" href="javascript:;" v-for="bar of sideBar"
				 :key="bar.id"># {{ bar.id }} . {{ bar.name }}</a>
			</div>
		</div>
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
				activeBar: 1,
				sideBar: [{
						id: 1,
						name: "蒙奇．D．路飞"
					},
					{
						id: 2,
						name: "\"红发\" 香克斯"
					},
					{
						id: 3,
						name: "酒店老板 卷乃"
					},
					{
						id: 4,
						name: "山贼首领 日熊"
					},
				]
			}
		},
		computed: {

		},
		methods: {
			change_choose(id) {
				this.activeBar = id
			}
		},
	}
</script>

<style scoped>
	.appearance {
		display: flex;
		flex-direction: row;
	}

	.side-bar {
		width: 30%;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 10rem;
	}

	.bar-area {
		display: flex;
		flex-direction: column;
	}

	.a-bar {
		font-weight: bold;
		color: #2c3e50;
		line-height: 1.5rem;
		margin: .5rem;
	}

	.active {
		color: coral;
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
