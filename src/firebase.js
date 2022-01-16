import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdpeKuXDnDQ10T-HaDGyaEmGTH9zOzJDY",
  authDomain: "disney-clone-51e81.firebaseapp.com",
  projectId: "disney-clone-51e81",
  storageBucket: "disney-clone-51e81.appspot.com",
  messagingSenderId: "338599107240",
  appId: "1:338599107240:web:1bb7520e6c07b5e84c809d",
  measurementId: "G-HVDPPX9WZ0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// const storage = firebase.storage();

export { auth, provider };
export default db;
