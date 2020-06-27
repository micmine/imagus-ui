<template>
	<div id="app">
		<nav class="navbar" role="navigation" aria-label="main navigation">
			<div id="navbarBasicExample" class="navbar-menu">
				<div class="navbar-start">
					<a class="navbar-item" href="/#/">
						Home
					</a>

					<a class="navbar-item" href="/#/deleted">
						Deleted
					</a>
				</div>

				<div class="navbar-end">
					<div class="navbar-item">
						<div class="buttons">
							<a class="button is-light" @click="$keycloak.logoutFn" v-if="$keycloak.authenticated">
								Log out
							</a>
						</div>
					</div>
				</div>
			</div>
		</nav>
		<div class="container">
			<rotate-square5 class="spinner" v-if="loading"></rotate-square5>
			<router-view/>
		</div>
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

.app {
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
