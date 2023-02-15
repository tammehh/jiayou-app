// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAxNq4hkoOi9oTS9AwXfXFzwALhRpoVTp8",
    authDomain: "jiayouapp-935c9.firebaseapp.com",
    projectId: "jiayouapp-935c9",
    storageBucket: "jiayouapp-935c9.appspot.com",
    messagingSenderId: "740124432175",
    appId: "1:740124432175:web:c84ad5c9a3ebe5adb4f3da",
    databaseURL:"https://jiayouapp-935c9-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getDatabase(app);
const storage = getStorage();

export { app, analytics, auth, db, storage };


