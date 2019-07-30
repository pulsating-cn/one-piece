<template>
	<v-container id="dropdown-example">
		<v-layout row wrap>
			<v-flex xs12 sm4>
				<v-layout row>
					<v-img class="character-image" :src="characterImage"></v-img>
				</v-layout>
			</v-flex>

			<div class="character-detail">
				<div class="name">
					<span>蒙奇·D·路飞</span>
					<span>モンキー・D・ルフィ</span>
					<span>Monkey·D·Luffy</span>
				</div>
				<div class="detail-item">
					<span class="detail-title">外号:</span>
					<span class="detail-description">“草帽小子”路飞（麦わらのルフィ）第5位海上皇帝（５番目の「海の皇帝」）</span>
				</div>
				<div class="detail-item">
					<span class="detail-title">出生地:</span>
					<span class="detail-description">东海风筝村</span>
				</div>
				<div class="detail-item">
					<span class="detail-title">职业/身份:</span>
					<span class="detail-description">海贼</span>
				</div>
				<div class="detail-item">
					<span class="detail-title">目标/梦想:</span>
					<span class="detail-description">成为海贼王 <br> 得到ONE PIECE <br> 打倒全部的四皇与海军大将 <br> 与“红发”杰克斯再度见面 <br> 追上艾斯的脚步（艾斯过世前）</span>
				</div>
				<div class="title">
					<span>技能资料</span>
				</div>
				<div class="detail-item">
					<span class="detail-title">恶魔果实:</span>
					<span class="detail-description">超人系“橡胶果实”</span>
				</div>
				<div class="detail-item">
					<span class="detail-title">能力:</span>
					<span class="detail-description">二档、三档、四档 <br> 见闻色霸气、武装色霸气、霸王色霸气 <br> 聆听万物之声</span>
				</div>
				<div class="title">
					<span>海贼资料</span>
				</div>
				<div class="detail-item">
					<span class="detail-title">称号:</span>
					<span class="detail-description">草帽小子</span>
				</div>
				<div class="detail-item">
					<span class="detail-title">海贼团:</span>
					<span class="detail-description">草帽海贼团</span>
				</div>
				<div class="detail-item">
					<span class="detail-title">职位:</span>
					<span class="detail-description">船长</span>
				</div>
				<div class="detail-item">
					<span class="detail-title">悬赏金:</span>
					<span class="detail-description">
						3,000万贝里（阿龙事件）
						<br> → 1亿贝里（阿拉巴斯坦王国事件）
						<br> → 3亿贝里（司法岛事件）
						<br> → 4亿贝里（马林梵多事件）
						<br> → 5亿贝里（德莱斯罗兹事件）
						<br> → 15亿贝里（圆蛋糕岛事件）
					</span>
				</div>
			</div>
		</v-layout>
	</v-container>
</template>

<script>
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
			this.$bus.$on('activeCharecterChanged', res => {
				console.log(1);
				characterId = this.$bus.activeSideBarIndex
				this.characterImage = '/image/sort/' + characterId + '.jpg';
			})
			this.characterImage = '/image/sort/' + characterId + '.jpg';
		},
		destroyed() {
			this.$bus.$off('activeCharecterChanged')
		}
	}
</script>

<style scoped>
	.character-detail {
		padding: 20px 1%;
		display: flex;
		flex-direction: column;
		flex: 1;
	}

	.detail-item {
		display: flex;
		flex-direction: row;
		margin: 2px 0px;
	}

	.detail-description {
		flex: 1;
	}

	.title {
		background-color: #42b983;
		width: auto;
		height: 25px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}

	.title span {
		font-size: 14px;
		color: #FFFFFF;
		font-weight: bold;
	}

	.character-detail .name {
		margin-bottom: 30px;
	}

	.character-detail .name span {
		display: block;
		font-weight: bold;
		font-size: 14px;
	}

	.detail-title {
		width: 80px;
		font-weight: bold;
	}
</style>
