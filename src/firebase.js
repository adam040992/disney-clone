import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';
import 'firebase/firestore';

  // const firebaseConfig = {
  //   apiKey: "AIzaSyA9BnlX96fMf7XiUVCFRsoQzG8DGERJkeY",
  //   authDomain: "disneyplus-clone-a33d5.firebaseapp.com",
  //   projectId: "disneyplus-clone-a33d5",
  //   storageBucket: "disneyplus-clone-a33d5.appspot.com",
  //   messagingSenderId: "37918794208",
  //   appId: "1:37918794208:web:dbe9842dfe1dda522a4b85",
  //   measurementId: "G-DRVLJKWRWG",
  // };

  const firebaseConfig = {
    apiKey: "AIzaSyAkBh5GKWBkoK_fYDBB06bgbULiZhN_SIk",
    authDomain: "disney-clone-5b451.firebaseapp.com",
    projectId: "disney-clone-5b451",
    storageBucket: "disney-clone-5b451.appspot.com",
    messagingSenderId: "699227743631",
    appId: "1:699227743631:web:10894c7a907e4f9d0117fa"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
