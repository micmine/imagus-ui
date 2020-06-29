<template>
	<div id="galery">
		<Edit></Edit>
		<Popup></Popup>

		<div class="images">
			<div class="image card" v-for="image in images" @contextmenu.prevent="$refs.menu.open($event, { uuid: image.uuid, source: image.source })" :key="image.uuid">
				<p>{{ image.title }}</p>
				<img class="card-image" :src="image.source" :alt="image.title">
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
						restore
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
			
			img {
				width: 400px;
				height: 400px;
			}
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
			return store.state.deletedImages;
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
			} else if (text === "restore") {
				contextdata.status = 1;
				axios.put("http://localhost:8000/image", contextdata
				).then((resp) => {
					console.log(resp.data);
					store.dispatch("fetchImages");
				}).catch((error) => {
					console.error(error);
				});
			}
		}
	},
	beforeCreate() {
		store.dispatch("fetchDeletedImages");
	}
}
</script>

