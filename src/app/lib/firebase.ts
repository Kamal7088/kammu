// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

import { getAuth ,GoogleAuthProvider} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQ0bXZYzslHgDa_fKNaEh-xfYZzJz04Yc",
  authDomain: "kamal-44786.firebaseapp.com",
  projectId: "kamal-44786",
  storageBucket: "kamal-44786.firebasestorage.app",
  messagingSenderId: "601663175328",
  appId: "1:601663175328:web:3224ef48f49a420977a7c5",
  measurementId: "G-X5JVM8WFP7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

export default app;
export const provider = new GoogleAuthProvider();