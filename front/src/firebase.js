import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCBnzmA_N7WQVXXRfOxIMKnO0BXszdQVcg",
  authDomain: "mernfbook.firebaseapp.com",
  projectId: "mernfbook",
  storageBucket: "mernfbook.appspot.com",
  messagingSenderId: "692983438603",
  appId: "1:692983438603:web:cc3d6d9aff2065ee64960e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
