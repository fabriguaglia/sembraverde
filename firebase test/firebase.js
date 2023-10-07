import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCGBmFOZylyUK4zf4jdlQEAwGOISTjkME8",
  authDomain: "sembraverde.firebaseapp.com",
  projectId: "sembraverde",
  storageBucket: "sembraverde.appspot.com",
  messagingSenderId: "867266924396",
  appId: "1:867266924396:web:4002827dac330b57356d49",
  measurementId: "G-H8TP9PK06N"
};

const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default firebase;