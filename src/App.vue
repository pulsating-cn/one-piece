<template>
	<v-app id="inspire">
		<v-toolbar color="elevation-0" fixed app dense>
			<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
			<div class="nav">
				<router-link to="/">Home</router-link> |
				<router-link to="/appearance">Appearance</router-link> |
				<router-link to="/me">Me</router-link> |
				<router-link to="/one-piece">One-piece</router-link>
			</div>
		</v-toolbar>

		<v-navigation-drawer v-model="drawer" mini-variant mini-variant-width="130" floating fixed app>
			<sidebar></sidebar>
		</v-navigation-drawer>
		
		<v-content>
			<router-view />
		</v-content>

	</v-app>
</template>

<script>
	import sidebar from './components/sidebar.vue'
	export default {
		name: 'App',
		components: {
			sidebar
		},
		data: () => ({
			drawer: true
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
