<template>
	<div style="height: auto; padding-top: .5rem;">
		
		<img src="/image/main-bg/bg-xiuxiu.jpg" class="top-image"/>
		
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
				sideContent: '',
				activeBar: 1,
				sideBar: []
			}
		},
		watch: {
			$route(to, from) { //监听路由变化
				this.setSideBar();
			},
			activeBar(val) {
				this.$bus.activeSideBarIndex = val;
				this.$bus.$emit('activeCharecterChanged')
			}
		},
		created() {
			this.setSideBar();
		},
		methods: {
			change_choose(id) {
				this.activeBar = id;
			},
			setSideBar() {
				let path = this.$route.path;
				switch (path){
					case '/appearance':
						this.sideBar = [{ id: 1, name: "蒙奇．D．路飞" },{ id: 2, name: "\"红发\" 香克斯" },{ id: 3, name: "酒店老板 卷乃" },{ id: 4, name: "山贼首领 日熊" },{ id: 5, name: "\"金刚棒\" 爱比达" }];
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
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.bar-area {}

	.a-bar {
		font-weight: bold;
		font-size: 10px;
		color: #2c3e50;
		line-height: 1.5rem;
	}

	.active {
		color: coral;
	}
	.top-image{
		position: relative;
		border-radius: 5px;
		left: 10%;
		width: 80%;
		margin: 0 auto;
	}
</style>
