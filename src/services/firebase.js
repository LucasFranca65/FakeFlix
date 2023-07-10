import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCjrqRljudg5VwX5Q6gguWmmPnFT0uIqj0",
  authDomain: "fakeflix-89daf.firebaseapp.com",
  databaseURL: "https://fakeflix-89daf-default-rtdb.firebaseio.com",
  projectId: "fakeflix-89daf",
  storageBucket: "fakeflix-89daf.appspot.com",
  messagingSenderId: "1014335632132",
  appId: "1:1014335632132:web:d4420a77bbf30a36361651"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };







/*import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyCjrqRljudg5VwX5Q6gguWmmPnFT0uIqj0",
  authDomain: "fakeflix-89daf.firebaseapp.com",
  databaseURL: "https://fakeflix-89daf-default-rtdb.firebaseio.com",
  projectId: "fakeflix-89daf",
  storageBucket: "fakeflix-89daf.appspot.com",
  messagingSenderId: "1014335632132",
  appId: "1:1014335632132:web:d4420a77bbf30a36361651"
};

const firebaseApp = firebase.initializeApp(config);

export const firestore = firebase.firestore();*/


export default firebase;