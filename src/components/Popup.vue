<template>
	<div class="edit" v-bind:class="{notActive: !isActive }">	
		<img :src="this.source" v-on:click="hide">
	</div>
</template>

<style lang="scss" scoped>
.notActive {
	display: none;
}

.edit {
	position: absolute;
	top: 0vh;
	left: 0vw;
	z-index: 100;
}
</style>

<script>
export default {
	props: ["source"],
	data() {
		return {
			isActive: false,
			data: {}
		}
	},
	mounted: function () {
		this.check();
	},
	methods: {
		hide: function () {
			//sd
		},
		check: function () {
			console.log(this.source);
			if (this.source == "") {
				this.isActive = false
			} else {
				this.isActive = true
			}
		}
	},
	watch: {
		source: function () {
			this.check();
		}
	}
}
</script>>
