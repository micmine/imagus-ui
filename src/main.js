import Vue from "vue";
import store from  "./store";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueKeyCloak from "@dsb-norge/vue-keycloak-js";

Vue.config.productionTip = false;

function tokenInterceptor () {
	axios.interceptors.request.use(config => {
		config.headers.Authorization = `Bearer ${Vue.prototype.$keycloak.token}`
		return config
	}, error => {
		return Promise.reject(error)
	})
}


Vue.use(VueKeyCloak, {
	init: {
		onLoad: "login-required",
		checkLoginIframe: false
	},
	config: {
		realm: "master",
		url: "http://localhost:8080/auth",
		clientId: "imagus-ui"
	},
	onReady: () => {
		tokenInterceptor();

		new Vue({
			router,
			store,
			render: h => h(App)
		}).$mount("#app")
	}
})


