<template>
	<div id="app">
		<rotate-square5 class="spinner" v-if="loading"></rotate-square5>
		<button class="button logout" @click="$keycloak.logoutFn" v-if="$keycloak.authenticated">Log out</button>
		<router-view/>
	</div>
</template>

<style lang="scss">
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

.spinner {
	position: fixed;
	top: 20vh;
	left: 49%;
	right: 5vw;
	z-index: 100;
	background-color: white;
	padding: 20px;
	border-radius: 10px;
}
</style>

<script>
import {RotateSquare5} from "vue-loading-spinner";
import store from "./store";

export default {
	computed: {
		loading: function () {
			return store.state.loadingStatus;
		}
	},
	components: {
		RotateSquare5
	}
	
}
</script>>
