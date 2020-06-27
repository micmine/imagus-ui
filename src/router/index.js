import Vue from "vue";
import VueRouter from "vue-router";
import Galery from "../views/Galery.vue";
import Deleted from "../views/Deleted.vue";

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		name: "Home",
		component: Galery
	},
	{
		path: "/deleted",
		name: "Deleted",
		component: Deleted
	}
]

const router = new VueRouter({
	routes
})

export default router
