<template>
	<div class="edit" v-bind:class="{notActive: !isActive }">
		

		<button v-on:click="submit">Submit</button>
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
</style>

<script>
export default {
	props: ["uuid"],
	data() {
		return {
			isActive: true,
			data: {}
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
		submit: function () {
			//this.isActive = false
		},
		check: function () {
			console.log(this.uuid);
			if (this.uuid == "") {
				this.isActive = false
			} else {
				this.isActive = true
			}
		}
	},
	watch: {
		uuid: function () {
			this.check()
		}
	}
}
</script>>
