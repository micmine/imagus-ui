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
import axios from 'axios';

export default {
	props: ["uuid", "isActive"],
	data() {
		return {
			data: {
				image: {}
			}
		}
	},
	beforeUpdate: function () {
		console.log({ data:  { "uuid": this.uuid } });
		axios({
			method: "get",
			url: "http://localhost:8000/image",
			params: { 
				uuid: this.uuid 
			}
		}).then((resp) => {
				this.image = resp.data;
				console.log(resp.data);
			}).catch((error) => {
				console.error(error);
			});
	},
	methods: {
		submit: function () {
			this.isActive = false
		},
	},
}
</script>>
