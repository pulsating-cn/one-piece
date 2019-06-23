<template>
	<div id="app">
		<div class="logo-div">
			<img class="logo" src="@/assets/image/logo.jpg" />
		</div>
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/appearance">Appearance</router-link> |
			<router-link to="/me">me</router-link> |
			<router-link to="/one-piece">One-piece</router-link> 
		</div>
		<router-view />
	</div>
</template>

<style>

	* {
		padding: 0;
		margin: 0;
	}
	.logo {
		width: 23rem;
	}
	#app {
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		color: #2c3e50;
	}
	.logo-div {
		padding-top: 10px;
		text-align: center;
	}
	#nav {
		padding: 5px;
		text-align: center;
	}

	#nav a {
		font-weight: bold;
		color: #2c3e50;
	}

	#nav a.router-link-exact-active {
		color: #42b983;
	}
</style>
