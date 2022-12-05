// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyAdT1OvEz_zqvbIw9tT19PF01AT8J1l98U',
    authDomain: 'elmejorreact.firebaseapp.com',
    projectId: 'elmejorreact',
    storageBucket: "elmejorreact.appspot.com",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();
export default app;
