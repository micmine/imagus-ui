import Vue from "vue";
import Vuex from "vuex";

import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		popup: {
			source: "",
			isActive: false
		},
		edit: {
			image: {},
			uuid: "",
			isActive: false
		},
		images: [],
		deletedImages: [],
		loadingStatus: false,
		frontend: "http://localhost:8081",
		backend: "http://localhost:8000"
	},
	mutations: {
		SET_POPUP_SOURCE(state, source) {
			state.popup.source = source;
		},
		SET_POPUP_ISACTIVE(state, isActive) {
			state.popup.isActive = isActive;
		},
		SET_EDIT_IMAGE(state, image) {
			state.edit.image = image;
		},
		SET_EDIT_ISACTIVE(state, isActive) {
			state.edit.isActive = isActive;
		},
		SET_IMAGES(state, images) {
			state.images = images;
		},
		SET_LOADING_STATUS(state, status) {
			state.loadingStatus = status;
		},
		SET_DELETED_IMAGES(state, images) {
			state.deletedImages = images;
		}

	},
	actions: {
		fetchImages(context) {
			context.commit("SET_LOADING_STATUS", true);
			axios.get(this.state.backend + "/image/list").then((resp) => {
				context.commit("SET_LOADING_STATUS", false);
				context.commit("SET_IMAGES", resp.data);
			}).catch((error) => {
				console.error(error);
			});

		},
		fetchEdit(context) {
			context.commit("SET_LOADING_STATUS", true);
			axios.post(this.state.backend + "/image", { "uuid": this.state.edit.uuid }).then((resp) => {
				context.commit("SET_LOADING_STATUS", false);
				context.commit("SET_EDIT_IMAGE", resp.data);
			}).catch((error) => {
				console.error(error);
			});
		},
		saveEdit(context) {
			context.commit("SET_LOADING_STATUS", true);
			axios.put(this.state.backend + "/image", this.state.edit.image).then(() => {
				context.commit("SET_LOADING_STATUS", false);
			}).catch((error) => {
				console.error(error);
			});
		},
		fetchDeletedImages(context) {
			context.commit("SET_LOADING_STATUS", true);
			axios.post(this.state.backend + "/image/search", { status: 2 }).then((resp) => {
				context.commit("SET_LOADING_STATUS", false);
				context.commit("SET_DELETED_IMAGES", resp.data);
			}).catch((error) => {
				console.error(error);
			});

		},
	}
});
