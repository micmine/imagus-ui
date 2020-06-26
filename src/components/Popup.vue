<template>
	<div class="popup" v-bind:class="{notActive: !isActive }">	
		<img :src="this.source" v-on:click="hide">
	</div>
</template>

<style lang="scss" scoped>
.notActive {
	display: none;
}

.popup {
	position: absolute;
	top: 5vh;
	left: 5vw;
	z-index: 100;
}
</style>

<script>
export default {
	props: ["source", "isActive"],
	data() {
		return {
			data: {
				image: {}
			}
		}
	},
	mounted: function () {
		if (this.uuid == "") {
			this.isActive = false
		} else {
			this.isActive = true
		}
	},
	methods: {
		hide: function () {
			this.isActive = false
		},
	},
}
</script>>
