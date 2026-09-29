// firebase-config.js
// นำค่า configuration ที่ได้จาก Firebase Console (Project Settings > General > Your apps) มาใส่ที่นี่
const firebaseConfig = {
  apiKey: "AIzaSyDFRNWTClVv94xOVoYTs0qo_7l6oreZJt4",
  authDomain: "sangkhlaburi-maintenance.firebaseapp.com",
  databaseURL: "https://sangkhlaburi-maintenance-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "sangkhlaburi-maintenance",
  storageBucket: "sangkhlaburi-maintenance.firebasestorage.app",
  messagingSenderId: "610037971702",
  appId: "1:610037971702:web:3187b3c1196565439d8ad7",
  measurementId: "G-B2FB16LMTT"
};
// ส่งออกตัวแปรเพื่อให้ index.html เรียกใช้ได้
if (typeof window !== 'undefined') {
  window.firebaseConfig = firebaseConfig;
}
