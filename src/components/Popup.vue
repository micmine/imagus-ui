<template>
	<div class="popup" v-bind:class="{notActive: !isActive }">	
		<img :src="source" v-on:click="hide">
	</div>
</template>

<style lang="scss" scoped>
.notActive {
	display: none;
}

.popup {
	position: absolute;
	top: 5vh;
	left: 15%;
	right: 15%;
	z-index: 100;

	img {
		width: 80%;
		height: 80%;
	}
}
</style>

<script>
import store from "../store.js";

export default {
	computed: {
		isActive: function () {
			return store.state.popup.isActive;
		},
		source: function () {
			return store.state.popup.source;
		}
	},
	methods: {
		hide: function () {
			store.state.popup.isActive = false;
		},
	},
}
</script>>
