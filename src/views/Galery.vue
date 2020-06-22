<template>
	<div id="galery">
		<form method="POST" enctype='multipart/form-data' action="http://localhost:8000/image/upload">
			<input type="file" name="image" required>
			<input type="hidden" name="redirect" value="http://localhost:8080">
			<input type="submit" value="Upload">
		</form>

		<li v-for="image in images" :key="image.uuid">
			<img :src="image.source" :alt="image.title">
		</li>
	</div>
</template>

<style lang="scss" scoped>
li {
	list-style: none;

	img {
		width: 500px;
		z-index: 4;

		-webkit-user-drag: none;
		-khtml-user-drag: none;
		-moz-user-drag: none;
		-o-user-drag: none;
		user-drag: none;
	}

	img:active {
		display: relative;
		top: 50px;
		width: 80%;
		z-index: 5;
	}
}
</style>

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
