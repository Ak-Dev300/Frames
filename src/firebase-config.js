// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG4Q8ERhLVuCoyw4joj2tWUsyKBR1p83A",
  authDomain: "image-gallery-48d61.firebaseapp.com",
  projectId: "image-gallery-48d61",
  storageBucket: "image-gallery-48d61.appspot.com",
  messagingSenderId: "102476459237",
  appId: "1:102476459237:web:d71657d9e4ba39b6b0f80c",
  measurementId: "G-3PH5D9MGPM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);