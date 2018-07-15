// Initialize Firebase
import firebase from 'firebase'

let config = {
    apiKey: "AIzaSyANvRU-DLcb0AEhSDVBuCLl53UTQdntXnI",
    authDomain: "galastore-76c30.firebaseapp.com",
    databaseURL: "https://galastore-76c30.firebaseio.com",
    projectId: "galastore-76c30",
    storageBucket: "galastore-76c30.appspot.com",
    messagingSenderId: "197394710467"
};

let init = firebase.initializeApp(config);

export const db = init.database()
export const namesRef = db.ref('names')
export const typesRef = db.ref('type')
export const descsRef = db.ref('description')
export const pricesRef = db.ref('price')
export const stocksRef = db.ref('stock')


export default init;