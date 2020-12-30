import router from "./router.js";
import App from "./components/app.js";
import AppFirebase from "./services/firebase.js";

window.$router = router;
window.$app ={$firebase : new AppFirebase()}

var vm = new Vue({
	el: '#app',
	router,
	components: { App},
	template: '<firebase-admin-app/>'
});

Vue.filter('formatDate', function (value) {
	if (value) {
		return new Date(value).format('dd-mm-yyyy HH:MM:ss')
	}
})


Vue.use(Toasted)
