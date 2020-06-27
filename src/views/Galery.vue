<template>
	<div id="galery">
		<Edit></Edit>
		<Popup></Popup>

		<form method="POST" enctype="multipart/form-data" action="http://localhost:8000/image/upload">
			<div class="field is-grouped">
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
				<input class="input" type="text" name="title" placeholder="title" required>

			</div>
			<input type="hidden" name="redirect" value="http://localhost:8081">
			<div class="field">
				<div class="control">
					<button class="button is-link">Upload</button>
				</div>
			</div>
		</form>

		<div class="images">
			<div class="image card" v-for="image in images" :key="image.uuid">
				<p>{{ image.title }}</p>
				<img class="card-image" @contextmenu.prevent="$refs.menu.open($event, { uuid: image.uuid, source: image.source })" :src="image.source" :alt="image.title">
			</div>

		</div>
		<vue-context ref="menu">
			<template slot-scope="child">
				<li>
					<a @click.prevent="onClick($event.target.innerText, child.data)">
						view
					</a>
				</li>
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
		z-index: 1;

		.image {
			display: inline-block;
			padding: 1vh;
			width: 400px;
		}
	}

	form {
		width: 80%;
		margin-bottom: 2vh;
	}

}
</style>

<script>
import store from "../store.js";
import axios from "axios";
import VueContext from "vue-context";
import "vue-context/src/sass/vue-context.scss";

import Edit from "../components/Edit";
import Popup from "../components/Popup";

export default {
	computed: {
		images: function () {
			return store.state.images;
		}
	},
	components: {
		VueContext,
		Edit,
		Popup
	},
	methods: {
		onClick(text, contextdata) {
			if (text == "view") {
				store.state.popup.source = contextdata.source;
				store.state.popup.isActive = true;
			} else if (text === "edit") {
				store.state.edit.uuid = contextdata.uuid;
				store.state.edit.isActive = true;
			} else if (text === "remove") {
				contextdata.status = 2;
				axios.put("http://localhost:8000/image", contextdata
				).then((resp) => {
					console.log(resp.data);
				}).catch((error) => {
					console.error(error);
				});
			}
		}
	},
	beforeCreate() {
		store.dispatch("fetchImages");
	}
}
</script>
