import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDmUZi3OE_f2mEQ-7fEzn_C38iWkKUatrI",
  authDomain: "netflix-clone-redux-2310.firebaseapp.com",
  projectId: "netflix-clone-redux-2310",
  storageBucket: "netflix-clone-redux-2310.appspot.com",
  messagingSenderId: "833788877566",
  appId: "1:833788877566:web:ece3ca52ab0eb15e2763af",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
