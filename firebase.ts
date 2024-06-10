import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from "firebase/storage";

const firebaseApp = initializeApp({
      apiKey: "AIzaSyDsPJyWKdyPEgLxDDYUb5l70M56kpPNHFQ",
      authDomain: "myporfolio-446cf.firebaseapp.com",
      projectId: "myporfolio-446cf",
      storageBucket: "myporfolio-446cf.appspot.com",
      messagingSenderId: "833182413214",
      appId: "1:833182413214:web:71c32eeb6de28aa66a268f"
});

const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export { db, storage };
