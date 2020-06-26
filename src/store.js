import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

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
		loadingStatus: false
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
		}
	},
	actions: {
		fetchImages(context) {
			context.commit('SET_LOADING_STATUS', true);
			axios.get("http://localhost:8000/image/list").then((resp) => {
				context.commit("SET_LOADING_STATUS", false);
				context.commit("SET_IMAGES", resp.data);
			}).catch((error) => {
				console.error(error);
			});

		},
	}
});
