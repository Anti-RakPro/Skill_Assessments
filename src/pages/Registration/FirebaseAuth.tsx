import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6eyqAMimEp1ZekdYLv039cOXpam1-A68",
  authDomain: "skill-assessments-a758d.firebaseapp.com",
  projectId: "skill-assessments-a758d",
  // storageBucket: "skill-assessments-a758d.appspot.com",
  // messagingSenderId: "392264449678",
  appId: "1:392264449678:web:48baab4c1d716870df53df",
  measurementId: "G-ZDYM5XPTLV",
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
const db = getFirestore(app);
console.log("db", db);

// some update firestore settings from tutorial video, that do not exist nowadays
// db.settings({ timestampsInSnapshots: true });

export function CreateUser(formData: object) {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, formData.email, formData.password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage);
    });

  console.log("getAuth()", getAuth());
}

// export default CreateUser;
