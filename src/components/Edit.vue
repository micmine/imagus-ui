<template>
	<div class="edit" v-bind:class="{notActive: !isActive }">
		<button v-on:click="check">Check</button>
		sd

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
	beforeMount: function () {
		console.log(this.uuid)
		if (this.uuid == "") {
			this.isActive = false
		} else {
			this.isActive = true
		}
	},
	methods: {
		check: function () {
			console.log(this.uuid);
		}
	}
}
</script>>
