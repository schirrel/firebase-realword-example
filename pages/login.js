import AuthGuard from '../services/guard.js';
export default Vue.component("AppLogin", {
	template: `
			<main>
				<h1>Google PopUp is going to show up </h1>
			</main>
	`,
	data: function () {
		return {
		};
	},
	mounted: function () {
		console.log("mounted");
		AuthGuard();
	},

});