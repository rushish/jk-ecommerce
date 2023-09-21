import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBRFR9wTv5d1V1yWLwbCeoiM6yuBh_Jlug",
    authDomain: "hackathon-bd18f.firebaseapp.com",
    projectId: "hackathon-bd18f",
    storageBucket: "hackathon-bd18f.appspot.com",
    messagingSenderId: "772244255441",
    appId: "1:772244255441:web:62330f22192059a8330bf0",
    measurementId: "G-JPCBEPJTRE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// const analytics = getAnalytics(app);