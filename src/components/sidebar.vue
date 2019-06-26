<template>
	<div>
		<v-flex xs12>
			<img :src="topImage" class="top-image"/>
		</v-flex>
		<div class="side-bar">
			<div style="display: flex;flex-direction: column;">
				<a class="a-bar" :class="{active: activeBar == bar.id}" @click="change_choose(bar.id)" href="javascript:;" v-for="bar of sideBar"
				 :key="bar.id">{{ bar.id }} . {{ bar.name }}</a>
			</div>
			
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				topImage: '/image/logo.jpg',
				sideContent: '',
				activeBar: 1,
				sideBar: []
			}
		},
		watch: {
			$route(to, from) { //监听路由变化
				this.setSideBar();
			}
		},
		created() {
			this.setSideBar();
		},
		methods: {
			change_choose(id) {
				this.activeBar = id
			},
			setSideBar() {
				switch (this.$route.path){
					case '/appearance':
						this.topImage = "/image/logo.jpg";
						this.sideBar = [{ id: 1, name: "蒙奇．D．路飞" },{ id: 2, name: "\"红发\" 香克斯" },{ id: 3, name: "酒店老板 卷乃" },{ id: 4, name: "山贼首领 日熊" }];
						break;
					default:
						this.sideBar = [];
						break;
				}
			},
		}
	}
</script>

<style>
	.side-bar {
		display: flex;
		flex-direction: column;
		align-items: center;
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
	.top-image{
		width: 100%;
		height: 100%;
	}
</style>
