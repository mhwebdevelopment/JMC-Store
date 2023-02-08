import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
const firebaseConfig = {
  apiKey: 'AIzaSyCud0LiqHw22Z_xZfTUHplEC-TXtFTtZHA',
  authDomain: 'jmcny-26d81.firebaseapp.com',
  projectId: 'jmcny-26d81',
  storageBucket: 'jmcny-26d81.appspot.com',
  messagingSenderId: '120692886725',
  appId: '1:120692886725:web:1a09094185eed4e024f4ac',
  measurementId: 'G-FTEJNLSGC1',
};
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
