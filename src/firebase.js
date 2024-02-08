import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBkCrqhk4oRbnH4ji6vg7NNOTmFGDiFfVA",
  authDomain: "food-villa-1258c.firebaseapp.com",
  projectId: "food-villa-1258c",
  storageBucket: "food-villa-1258c.appspot.com",
  messagingSenderId: "368019636206",
  appId: "1:368019636206:web:33145c346967dca5f998ff",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default auth;
