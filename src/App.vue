<template>
	<div id="app">
		<button class="button logout" @click="$keycloak.logoutFn" v-if="$keycloak.authenticated">Log out</button>
		<router-view/>
	</div>
</template>

<style>
@import "~bulma/css/bulma.css";
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}

body {
	padding: 5vh;
}

.logout {
	float: right;
}
</style>
