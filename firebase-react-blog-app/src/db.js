import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRtRegbP4zbvjKLODF1CuQUNn_h3cLgoo",
  authDomain: "base-for-exercises.firebaseapp.com",
  projectId: "base-for-exercises",
  storageBucket: "base-for-exercises.appspot.com",
  messagingSenderId: "642541990690",
  appId: "1:642541990690:web:46eda35421e6f409dd6b7b",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
