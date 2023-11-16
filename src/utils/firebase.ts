import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAlmuz2oAl12UbBEtnrr5zSgJ6HIXKtWAM",
  authDomain: "housify-3e322.firebaseapp.com",
  databaseURL: "https://housify-3e322-default-rtdb.firebaseio.com",
  projectId: "housify-3e322",
  storageBucket: "housify-3e322.appspot.com",
  messagingSenderId: "1019763874594",
  appId: "1:1019763874594:web:0161331c32dc3edf38a37b",
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
