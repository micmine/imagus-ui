<template>
	<div id="galery">
		<Edit v-bind:uuid.sync="edit"></Edit>

		<form method="POST" enctype='multipart/form-data' action="http://localhost:8000/image/upload">
			<input class="input" type="text" name="title" placeholder="title" required>
			<div class="file">
				<label class="file-label">
					<input class="file-input" type="file" name="image" required>
					<span class="file-cta">
						<span class="file-label">
							Choose a file…
						</span>
					</span>
				</label>
			</div>
			<input type="hidden" name="redirect" value="http://localhost:8080">
			<div class="field">
				<div class="control">
					<button class="button is-link">Upload</button>
				</div>
			</div>
		</form>

		<div class="images">

			<div class="image" v-for="image in images" :key="image.uuid">
				<p>{{ image.title }}</p>
				<img @contextmenu.prevent="$refs.menu.open($event, { uuid: image.uuid })" :src="image.source" :alt="image.title">
			</div>

		</div>
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

#galery {
	display: relative;
	.images {
		display: flex;
		flex-wrap: wrap;

		.image {
			display: inline-block;
			padding: 1vh;
		}
	}

	img {
		width: 400px;
		z-index: 4;
	}

	form {
		padding-left: 10%;
		width: 80%;
	}

}
</style>

<script>
import axios from 'axios';
import VueContext from 'vue-context';
import 'vue-context/src/sass/vue-context.scss';

import Edit from '../components/Edit';

export default {
	data() {
		return {
			"images": [],
			"edit": ""
		}
	},
	components: {
		VueContext,
		Edit
	},
	methods: {
		onClick(text, uuid) {
			console.log(text, uuid);
			if (text === "edit") {
				this.edit = uuid
			} else if (text === "remove") {
				axios.put("http://localhost:8000/image", uuid
				).then((resp) => {
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
