<template>
	<div class="edit" v-bind:class="{notActive: !isActive}">
		<div class="from">
			<input class="input" type="text" v-model="image.title" placeholder="title">

			<div class="field is-grouped action">
				<div class="control">
					<button class="button is-link" v-on:click="submit">Submit</button>
				</div>
				<div class="control">
					<button class="button is-link is-light" v-on:click="hide">Cancel</button>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.notActive {
	display: none;
}

.edit {
	position: absolute;
	top: 20vh;
	left: 5vw;
	right: 5vw;
	z-index: 100;
	background-color: #282C34;
	border-radius: 5px;

	.from {
		margin-top: 1vh;
		margin-left: 1vw;
		margin-right: 1vw;
		margin-bottom: 1vh;

		.action {
			padding-top: 1vh;
		}
	}
}
</style>

<script>
import store from "../store";

export default {
	computed: {
		uuid: function () {
			return store.state.edit.uuid;
		},
		isActive: function () {
			return store.state.edit.isActive;
		},
		image: function () {
			return store.state.edit.image;
		}
	},
	methods: {
		submit: function () {
			store.dispatch("saveEdit");
			store.dispatch("fetchImages");
			this.hide();
		},
		hide: function () {
			store.state.edit.isActive = false;
		},
		load: function () {
			store.dispatch("fetchEdit");
		},
	},
	watch: {
		uuid: function () {
			this.load();
		}
	}
}
</script>>
