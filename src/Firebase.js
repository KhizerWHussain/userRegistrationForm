import { getDatabase } from "firebase/database";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    // your firebase config data
};

const app = initializeApp(firebaseConfig);


export const database = getDatabase(app);