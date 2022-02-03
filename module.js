// Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.5/firebase-app.js";
import {
  getDatabase,
  set,
  ref,
  onValue,
  push,
  remove,
} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyApU8m47ed0svHmjCFqgcIenJgcs-mvC-U",
  authDomain: "apic-fb0bd.firebaseapp.com",
  databaseURL: "https://apic-fb0bd-default-rtdb.firebaseio.com",
  projectId: "apic-fb0bd",
  storageBucket: "apic-fb0bd.appspot.com",
  messagingSenderId: "992761872860",
  appId: "1:992761872860:web:42ab86dd80159ce4d20f19",
  measurementId: "G-HSZ49QZ2S2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export { set, ref, onValue, push, remove, getDatabase };
