<template>
	<div class="edit" v-class="{active: isActive }">
		<button v-on:click="check">Check</button>
		sd

	</div>
</template>

<style lang="scss" scoped>
.edit {
	display: none;
	position: absolute;
	top: 20vh;
	left: 5vw;
	right: 5vw;
	bottom: 20vh;
	z-index: 100;
	background-color: red;
}

.active {
	display: relative;
}
</style>

<script>
export default {
	props: ["uuid"],
	data() {
		return {
			isActive: true
		}
	},
	methods: {
		check: function () {
			console.log(this.uuid);
		}
	}
}
</script>>
