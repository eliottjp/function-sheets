import { db } from "./firebase-config.js";
import {
  collection,
  addDoc,
  getDocs,
} from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

export async function saveFunctionSheet(eventData) {
  await addDoc(collection(db, "functionSheets"), eventData);
}

export async function getFunctionSheets() {
  const querySnapshot = await getDocs(collection(db, "functionSheets"));
  return querySnapshot.docs.map((doc) => doc.data());
}
