import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, onValue, set, get, update, remove, push } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyBVPFhLtIps-PAJ4qMcj4WStCXF6kcZ7ZU",
  authDomain: "jaloliddin-kurs.firebaseapp.com",
  databaseURL: "https://jaloliddin-kurs-default-rtdb.firebaseio.com",
  projectId: "jaloliddin-kurs",
  storageBucket: "jaloliddin-kurs.firebasestorage.app",
  messagingSenderId: "182277939257",
  appId: "1:182277939257:web:d4f50ff3a6b186aba96de8"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
window._fb = { db, ref, onValue, set, get, update, remove, push };
window._fbReady = true;
window.dispatchEvent(new Event('fbReady'));
