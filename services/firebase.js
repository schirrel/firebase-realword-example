import Storage from './storage.js';

class AppFirebase {

	constructor(opt = {}) {
		this.config = {
			apiKey: "AIzaSyAglvErXPN_wME6zzhQ3LFyEhNvnC1dkfY",
			authDomain: "schirrel.firebaseapp.com",
			databaseURL: "https://schirrel-default-rtdb.firebaseio.com",
			projectId: "schirrel",
			storageBucket: "schirrel.appspot.com",
			messagingSenderId: "845512652775",
			appId: "1:845512652775:web:212098a0364512381def42",
			measurementId: "G-YLTY8HCRDX"
		};
		if (!firebase.apps.length) {


			window.$app = { $firebase: firebase.initializeApp(this.config)}
			//firebase.analytics();
		}
		this.provider = new firebase.auth.GoogleAuthProvider();
		this.provider.addScope('email');


		firebase.auth().languageCode = 'pt';
		firebase.auth().onAuthStateChanged((user) => {
			if (!user || !user.emailVerified) {
				console.warn("INTRUSO");
			}
		});
	}

	auth() {



		firebase.auth().signInWithPopup(this.provider).then((result) => {

			// This gives you a Google Access Token. You can use it to access the Google API.
			var token = result.credential.accessToken;
			var user = {
				token,
				name: result.user.displayName,
				email: result.user.email,
				photoURL: result.user.photoURL

			};
			Storage.credentials().set(user);
			window.$router.push('/');


		}).catch(function (error) {

			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// The email of the user's account used.
			var email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential;

			console.log(error);

			/*	if (error && error.code == "auth/popup-blocked") {
					alert("Desbloqueie o popup da pagina e atualize-a.")
				}
				if (window.$router.currentRoute.path != '/')
					window.$router.push('/').catch(err => { })*/

		});

	}
}







export default AppFirebase;