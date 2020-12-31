import Storage from './storage.js';
const validate = () => {
	if (Storage.credentials().has()) {
		console.log('has');
	} else {
		window.$app.$firebase.auth();
	}

}

export default validate;