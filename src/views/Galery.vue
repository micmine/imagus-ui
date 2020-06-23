<template>
	<div id="galery">
		<form method="POST" enctype='multipart/form-data' action="http://localhost:8000/image/upload">
			<input type="file" name="image" required>
			<input type="hidden" name="redirect" value="http://localhost:8080">
			<input type="submit" value="Upload">
		</form>

		<li v-for="image in images" :key="image.uuid">
			<img @contextmenu.prevent="$refs.menu.open($event, { uuid: image.uuid })" :src="image.source"
				:alt="image.title">
		</li>

		<vue-context ref="menu">
			<template slot-scope="child">
				<li>
					<a @click.prevent="onClick($event.target.innerText, child.data)">
						edit
					</a>
				</li>
				<li>
					<a @click.prevent="onClick($event.target.innerText, child.data)">
						remove
					</a>
				</li>
			</template>
		</vue-context>
	</div>
</template>

<style lang="scss" scoped>
	li {
		list-style: none;

		img {
			width: 500px;
			z-index: 4;
		}

	}
</style>

<script>
	import axios from 'axios';
	import VueContext from 'vue-context';
	import 'vue-context/src/sass/vue-context.scss';

	export default {
		data() {
			return {
				"images": []
			}
		},
		components: {
			VueContext
		},
		methods: {
			onClick(text, uuid) {
				console.log(text, uuid);
				if (text === "edit") {
					//sd
				} else if (text === "remove") {
					axios.put("http://localhost:8000/image", {
						"uuid": uuid
					}).then((resp) => {
						console.log(resp.data);
					}).catch((error) => {
						console.error(error);
					});
				}
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