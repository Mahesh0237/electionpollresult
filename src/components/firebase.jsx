import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAsr4UTcte7SGoNKkJEJ9ZsQGAxkr-M9Lg",
  authDomain: "ec-hittv-in.firebaseapp.com",
  databaseURL: "https://ec-hittv-in-default-rtdb.firebaseio.com",
  projectId: "ec-hittv-in",
  storageBucket: "ec-hittv-in.appspot.com",
  messagingSenderId: "378844183450",
  appId: "1:378844183450:web:3ea7f3f1675904c5aed823",
  measurementId: "G-ZCF6900PCB"
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app
