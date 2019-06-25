<template>
	<div>
		<v-flex xs12>
			<v-img :src="require('../assets/image/main-bg/bg-lf-xks.jpg')"></v-img>
		</v-flex>
		<div class="side-bar">
			<a class="a-bar" :class="{active: activeBar == bar.id}" @click="change_choose(bar.id)" href="javascript:;" v-for="bar of sideBar"
			 :key="bar.id">{{ bar.id }} . {{ bar.name }}</a>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				sideContent: '',
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
		watch: {
			$route(to, from) { //监听路由变化
				console.log(this.$route.path);
			}
		},
		methods: {
			change_choose(id) {
				this.activeBar = id
			}
		}
	}
</script>

<style>
	.side-bar {

		display: flex;
		flex-direction: column;

		margin-top: 5rem;
	}

	.bar-area {}

	.a-bar {
		font-weight: bold;
		font-size: .4rem;
		color: #2c3e50;
		line-height: 2rem;
	}

	.active {
		color: coral;
	}
</style>
