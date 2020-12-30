import Storage from './storage.js';
 const validate = () => {
	if(Storage.credentials().has()) {
	
} else {
	console.log(window.app.$firebase);
	window.$app.$firebase.auth();
}

}

export default validate;