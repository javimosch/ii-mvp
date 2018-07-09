if (!process.server) {
	initFirebase();
	function initFirebase() {
		if (!window.firebase) {
			return setTimeout(initFirebase, 100);
		}
		var config = {
			apiKey: "AIzaSyC-ULEyPjaXaPYPyeMRG6jEfz3AqYkEBjE",
			authDomain: "incubadora-itinerante.firebaseapp.com",
			databaseURL: "https://incubadora-itinerante.firebaseio.com",
			projectId: "incubadora-itinerante",
			storageBucket: "incubadora-itinerante.appspot.com",
			messagingSenderId: "43251790837"
		};
		firebase.initializeApp(config);
	}
}