// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import data from ".././components/data/data";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBKMWH_BPFF6PkZoly2zezReQw_7yoY0Q",
  authDomain: "react-proyecto-118cc.firebaseapp.com",
  projectId: "react-proyecto-118cc",
  storageBucket: "react-proyecto-118cc.appspot.com",
  messagingSenderId: "1019265584702",
  appId: "1:1019265584702:web:efdb65a58706927136cb6f",
  measurementId: "G-BJ4P58S35X",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestoredb = getFirestore(app);



// export async function saveProductsToFirebase(){
//   const collectionProducts = collection(firestoredb, "tecno2");
  
//   for (let item of data){
//     const docref = await addDoc(collectionProducts, item);
//     console.log(docref.id)
//   }
// }


export default firestoredb;