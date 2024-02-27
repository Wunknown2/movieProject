// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/app";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAWS2EtFxYhH1FUyuAYbowTN2vzdJMqR5k",
  authDomain: "movies-project-659c8.firebaseapp.com",
  projectId: "movies-project-659c8",
  storageBucket: "movies-project-659c8.appspot.com",
  messagingSenderId: "943471698213",
  appId: "1:943471698213:web:a723e2736a320285087acc",
  measurementId: "G-013FBN5H01",
};
// Initialize Firebase
const fire = firebase.initializeApp(firebaseConfig);
export default fire;
