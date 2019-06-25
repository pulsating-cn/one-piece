<template>
	<v-app id="inspire">
		<v-toolbar color="elevation-0" fixed app dense>
			<div class="nav">
				<router-link to="/">Home</router-link> |
				<router-link to="/appearance">Appearance</router-link> |
				<router-link to="/me">Me</router-link> |
				<router-link to="/one-piece">One-piece</router-link>
			</div>
		</v-toolbar>

		<v-navigation-drawer permanent mini-variant mini-variant-width="100" floating fixed app>
			<hello-world></hello-world>
		</v-navigation-drawer>
		
		<v-content>
			<router-view />
		</v-content>

	</v-app>
</template>

<script>
	import HelloWorld from './components/HelloWorld.vue'
	export default {
		name: 'App',
		components: {
			HelloWorld
		},
		data: () => ({
			left: false,
		}),
		methods: {
			choose_tile() {
				console.log(1);
			}
		}
	}
</script>

<style>
	.nav {}

	.nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	.nav a.router-link-exact-active {
		color: #42b983;
	}
</style>
