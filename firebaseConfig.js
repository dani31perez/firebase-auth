import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBda1CG3wLwvUoZCEyLWi5A8oB7e8MnZb0",
  authDomain: "lab9-3176f.firebaseapp.com",
  projectId: "lab9-3176f",
  storageBucket: "lab9-3176f.firebasestorage.app",
  messagingSenderId: "562422653209",
  appId: "1:562422653209:web:dec108460cb2b032c7a588"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);