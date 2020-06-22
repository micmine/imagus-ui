<template>
	<div id="galery">
		<li v-for="image in images" :key="image.uuid">
			<img :src="image.source">
		</li>
	</div>
</template>

<script>
	import axios from 'axios';

	let images;

	axios.get("http://localhost:8000/image/list").then((resp) => {
		images = resp.data;
		console.log(images);
	}).catch((error) => {
		console.error(error);
	});

	export default {
		data() {
			return {
				"images": images
			}
		}
	}

</script>