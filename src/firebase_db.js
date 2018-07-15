// Initialize Firebase
import { initializeApp } from 'firebase'

let config = initializeApp({apiKey: "AIzaSyANvRU-DLcb0AEhSDVBuCLl53UTQdntXnI",
    authDomain: "galastore-76c30.firebaseapp.com",
    databaseURL: "https://galastore-76c30.firebaseio.com",
    projectId: "galastore-76c30",
    storageBucket: "galastore-76c30.appspot.com",
    messagingSenderId: "197394710467"});

// export default firebase.initializeApp(config);
export const db = config.database()
export const nameRef = db.ref('names')
export const typeRef = db.ref('type')
export const descRef = db.ref('description')
export const priceRef = db.ref('price')
export const stockRef = db.ref('stock')

