import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDbaLN4UeATXhbh8-htFPyES0ULGTPW1hg",
  authDomain: "function-sheet-app.firebaseapp.com",
  projectId: "function-sheet-app",
  storageBucket: "function-sheet-app.firebasestorage.app",
  messagingSenderId: "680449761568",
  appId: "1:680449761568:web:c435d8ae376dbf18167745",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
