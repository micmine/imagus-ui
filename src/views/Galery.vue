<template>
	<div id="galery">
		<li v-for="image in images" :key="image.uuid">
			<img :src="image.source" :alt="image.title">
		</li>
	</div>
</template>

<script>
import axios from 'axios';

export default {
	data() {
		return {
			"images": []
		}
	},
	beforeCreate() {
		axios.get("http://localhost:8000/image/list").then((resp) => {
			this.images = resp.data;
			console.log(resp.data);
		}).catch((error) => {
			console.error(error);
		});
	}
}

</script>
